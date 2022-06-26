import { resolve } from 'path'
import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation";
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext'
  },
  plugins: [
    svelte(),
    federation({
      name: 'svelteTodo',
      exposes:{
        './App.svelte': './src/App.svelte',
      }
    })
  ],
  resolve: {
    alias: [
      { find: '@svelteTodo', replacement: resolve(__dirname, 'src') },
    ],
  },
})
