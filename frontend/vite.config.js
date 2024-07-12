import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
	plugins: [react()],
	server: {
		proxy: {
			'/api': {
				target: 'https://boilerplatefind.vercel.app/api',
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
	build: {
		outDir: 'dist', // Asegúrate de que esto coincida con tu directorio de salida
	},
});
