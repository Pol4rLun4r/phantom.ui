import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// style
import { ThemeProvider } from "styled-components"
import GlobalStyle from './PhantomUI/Style/Global.style.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={{ mode: 'dark', colorSchema: 'violet'}}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
