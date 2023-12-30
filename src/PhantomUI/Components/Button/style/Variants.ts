import { css } from "styled-components";

// interface
import { IButton } from "../interface";

// colors
import { buttonBackground, buttonBorder } from "../../../Theme/Theme";
import themeColorSchema from "../../../Theme/ThemeHook";

const DefaultVariant = () => {
    return css`
    border: solid 1px;
    color: white;
    background-color: ${buttonBackground};
    border-color: ${buttonBorder};
    `;
};

const FilledVariant = () => {
    return css`
    color: white;
    background-color: ${themeColorSchema({ dark: 6, light: 6 })};
    `;
};

const LightVariant = () => {
    return css`
    color: ${themeColorSchema({ dark: 6, light: 6 })};
    background-color: ${themeColorSchema({ dark: 6, light: 6 }, '0.15')};
    `;
};

const Variants = () => {
    return css`
    ${({ $style }: IButton) =>
            $style?.variant === 'default' ? DefaultVariant() :
                $style?.variant === 'filled' ? FilledVariant() :
                    $style?.variant === 'light' ? LightVariant() : DefaultVariant()};
`;
}

export default Variants;