import { drizzle } from 'drizzle-orm/node-postgres'
import { points } from '~/db/points'
import { categories } from '~/db/categories'

const { dbURL } = useRuntimeConfig()
const db = drizzle({
	schema: { points, categories },
	connection: {
		connectionString: dbURL,
	},
})

export const useDrizzle = () => {
	return db
}
