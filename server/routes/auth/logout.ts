import * as client from 'openid-client'

export default defineEventHandler(async (event) => {
	const { logoutURL, devMode } = useRuntimeConfig().oidc
	if (devMode && import.meta.dev) {
		return sendRedirect(event, '/')
	}

	const config = await useOIDCConfig()
	const session = await useAuthSession(event)

	const redirectTo: URL = client.buildEndSessionUrl(config, {
		post_logout_redirect_uri: logoutURL,
		id_token_hint: session.data.idToken,
	})

	await session.clear()

	return sendRedirect(event, redirectTo.toString())
})
