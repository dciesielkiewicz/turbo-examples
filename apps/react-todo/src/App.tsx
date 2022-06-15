import { SnackbarProvider } from 'notistack';

import { Todo } from "./Todo";
import { ConfigureAxios } from './ConfigureAxios';

const App = () => (
  <ConfigureAxios>
    <SnackbarProvider>
      <Todo />
    </SnackbarProvider>
  </ConfigureAxios>
);

export default App;
