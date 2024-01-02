import { createGlobalStyle } from "styled-components";
import { bodyColorTwo } from "../Theme/Theme";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        width: 100vw;
        height: 100vh;
        background-color: ${bodyColorTwo};
    }

    #root{
        width: 100vw;
        height: 100vh;

        // test
        /* overflow: hidden; */
        /* overflow-x: hidden; */
    }

`

export default GlobalStyle;