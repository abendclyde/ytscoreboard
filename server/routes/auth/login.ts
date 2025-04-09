import * as client from 'openid-client'

export default defineEventHandler(async (event) => {
	const { scope, redirectUri, pkce } = useRuntimeConfig().oidc

	const config = await useOIDCConfig()

	const session = await useLoginSession(event)
	await session.clear()

	const parameters: Record<string, string> = {
		redirect_uri: redirectUri,
		scope: scope,
	}

	const state = client.randomState()
	parameters.state = state
	await session.update({
		state,
	})

	// if the server does not support PKCE, we need to use state instead
	if (pkce) {
		// generate PKCE code verifier and challenge
		const codeVerifier: string = client.randomPKCECodeVerifier()
		parameters.code_challenge = await client.calculatePKCECodeChallenge(codeVerifier)
		parameters.code_challenge_method = 'S256'

		await session.update({
			codeVerifier,
		})
	}

	// redirect to authorization server
	const redirectTo: URL = client.buildAuthorizationUrl(config, parameters)
	return sendRedirect(event, redirectTo.toString())
})
