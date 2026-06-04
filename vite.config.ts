import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Actions で GitHub Pages に配信する時だけ base を付与。
  // Lovable のプレビュー/公開ビルドは build 扱いでも '/' で配信されるため、ここで分岐する。
  base: process.env.GITHUB_ACTIONS === 'true' ? '/alche23/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
