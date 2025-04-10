import { consola } from 'consola'

export default defineNitroPlugin((nitro) => {
	nitro.hooks.hook('error', async (error, { event }) => {
		// consola.error(`${event?.path} - Application Error:`, error)
	})
})
