import type { User } from '~/types/user'

export default defineAuthEventHandler(async (event) => {
	const session = await useAuthSession(event)

	const user: User = {
		name: session.data.claims.name,
		picture: session.data.claims.picture,
		expiresAt: session.data.expiresAt,
	}

	return user
})
