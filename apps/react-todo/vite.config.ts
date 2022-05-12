import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react';

const deps = require("./package.json").dependencies;

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://localhost:3001',
  build: {
    target: 'esnext'
  },
  plugins: [
    react(),
    federation({
      name: 'reactTodo',
      exposes:{
        './TodoList': './src/TodoList/TodoList.tsx',
      },
      shared: {
        ...deps,
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
  ]
})
