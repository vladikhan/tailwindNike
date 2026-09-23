import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "/tailwindNikePage/", // Change to your GitHub repo name
  resolve: {
    alias: {
      '@': '/src',
    },
  }
});

// export default defineConfig({
//   plugins: [react(), svgr()],
//   server: {
//     port: 3000,
//   },
// });
