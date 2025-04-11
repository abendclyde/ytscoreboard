import type { EventHandler, EventHandlerRequest } from 'h3'

export const defineAuthEventHandler = <T extends EventHandlerRequest, D>(handler: EventHandler<T, D>): EventHandler<T, D> =>
	defineEventHandler<T>(async (event) => {
		const loggedIn = await validateToken(event)

		if (!loggedIn) {
			setResponseStatus(event, 401)
			return {}
		}

		return handler(event)
	})
