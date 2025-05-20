import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import path from 'path'

export default defineConfig({
  cacheDir: path.resolve(__dirname, '../node_modules/.vite/public-mf'),
  plugins: [
    react(),
    federation({
      name: 'public',
      filename: 'remoteEntry.js',
      exposes: {
        './PublicApp': './src/App.tsx'
      },
      shared: ['react','react-dom']
    })
  ],
  server: { port: 4175 },
  build: {
    target: 'esnext',
  }
})
