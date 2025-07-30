import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react_toolbox/', // use o nome do repositório aqui
  plugins: [react()],
})
