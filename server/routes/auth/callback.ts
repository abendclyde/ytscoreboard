import * as client from 'openid-client'
import dayjs from 'dayjs'

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
		claims: {
			// @ts-expect-error: claims() is not typed
			sub: tokens.claims().sub,
			// @ts-expect-error: claims() is not typed
			name: tokens.claims().given_name as string,
			// @ts-expect-error: claims() is not typed
			picture: tokens.claims().picture as string,
		},
	})

	if (tokens.expires_in) {
		const expiresAt = dayjs().add(tokens.expires_in, 'seconds')
		await authSession.update({ expiresAt: expiresAt.unix() })
	}

	return sendRedirect(event, '/')
})
