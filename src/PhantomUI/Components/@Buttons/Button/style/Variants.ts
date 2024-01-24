import { css } from "styled-components";

import type { ButtonProps } from "../../../../@Types/props";

// colors
import { buttonBackground, buttonBackgroundDisabled, buttonBorder, buttonColorDisabled } from "../../../../Theme/Theme";
import themeColorSchema from "../../../../hook/ThemeHook";

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

const OutlineVariant = () => {
    return css`
    border: solid 1px;
    color: ${themeColorSchema({ dark: 6, light: 6 })};
    background-color: transparent;
    `;
};

const TransparentVariant = () => {
    return css`
    color: ${themeColorSchema({ dark: 6, light: 6 })};
    background-color: transparent;
    
    &:hover{
        background-color: ${themeColorSchema({ dark: 6, light: 6 }, '0.15')};
    }
    `;
};

const CustomVariant = () => {
    return css`
    background-color: ${({ backgroundColor }: ButtonProps) => backgroundColor ? backgroundColor : 'white'};
    `;
};

const customGradient = ({ gradient }: ButtonProps) => {
    return css`
        background: linear-gradient(${gradient!.deg}deg, ${gradient!.from} 0%, ${gradient!.to} 100%);
    `
}
const defaultGradient = () => {
    return css`
        background: linear-gradient(94deg, ${themeColorSchema({ dark: 9, light: 7 })} 0%, ${themeColorSchema({ dark: 4, light: 4 })} 100%);
    `
}
const GradientVariant = () => {
    return css`
    color: white;
    ${({ gradient }: ButtonProps) => gradient ? customGradient({ gradient }) : defaultGradient()}
    `;
};

const WhiteVariant = () => {
    return css`
    color: ${themeColorSchema({ dark: 6, light: 6 })};
    background-color: white;

    ${(props) => props.theme.mode === 'light' ? 'border: solid 1px #ced4da;' : ''};
    `;
};

const buttonDisabled = () => {
    return css`
    background-color: ${buttonBackgroundDisabled};
    color: ${buttonColorDisabled};
    cursor: not-allowed;  
    `;
};

const Variants = () => {
    return css`
    ${({ variant, disabled }: ButtonProps) =>
            disabled ? buttonDisabled() :
                variant === 'default' ? DefaultVariant() :
                    variant === 'filled' ? FilledVariant() :
                        variant === 'light' ? LightVariant() :
                            variant === 'outline' ? OutlineVariant() :
                                variant === 'transparent' ? TransparentVariant() :
                                    variant === 'custom' ? CustomVariant() :
                                        variant === 'gradient' ? GradientVariant() :
                                            variant === 'white' ? WhiteVariant() : DefaultVariant()};
`;
}

export default Variants;