import * as client from 'openid-client'

export default defineEventHandler(async (event) => {
  const { scope, redirectUri, pkce } = useRuntimeConfig().oidc

  const config = await useOIDCConfig()

  const session = await useLoginSession(event)
  await session.clear()

  // generate PKCE code verifier and challenge
  const codeVerifier: string = client.randomPKCECodeVerifier()
  const codeChallenge: string = await client.calculatePKCECodeChallenge(codeVerifier)

  const parameters: Record<string, string> = {
    redirect_uri: redirectUri,
    scope: scope,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256',
  }

  // if the server does not support PKCE, we need to use state instead
  if (pkce) {
    await session.update({
      codeVerifier,
    })
  }

  const state = client.randomState()
  parameters.state = state
  await session.update({
    state,
  })

  // redirect to authorization server
  const redirectTo: URL = client.buildAuthorizationUrl(config, parameters)
  return sendRedirect(event, redirectTo.toString())
})
