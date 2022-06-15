import { ThemeProvider } from 'react-ui'

import { Routing } from "./Routing";

export const App = () => {
  return (
    <ThemeProvider>
      <Routing />
    </ThemeProvider>
  )
}
