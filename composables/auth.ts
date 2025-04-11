import type { User } from '~/types/user'

export const useAuth = () => {
	const state = useState<User>('auth', undefined)

	const user: ComputedRef<User | undefined> = computed(() => state.value)
	const loggedIn: ComputedRef<boolean> = computed<boolean>(() => {
		return Boolean(state.value?.expiresAt)
	})

	const fetch = async (): Promise<void> => {
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
		state,
		user,
		loggedIn,

		fetch,
		login,
		logout,
	}
}
