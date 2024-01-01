/* eslint-disable @typescript-eslint/no-explicit-any */
// palette colors
import ColorSchema from "./Colors"

import { colorSchema, mode } from "../styled"

type Props = {
    theme: {
        mode: mode,
        colorSchema: colorSchema
    }
}

type Values = {
    dark: number,
    light: number
}

interface IThemeValue {
    props: Props,
    values: Values
    alpha?: string
}

const hexToRGB = (hex: string, alpha: string | undefined) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
  
    if (alpha) {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
  
    return `rgb(${r}, ${g}, ${b})`;
}

const getThemeValue = ({ props, values, alpha }: IThemeValue) => {
    const mode = props.theme.mode
    const colorSchema = props.theme.colorSchema
    const color = ColorSchema[colorSchema][values[mode]]

    return hexToRGB(color, alpha);
}

const themeColorSchema = (values: Values, alpha?: string) => {
    return function (props: any) {
        return getThemeValue({ props, values, alpha });
    };
}

export default themeColorSchema;