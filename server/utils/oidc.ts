import type { Configuration } from 'openid-client'
import * as client from 'openid-client'
import dayjs from 'dayjs'
import type { H3Event } from 'h3'
import { consola } from 'consola'

const { server, clientID, clientSecret, devMode } = useRuntimeConfig().oidc

const discoverConfig = async (): Promise<Configuration> => {
	return client.discovery(
		new URL(server),
		clientID,
		clientSecret,
	)
}

let config: Promise<Configuration> = discoverConfig()

/**
 * Get the OIDC configuration.
 * If it is not yet available, discover it.
 */
export const useOIDCConfig = async (): Promise<Configuration> => {
	try {
		return await config
	}
	catch (e: unknown) {
		if (e instanceof TypeError) {
			config = discoverConfig()
			return config
		}
		throw createError(`unknown error: ${e}`)
	}
}

/**
 * Validate the token in the session.
 * If it is expired, refresh it.
 */
export const validateToken = async (event: H3Event): Promise<boolean> => {
	if (devMode && import.meta.dev) {
		return true
	}

	const session = await useAuthSession(event)

	if (!session.data.accessToken && !session.data.refreshToken) {
		await session.clear()
		return false
	}

	const expiresAt = dayjs.unix(session.data.expiresAt)
	if (dayjs().isAfter(expiresAt.subtract(1, 'minute'))) {
		console.log('token expired!')
		try {
			await refreshToken(event)
		}
		catch (err) {
			consola.error(err)
			await session.clear()
			return false
		}
	}

	return true
}

/**
 * Refresh the token in the session.
 */
export const refreshToken = async (event: H3Event): Promise<void> => {
	const config = await useOIDCConfig()
	const session = await useAuthSession(event)

	try {
		const tokens = await client.refreshTokenGrant(config, session.data.refreshToken)

		const expiresAt = dayjs().add(tokens.expires_in ?? 3600, 'seconds')
		await session.update({
			accessToken: tokens.access_token,
			refreshToken: tokens.refresh_token,
			idToken: tokens.id_token,
			expiresAt: expiresAt.unix(),
		})
	}
	catch (err) {
		throw createError('token refresh failed')
	}
}
