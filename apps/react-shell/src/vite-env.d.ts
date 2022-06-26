/// <reference types="vite/client" />

declare module 'reactTodo/App'
declare module 'svelteTodo/App.svelte'

interface ImportMetaEnv {
  readonly VITE_BUILD_TIME_DEPS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
