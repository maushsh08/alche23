import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages 配信時のみ base を付与（dev / Lovable プレビューは '/'）
  base: command === 'build' ? '/alche23/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
