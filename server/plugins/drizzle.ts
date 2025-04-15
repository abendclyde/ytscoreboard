import { migrate } from 'drizzle-orm/node-postgres/migrator'
import { consola } from 'consola'
import { eq } from 'drizzle-orm'
import { categories } from '~/db/categories'
import { useDrizzle } from '~/server/utils/drizzle'
import { points } from '~/db/points'

export default defineNitroPlugin(async () => {
	const db = useDrizzle()

	try {
		await migrate(db, { migrationsFolder: './drizzle' },
		)
		consola.log('Migration successful!')
	}
	catch (error) {
		consola.error('Migration failed:', error)
	}

	const category: typeof categories.$inferInsert = {
		name: 'Er isst Käse.',
		youtuber: 'Mickey Mouse',
		weight: 50,
	}
	await db.insert(categories).values(category)

	const sq = db.select().from(categories).where(eq(categories.youtuber, 'Mickey Mouse')).as('sq')
	const p = await db.select({
		id: points.id,
		category: sq.youtuber,
	}).from(points).leftJoin(sq, eq(points.category, sq.id))
	console.log(p)
	consola.log('New category created!')
})
