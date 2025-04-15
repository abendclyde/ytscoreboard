import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
	schema: './db',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DB_URL!,
	},
})
