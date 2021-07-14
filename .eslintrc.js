module.exports = {
	root: true,
	extends: [
		'airbnb-base',
		'eslint:recommended',
		'plugin:react/recommended',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true,
	},
	rules: {
		semi: ['error', 'never'],
		quotes: ['error', 'single'],
		indent: ['error', 'tab'],
		'no-tabs': 0,
		'no-trailing-spaces': ['error'],
		'no-var': 'error',
		'no-console': 'off',
		'linebreak-style': ['error', 'unix'],
		'import/no-unresolved': 0,
		'react/prop-types': 0,
		'import/extensions': 0,
		'import/prefer-default-export': 0,
	},
}
