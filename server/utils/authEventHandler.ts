import type { EventHandler, EventHandlerRequest } from 'h3'

export const defineAuthEventHandler = <T extends EventHandlerRequest, D>(handler: EventHandler<T, D>): EventHandler<T, D> =>
	defineEventHandler<T>(async (event) => {
		const loggedIn = await validateToken(event)

		if (!loggedIn) {
			throw createError({
				statusCode: 401,
				message: 'Unauthorized',
			})
		}

		return handler(event)
	})
