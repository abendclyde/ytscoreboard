import type { UseFetchOptions } from '#app'

export const useAPI = () => {
	const baseURL = 'api/'

	const useAPIFetch = <T>(
		url: string | (() => string),
		options?: UseFetchOptions<T>,
	) => {
		const apiFetch = $fetch.create({
			baseURL: baseURL,
			onResponseError({ response }) {
				const statusMessage = response?.status === 401 ? 'Unauthorized' : 'Response failed'
				throw createError({
					statusCode: response?.status,
					statusMessage,
				})
			},
		})

		return useFetch(url, {
			...options,
			$fetch: apiFetch,
		})
	}

	const getWhatever = async () => {
		const { data } = await useAPIFetch<boolean>('me')
		return data
	}

	return {
		getWhatever,
	}
}
