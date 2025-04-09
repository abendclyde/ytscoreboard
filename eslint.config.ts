import vue from 'eslint-plugin-vue'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	rules: {
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
	},
}).prepend(vue.configs['flat/recommended'])
