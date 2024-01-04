import { css } from "styled-components";
import { IText } from "../Interface";
import { VariantGradient, VariantDefault } from "./Variants";

export const Style = () => {
    return css`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    margin-top: ${({ $style }: IText) => $style!.marginTop};
    margin-bottom: ${({ $style }: IText) => $style!.marginBottom};
    margin-left: ${({ $style }: IText) => $style!.marginLeft};
    margin-right: ${({ $style }: IText) => $style!.marginRight};
    margin: ${({ $style }: IText) => $style!.marginMixed};

    text-align: ${({ $style }: IText) => $style!.textAlign};
    
    max-width: ${({ $style }: IText) => $style!.maxWidth};

    font-weight: ${({ $style }: IText) => $style!.fontWeight === "black" ? 900 :
            $style!.fontWeight === "bold" ? 700 :
                $style!.fontWeight === "semiBold" ? 600 :
                    $style!.fontWeight === "regular" ? 400 :
                        $style!.fontWeight === "semiLight" ? 350 :
                            $style!.fontWeight === "light" ? 300 : 400};

    ${({ $style }: IText) => $style?.variant == 'gradient' ? VariantGradient() : VariantDefault()}
`;
};
