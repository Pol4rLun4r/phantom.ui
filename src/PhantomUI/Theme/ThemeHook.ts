// palette colors
import ColorSchema from "./Colors"

type Props = {
    theme: {
        mode: 'dark' | 'light',
        colorSchema: 'lavenderIndigo' | 'blueYonder'
    }
}

type Values = {
    dark: number,
    light: number
}

interface IThemeValue {
    props: Props,
    values: Values
}

const getThemeValue = ({ props, values }: IThemeValue) => {
    const mode = props.theme.mode
    const colorSchema = props.theme.colorSchema
    const color =  ColorSchema[colorSchema][values[mode]]

    return color;
}

const themeColorSchema = (values: Values) => {
    return function (props: never) {
        return getThemeValue({ props, values });
    };
}

export default themeColorSchema;