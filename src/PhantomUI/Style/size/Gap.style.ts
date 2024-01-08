import { css } from "styled-components";

// type
import type { PhantomStyleProps } from "../../@Types/style-props";

// size
import { $Gap } from "../../@Sizes/Gap";

export const Gap = () => {
    return css`
    gap: ${({ gap }: PhantomStyleProps) => gap === 'xs' ? $Gap.xs :
            gap === 'sm' ? $Gap.sm :
                gap === 'md' ? $Gap.md :
                    gap === 'lg' ? $Gap.lg :
                        gap === 'xl' ? $Gap.xl :
                            gap ? gap : $Gap.md};
    `;
};