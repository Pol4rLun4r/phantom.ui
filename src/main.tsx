import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// style
import GlobalStyle from './PhantomUI/Style/Global.style.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle/>
        <App />
  </React.StrictMode>,
)
