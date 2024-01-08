import { css } from "styled-components";

// type
import type { TextProps } from "../../@Types/props";


// size
import { $FontSize } from "../../@Sizes/Typography";

export const FontSize = () => {
    return css`
    font-size: ${({ fontSize }: TextProps) => fontSize === 'xs' ? $FontSize.xs :
            fontSize === 'sm' ? $FontSize.sm :
                fontSize === 'md' ? $FontSize.md :
                    fontSize === 'lg' ? $FontSize.lg :
                        fontSize === 'xl' ? $FontSize.xl :
                            fontSize ? fontSize : $FontSize.lg};
    `;
};

export const FontWeight = () => {
    return css`
        font-weight: ${({ fontWeight }: TextProps) => fontWeight === "black" ? 900 :
            fontWeight === "bold" ? 700 :
                fontWeight === "semiBold" ? 600 :
                    fontWeight === "regular" ? 400 :
                        fontWeight === "semiLight" ? 350 :
                            fontWeight === "light" ? 300 :
                                fontWeight ? fontWeight : 400};
    `;
};