import 'styled-components';

type mode = 'dark' | 'light'

type colorSchema = 'lavenderIndigo' | 'blueYonder' | 'violet'

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: mode,
    colorSchema?: colorSchema
  }
}