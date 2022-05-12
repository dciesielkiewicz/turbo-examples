import { useState } from 'react'
import logo from './logo.svg'
import './TodoList.css'

const TodoList = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="TodoList">
      <header className="TodoList-header">
        <img src={logo} className="TodoList-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is/are: {count}
          </button>
        </p>
        <p>
          Edit <code>TodoList.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="TodoList-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="TodoList-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default TodoList
