import { css } from "styled-components";

// interface
import { IBox } from "../interface";

// colors
import { buttonBackground, buttonBorder, buttonActionIcon } from "../../../Theme/Theme";
import themeColorSchema from "../../../Theme/ThemeHook";

const DefaultVariant = () => {
    return css`
    border: solid 1px;
    color: ${buttonActionIcon};
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
    color: ${({ $style }: IBox) => $style?.color ? $style?.color : 'black'};
    background-color: ${({ $style }: IBox) => $style?.backgroundColor ? $style?.backgroundColor : 'white'};
    `;
};

const WhiteVariant = () => {
    return css`
    color: ${themeColorSchema({ dark: 6, light: 6 })};
    background-color: white;

    ${(props) => props.theme.mode === 'light' ? 'border: solid 1px #ced4da;' : ''};
    `;
};

const GradientVariant = () => {
    return css`
        background: linear-gradient(94deg, ${themeColorSchema({ dark: 9, light: 9 })} 15%, ${themeColorSchema({ dark: 4, light: 4 })} 100%);
    `;
};

const Variants = () => {
    return css`
    ${({ $style }: IBox) =>
            $style?.variant === 'default' ? DefaultVariant() :
                $style?.variant === 'filled' ? FilledVariant() :
                    $style?.variant === 'light' ? LightVariant() :
                        $style?.variant === 'outline' ? OutlineVariant() :
                            $style?.variant === 'transparent' ? TransparentVariant() :
                                $style?.variant === 'custom' ? CustomVariant() :
                                    $style?.variant === 'white' ? WhiteVariant() :
                                        $style?.variant === 'gradient' ? GradientVariant() : DefaultVariant()};
`;
}

export default Variants;