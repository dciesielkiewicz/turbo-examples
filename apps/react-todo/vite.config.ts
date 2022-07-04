/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react';

const deps = require("./package.json").dependencies;

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://localhost:3002',
  build: {
    target: 'esnext'
  },
  plugins: [
    react(),
    federation({
      name: 'reactTodo',
      exposes:{
        './App': './src/App.tsx',
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
    })
  ],
  resolve: {
    alias: [
      { find: '@reactTodo', replacement: resolve(__dirname, 'src') },
    ],
  },
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
})
