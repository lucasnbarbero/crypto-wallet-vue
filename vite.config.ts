import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      dts: true,
      deep: true,
      dirs: ['src/components/common'],
      directoryAsNamespace: true,
      extensions: ['vue'],
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
