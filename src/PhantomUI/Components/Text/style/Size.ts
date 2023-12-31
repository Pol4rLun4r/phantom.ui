import { css } from "styled-components";

// sizes
import { FontSizes } from "../../../Theme/Typography";

//interface 
import { IText } from "../Interface";

export const Size = () => {
    return css`
    font-size: ${({ $style }: IText) => $style?.size === 'xs' ? FontSizes.xs :
            $style?.size === 'sm' ? FontSizes.sm :
                $style?.size === 'md' ? FontSizes.md :
                    $style?.size === 'lg' ? FontSizes.lg :
                        $style?.size === 'xl' ? FontSizes.xl : FontSizes.lg};
    `;
};