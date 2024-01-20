import 'styled-components';

type mode = 'dark' | 'light';

type colorSchema = 'magenta' | 'blueYonder' | 'violet' | 'lightBlue' | 'green' | 'deepOrange' | 'peachPink' | 'blueGray';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: mode,
    colorSchema?: colorSchema
  }
}