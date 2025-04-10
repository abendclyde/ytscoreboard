import * as client from 'openid-client'
import dayjs from 'dayjs'

export default defineEventHandler(async (event) => {
	const { devMode } = useRuntimeConfig().oidc
	if (devMode && import.meta.dev) {
		return sendRedirect(event, '/')
	}

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

	const tokens: client.TokenEndpointResponse & client.TokenEndpointResponseHelpers = await client.authorizationCodeGrant(
		config,
		getRequestURL(event),
		checks,
	)

	const expiresAt = dayjs().add(tokens.expires_in ?? 3600, 'seconds')
	await authSession.update({
		accessToken: tokens.access_token,
		refreshToken: tokens.refresh_token,
		idToken: tokens.id_token,
		expiresAt: expiresAt.unix(),
		claims: {
			sub: tokens.claims()?.sub as string,
			name: tokens.claims()?.given_name as string,
			picture: tokens.claims()?.picture as string,
		},
	})

	return sendRedirect(event, '/')
})
