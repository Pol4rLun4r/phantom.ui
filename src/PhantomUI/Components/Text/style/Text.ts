import styled, { css } from "styled-components";

// theme
import { textColor } from "../../../Theme/Theme";

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
        ${HandleGradient()}
        background-clip: text;
        -webkit-text-fill-color: transparent;
    `
}

const HandleGradient = () => {
    return css`
        ${({ $style }: IText) => $style?.gradient ?
            `background: linear-gradient(${$style.gradient.deg}deg, ${$style.gradient.from} 10%, ${$style.gradient.to} 100%);` :
            `background: linear-gradient(90deg, #4B00B3 10%, #A964FF 100%);`}
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