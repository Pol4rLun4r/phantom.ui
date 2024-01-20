import { css } from "styled-components";

// colors
import { textColor, textColorDescription } from "../../../Theme/Theme";
import themeColorSchema from "../../../hook/ThemeHook";

// type
import type { TextProps } from "../../../@Types/props";

const VariantGradient = () => {
    return css`
        background: linear-gradient(90deg, ${themeColorSchema({ dark: 9, light: 9 })} 10%, ${themeColorSchema({ dark: 3, light: 3 })} 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `;
};

const VariantDefault = () => {
    return css`
        color: ${textColor};
    `;
};

const VariantDescription = () => {
    return css`
        color: ${textColorDescription};
    `;
};

const Variants = () => {
    return css`
        ${({ variant }: TextProps) => variant === 'gradient' ? VariantGradient() : variant === 'description' ? VariantDescription() : VariantDefault()}
    `
}

export default Variants;