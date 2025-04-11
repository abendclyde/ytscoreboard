export default defineNuxtRouteMiddleware((to) => {
	const { loggedIn } = useAuth()

	if (to.name == 'login') {
		if (loggedIn.value) {
			return navigateTo({ name: 'index' })
		}
		return
	}

	if (!loggedIn.value) {
		return navigateTo({ name: 'login' })
	}
})
