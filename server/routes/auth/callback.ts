import * as client from 'openid-client'

export default defineEventHandler(async (event) => {
  const { pkce } = useRuntimeConfig().oidc

  const config = await useOIDCConfig()
  const loginSession = await useLoginSession(event)
  const authSession = await useAuthSession(event)

  const checks: client.AuthorizationCodeGrantChecks = {
    expectedState: loginSession.data.state,
  }
  if (pkce) {
    checks.pkceCodeVerifier = loginSession.data.codeVerifier
  }

  await loginSession.clear()

  const tokens: client.TokenEndpointResponse = await client.authorizationCodeGrant(
    config,
    getRequestURL(event),
    checks,
  )

  await authSession.update({
    accessToken: tokens.access_token,
    refreshToken: tokens.refresh_token,
    idToken: tokens.id_token,
    expiresIn: tokens.expires_in,
  })
})
