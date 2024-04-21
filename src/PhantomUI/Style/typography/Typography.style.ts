import { css } from "styled-components";

// type
import type { PhantomStyleProps } from "../../@Types/style-props";


// size
import { $FontSize, $FontWeight } from "../../@Sizes/Typography";

export const FontSize = () => {
    return css`
    font-size: ${({ fontSize }: PhantomStyleProps) => fontSize === 'xs' ? $FontSize.xs :
            fontSize === 'sm' ? $FontSize.sm :
                fontSize === 'md' ? $FontSize.md :
                    fontSize === 'lg' ? $FontSize.lg :
                        fontSize === 'xl' ? $FontSize.xl :
                            fontSize ? fontSize : $FontSize.lg};
    `;
};

export const FontWeight = () => {
    return css`
        font-weight: ${({ fontWeight }: PhantomStyleProps) => fontWeight === "black" ? $FontWeight.black :
            fontWeight === "bold" ? $FontWeight.bold :
                fontWeight === "semiBold" ? $FontWeight.semiBold :
                    fontWeight === "regular" ? $FontWeight.regular :
                        fontWeight === "semiLight" ? $FontWeight.semiLight :
                            fontWeight === "light" ? $FontWeight.light :
                                fontWeight ? fontWeight : $FontWeight.regular};
    `;
};