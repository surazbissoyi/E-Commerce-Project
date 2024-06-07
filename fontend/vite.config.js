// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // This will allow the server to be accessible externally
    port: 5173   // Ensure the port is set correctly
  }
})
