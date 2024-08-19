import path from 'path'
import {defineConfig} from 'vitest/config'

export default defineConfig({
	test: {
		include: ['src/tests/*.test.ts'],
		includeSource: ['src/functions/*.ts'],
		coverage: {
			include: ['src/functions/*.ts'],
			provider: 'v8',
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
