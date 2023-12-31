import { css } from "styled-components";
import { textColor } from "../../../Theme/Theme";
import themeColorSchema from "../../../Theme/ThemeHook";

// variants

export const VariantGradient = () => {
    return css`
        background: linear-gradient(90deg, ${themeColorSchema({ dark: 9, light: 9 })} 10%, ${themeColorSchema({ dark: 3, light: 3 })} 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    `;
};

export const VariantDefault = () => {
    return css`
        color: ${textColor};
    `;
};
