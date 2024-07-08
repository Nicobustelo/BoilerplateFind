import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				secure: false,
			},
		},
	},
	build: {
		rollupOptions: {
		  input: '/index.html', // Asegúrate de que esto apunta a tu archivo HTML principal
		  output: {
			// Configuración para dividir los chunks, si es necesario
			manualChunks: {
			  vendor: ['react', 'react-dom']
			}
		  }
		}
	}
});
