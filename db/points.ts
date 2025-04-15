import { integer, pgTable, varchar } from 'drizzle-orm/pg-core'
import { categories } from './categories'

export const points = pgTable('points', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	category: integer().references(() => categories.id, { onDelete: 'cascade' }).unique().notNull(),
})
