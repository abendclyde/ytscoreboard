import { appendResponseHeader } from 'h3'
import type { FetchResponse } from 'ofetch'
import type { NitroFetchRequest, TypedInternalResponse } from 'nitropack'
import { consola } from 'consola'
import type { User } from '~/types/user'

export const useAuth = () => {
	const state = useState<User>('auth', undefined)

	const user: ComputedRef<User | undefined> = computed(() => state.value)
	const loggedIn: ComputedRef<boolean> = computed<boolean>(() => {
		return Boolean(state.value?.expiresAt)
	})

	const fetchWithCookie = async <T>(url: string): Promise<TypedInternalResponse<NitroFetchRequest, T, 'get'> | undefined> => {
		const event = useRequestEvent()

		const res = await $fetch.raw<T>(url, {
			headers: event?.headers,
		})

		// get set-cookie headers from server response
		const cookies = res.headers.getSetCookie()

		// attach set-cookie headers to client response
		for (const cookie of cookies) {
			appendResponseHeader(event!, 'set-cookie', cookie)
		}

		return res._data
	}

	const fetch = async (): Promise<void> => {
		// on ssr forward set-cookie header to client
		if (import.meta.server) {
			const { data } = await useAsyncData(() => fetchWithCookie<User>('/api/me'))
			state.value = data.value as User
			return
		}

		const { data } = await useFetch<User>('/api/me')
		state.value = data.value as User
	}

	const login = async (): Promise<void> => {
		navigateTo('/auth/login', { external: true })
	}

	const logout = async (): Promise<void> => {
		navigateTo('/auth/logout', { external: true })
	}

	return {
		fetch,

		user,
		loggedIn,

		login,
		logout,
	}
}
