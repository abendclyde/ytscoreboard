import type { EventHandler, EventHandlerRequest } from 'h3'
import * as client from 'openid-client'
import dayjs from 'dayjs'

export const defineAuthEventHandler = <T extends EventHandlerRequest, D>(
	handler: EventHandler<T, D>,
): EventHandler<T, D> =>
	defineEventHandler<T>(async (event) => {
		const session = await useAuthSession(event)
		if (!session || !session.data.accessToken) {
			await session.clear()
			throw createError({
				statusCode: 401,
				message: 'Unauthorized',
			})
		}

		if (dayjs().isAfter(dayjs.unix(session.data.expiresAt).subtract(30, 'minutes'))) {
			const config = await useOIDCConfig()

			try {
				const tokens = await client.refreshTokenGrant(config, session.data.refreshToken)

				await session.update({
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
					await session.update({ expiresAt: expiresAt.unix() })
				}
			}
			catch (err) {
				console.error(err)
				await session.clear()
				throw createError({
					statusCode: 401,
					message: 'Unauthorized',
				})
			}
		}

		try {
			return await handler(event)
		}
		catch (err) {
			console.error(err)
			throw createError({
				statusCode: 500,
				message: 'Oops',
			})
		}
	})
