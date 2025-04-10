import { drizzle } from 'drizzle-orm/libsql'
import { migrate } from 'drizzle-orm/libsql/migrator'
import { consola } from 'consola'
import { usersTable } from '~/db/users'
import { useDrizzle } from '~/server/utils/drizzle'

export default defineNitroPlugin(async () => {
	const db = useDrizzle()

	try {
		await migrate(db, { migrationsFolder: './drizzle' })
		consola.log('Migration successful!')
	}
	catch (error) {
		consola.error('Migration failed:', error)
	}

	const user: typeof usersTable.$inferInsert = {
		name: 'John',
		age: 30,
		email: 'john@example.com',
	}
	await db.insert(usersTable).values(user)
	consola.log('New user created!')
})
