import * as client from 'openid-client'

export default defineAuthEventHandler(async (event) => {
	const session = await useAuthSession(event)
	// const userInfo = await client.fetchUserInfo(await useOIDCConfig(), session.data.accessToken, session.data.sub)

	return {
		name: session.data.claims.name,
		picture: session.data.claims.picture,
	}
})
