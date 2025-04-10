import * as client from 'openid-client'

export default defineEventHandler(async (event) => {
	console.log('logout!')

	const config = await useOIDCConfig()
	const { logoutURL } = useRuntimeConfig().oidc
	const session = await useAuthSession(event)

	const redirectTo: URL = client.buildEndSessionUrl(config, {
		post_logout_redirect_uri: logoutURL,
		id_token_hint: session.data.idToken,
	})

	console.log(redirectTo)

	await session.clear()

	console.log('what?')

	return sendRedirect(event, redirectTo.toString())
})
