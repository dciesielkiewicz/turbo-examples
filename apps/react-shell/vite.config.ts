/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const deps = require("./package.json").dependencies;

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    svelte(),
    federation({
      name: 'reactShell',
      remotes:{
        reactTodo: 'http://localhost:3002/assets/remoteEntry.js',
        svelteTodo: 'http://localhost:3003/assets/remoteEntry.js'
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      }
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '@reactTodo', replacement: resolve(__dirname, '..', 'react-todo', 'src') },
      { find: '@svelteTodo', replacement: resolve(__dirname, '..', 'svelte-todo', 'src') },
    ],
  },
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
})
