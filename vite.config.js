import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"https://jeevajeyakrishnan.github.io/Stay-at-forest",
  plugins: [react()],
})
