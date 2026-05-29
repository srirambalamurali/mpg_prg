import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const appRoot = path.resolve(__dirname, '../apps/frontend');

export default defineConfig({
  root: appRoot,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(appRoot, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    sourcemap: true,
  },
});
