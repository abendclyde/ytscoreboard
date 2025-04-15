// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/eslint',
		'@nuxt/ui',
		'@nuxt/image',
		'@nuxt/fonts',
		'nuxt-security',
		'@pinia/nuxt',
	],
	imports: {
		dirs: ['./types'],
	},
	devtools: { enabled: true },
	app: {
		head: {
			title: 'YT Scoreboard',
		},
	},
	css: ['~/assets/css/main.css'],
	runtimeConfig: {
		dbURL: '',
		oidc: {
			devMode: false,
			server: '',
			clientID: '',
			clientSecret: '',
			scope: 'openid profile email',
			redirectURL: '',
			logoutURL: '',
			pkce: false,
		},
		sessionPassword: '',
	},
	experimental: {
		typedPages: true,
	},
	compatibilityDate: '2024-11-01',
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
			},
		},
	},
	security: {
		csrf: {
			enabled: true,
		},
		headers: {
			contentSecurityPolicy: {
				'img-src': ['https:', 'data:'],
			},
		},
	},
})
