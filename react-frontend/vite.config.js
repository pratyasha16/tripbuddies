import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import dotenv from 'dotenv';
// https://vitejs.dev/config/
dotenv.config(); // load env vars from .env
export default defineConfig({
  define: {
    __STRIPE_CLIENT_URL__: `"${process.env.STRIPE_CLIENT_URL}"`,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
