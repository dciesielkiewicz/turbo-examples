import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Layout } from '@/components';
import { Paths } from '@/routes';


const TodoList = lazy(
  () =>
    import.meta.env.VITE_BUILD_TIME_DEPS
      ? import('../../react-todo/src/TodoList')
      : import('reactTodo/TodoList')
);

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path={Paths.ReactTodo}
            element={(
              <>
                Todo List here
                <Suspense fallback={<div>Loading...</div>}>
                  <TodoList />
                </Suspense>
              </>
            )}
          />
        </Routes>
      </Layout>
    </Router>
  )
}
