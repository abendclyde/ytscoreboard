import type { EventHandlerRequest, H3Event } from 'h3'
import type { Auth, LoginVerifier } from '~/server/types/auth'

const { sessionPassword } = useRuntimeConfig()

export const useLoginSession = (
	event: H3Event<EventHandlerRequest>,
) => {
	return useSession<LoginVerifier>(event, {
		name: 'login',
		password: sessionPassword,
		maxAge: 60 * 30, // 30 minutes
		cookie: {
			httpOnly: true,
			secure: true,
			sameSite: 'lax',
		},
	})
}

export const useAuthSession = (
	event: H3Event,
) => {
	return useSession<Auth>(event, {
		name: 'auth',
		password: sessionPassword,
		maxAge: 60 * 60 * 24 * 365, // 1 year
		cookie: {
			httpOnly: true,
			secure: true,
			sameSite: 'lax',
		},
	})
}
