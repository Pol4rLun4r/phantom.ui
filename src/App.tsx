// style
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./PhantomUI/Style/Global.style"

// pages
import Home from "./pages/Home"

// recoil StateManage
import { useRecoilValue } from 'recoil'
import themeMode from './hooks/getThemeMode';

function App() {
  const mode = useRecoilValue(themeMode);

  return (
    <ThemeProvider theme={{ mode: mode, colorSchema: 'violet' }}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
