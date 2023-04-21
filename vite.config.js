import { defineConfig } from 'vite'
import uni from "@dcloudio/vite-plugin-uni"

export default defineConfig({
	plugins: [uni()],
	server: {
		proxy: {
			'/by': {
				// target: 'http://wanghe.asia:9527',
				target: 'http://localhost:9527',
				changeOrigin: true,
				rewrite: path => {
					return path.replace(/^\/by/, '')
				}
			},
		}
	}
});