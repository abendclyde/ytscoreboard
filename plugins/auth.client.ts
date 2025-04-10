export default defineNuxtPlugin(async (nuxt) => {
	nuxt.hook('app:mounted', async () => {
		await useAuth().fetch()
	})
})
