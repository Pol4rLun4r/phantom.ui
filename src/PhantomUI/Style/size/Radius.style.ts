import { css } from "styled-components";

// type
import type { PhantomStyleProps } from "../../@Types/style-props";

// size
import { Radius } from "../../@Sizes/Radius";

export const BorderRadius = () => {
    return css`
    border-radius: ${({ radius }: PhantomStyleProps) => radius === 'xs' ? Radius.xs :
            radius === 'sm' ? Radius.sm :
                radius === 'md' ? Radius.md :
                    radius === 'lg' ? Radius.lg :
                        radius === 'xl' ? Radius.xl : Radius.sm}; 
    `;
};