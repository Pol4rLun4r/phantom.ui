import { css } from "styled-components";

// interface
import { IGroup } from "../interface";

// sizes
import { Gaps } from "../../../../Theme/Gaps";

export const Gap = () => {
    return css`
    gap: ${({ $style }: IGroup) => $style?.gap === 'xs' ? Gaps.xs :
            $style?.gap === 'sm' ? Gaps.sm :
                $style?.gap === 'md' ? Gaps.md :
                    $style?.gap === 'lg' ? Gaps.lg :
                        $style?.gap === 'xl' ? Gaps.xl :
                            $style?.gap === 'no-space' ? '0rem' : Gaps.md};
    `;
};
