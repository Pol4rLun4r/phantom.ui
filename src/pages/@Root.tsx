// style
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../PhantomUI/Style/Global.style";

// components
import Header from "../components/header/Header";

// recoil StateManage
import { useRecoilValue } from 'recoil'
import { themeMode, colorSchemaMode } from "../hooks/recoil"; 

// react Router
import { Outlet } from "react-router-dom";

function Root() {
  const mode = useRecoilValue(themeMode);
  const colorSchema = useRecoilValue(colorSchemaMode);

  return (
    <ThemeProvider theme={{ mode: mode, colorSchema: colorSchema }}>
      <GlobalStyle />
      <Header/>
      <Outlet />
    </ThemeProvider>
  )
}

export default Root;
