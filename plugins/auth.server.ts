export default defineNuxtPlugin({
	async setup() {
		await useAuth().fetch()
	},
})
