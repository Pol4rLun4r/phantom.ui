// style
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./PhantomUI/Style/Global.style";

// pages
import Home from "./pages/Home";

// recoil StateManage
import { useRecoilValue } from 'recoil'
import { themeMode, colorSchemaMode } from './hooks/recoil';

function App() {
  const mode = useRecoilValue(themeMode);
  const colorSchema = useRecoilValue(colorSchemaMode);

  return (
    <ThemeProvider theme={{ mode: mode, colorSchema: colorSchema }}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App;
