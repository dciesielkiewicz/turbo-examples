import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Loader } from 'react-ui';

import { Layout } from '@/components';
import { Paths } from '@/routes';

import { Home } from "./Home";
import ReactSvelteTodo from "./ReactSvelteTodo";

const ReactTodo = lazy(
  () =>
    import.meta.env.VITE_BUILD_TIME_DEPS
      ? import('../../react-todo/src/App')
      : import('reactTodo/App')
);

export const Routing = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path={Paths.ReactTodo}
            element={(
              <Suspense fallback={<Loader />}>
                <ReactTodo />
              </Suspense>
            )}
          />
          <Route
            path={Paths.SvelteTodo}
            element={<ReactSvelteTodo />}
          />
        </Routes>
      </Layout>
    </Router>
  )
}
