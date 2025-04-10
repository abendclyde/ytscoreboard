import vue from 'eslint-plugin-vue'
// @ts-expect-error - no types
import drizzle from 'eslint-plugin-drizzle'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	rules: {
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
	},
})
	.prepend(vue.configs['flat/recommended'])
	.prepend(drizzle.configs['flat/recommended'])
