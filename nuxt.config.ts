// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/eslint',
		'@nuxt/ui',
		'@nuxt/image',
		'@nuxt/fonts',
		'nuxt-security',
	],
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	runtimeConfig: {
		oidc: {
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
