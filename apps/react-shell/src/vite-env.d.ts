/// <reference types="vite/client" />

declare module 'craTodo/TodoList'
declare module 'reactTodo/TodoList'

interface ImportMetaEnv {
  readonly VITE_BUILD_TIME_DEPS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
