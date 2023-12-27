import styled, { css } from "styled-components";

// theme
import { textColor } from "../../../Theme/Theme";
import themeColorSchema from "../../../Theme/ThemeHook";

// interface
import { IText } from "../Interface"

const Style = () => {
    return css`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    margin-top: ${({ $style }: IText) => $style!.marginTop};
    margin-bottom: ${({ $style }: IText) => $style!.marginBottom};
    margin-left: ${({ $style }: IText) => $style!.marginLeft};
    margin-right: ${({ $style }: IText) => $style!.marginRight};
    margin: ${({ $style }: IText) => $style!.marginMixed};

    text-align: ${({ $style }: IText) => $style!.textAlign};

    /* line-height: 29px; */

    font-weight: ${({ $style }: IText) =>
            $style!.fontWeight === "black" ? 900 :
                $style!.fontWeight === "bold" ? 700 :
                    $style!.fontWeight === "semiBold" ? 600 :
                        $style!.fontWeight === "regular" ? 400 :
                            $style!.fontWeight === "semiLight" ? 350 :
                                $style!.fontWeight === "light" ? 300 : 400};

    ${({ $style }: IText) =>
            $style?.variant == 'gradient' ? VariantGradient() : VariantDefault()}
`
}

const VariantGradient = () => {
    return css`
        background: linear-gradient(90deg, ${themeColorSchema({ dark: 9, light: 9 })} 10%, ${themeColorSchema({ dark: 3, light: 3 })} 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    `
}

const VariantDefault = () => {
    return css`
        color: ${textColor};
    `
}

const TextParagraph = styled.p`
    font-size: ${({ $style }: IText) => $style!.size ? $style!.size : '18px'};
    ${Style()}
`

const TextSpan = styled.span`
    ${Style()}
`

export { TextParagraph, TextSpan }