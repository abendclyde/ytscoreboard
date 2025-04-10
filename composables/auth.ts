import type { User } from '~/types/user'

export const useAuth = () => {
	const state = useState<User | undefined>('auth', undefined)

	const user: ComputedRef<User | undefined> = computed(() => state.value ?? undefined)
	const loggedIn: ComputedRef<boolean> = computed<boolean>(() => {
		return Boolean(state.value?.expiresAt)
	})

	const fetch = async (): Promise<void> => {
		state.value = await useRequestFetch()<User>('/api/me')
			.catch(() => login()) ?? undefined
	}

	const login = async (): Promise<void> => {
		navigateTo('/auth/login', { external: true })
	}

	const logout = async (): Promise<void> => {
		navigateTo('/auth/logout', { external: true })
	}

	return {
		state,
		user,
		loggedIn,
		fetch,
		login,
		logout,
	}
}
