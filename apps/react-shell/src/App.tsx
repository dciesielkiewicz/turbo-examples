import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { REACT_TODO_ROUTE } from './routes';


const TodoList = lazy(
  () =>
    import.meta.env.VITE_BUILD_TIME_DEPS
      ? import('../../react-todo/src/TodoList')
      : import('reactTodo/TodoList')
);

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={REACT_TODO_ROUTE}
          element={(
            <>
              Todo List here
              <TodoList />
            </>
          )}
        />
      </Routes>
    </Router>
  )
}
