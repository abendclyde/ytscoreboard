import { drizzle } from 'drizzle-orm/node-postgres'
import { consola } from 'consola'

const { dbURL } = useRuntimeConfig()
const db = drizzle({
	connection: {
		connectionString: dbURL,
	},
})

export const useDrizzle = () => {
	return db
}
