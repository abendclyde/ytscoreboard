import { drizzle } from 'drizzle-orm/libsql'

const { dbURL } = useRuntimeConfig()
const db = drizzle(dbURL)

export const useDrizzle = () => {
	return db
}
