
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Background, ThemeProvider, Wrapper } from 'react-ui';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Background>
        <Wrapper>
          <App />
        </Wrapper>
      </Background>
    </ThemeProvider>
  </StrictMode>
)
