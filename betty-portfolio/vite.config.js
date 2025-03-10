import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // Set this to your subdirectory if needed
  root: './', // Ensure this points to the correct directory
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this matches your desired output directory
  },
})
