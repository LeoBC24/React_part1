import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/React_part1/', // 👈 use your GitHub repo name here
  plugins: [react()],
})
