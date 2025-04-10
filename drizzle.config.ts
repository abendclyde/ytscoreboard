import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
	schema: './db',
	dialect: 'sqlite',
	dbCredentials: {
		url: process.env.DB_FILE_NAME!,
	},
})
