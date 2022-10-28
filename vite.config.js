import { vitePluginForArco } from '@arco-plugins/vite-react' // https://github.com/arco-design/arco-plugins/blob/main/packages/plugin-vite-react/README.md
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

//  __dirname is not available in ES module.
const _dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginForArco({ theme: '@arco-themes/react-quange' })],
  resolve: {
    alias: {
      '@': resolve(_dirname, 'src'),
    },
  },
})
