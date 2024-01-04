import { css } from "styled-components";

// interface
import { IStack } from "../interface";

// sizes
import { Gaps } from "../../../../Theme/Gaps";
import { Spacing } from "../../../../Theme/Spacing";

export const Gap = () => {
    return css`
    gap: ${({ $style }: IStack) => $style?.gap === 'xs' ? Gaps.xs :
            $style?.gap === 'sm' ? Gaps.sm :
                $style?.gap === 'md' ? Gaps.md :
                    $style?.gap === 'lg' ? Gaps.lg :
                        $style?.gap === 'xl' ? Gaps.xl :
                            $style?.gap === 'no-space' ? '0rem' : Gaps.md};
    `;
};


export const Padding = () => {
    return css`
    padding-bottom: ${({ $style }: IStack) => $style?.paddingBottom === 'xs' ? Spacing.xs :
            $style?.paddingBottom === 'sm' ? Spacing.sm :
                $style?.paddingBottom === 'md' ? Spacing.md :
                    $style?.paddingBottom === 'lg' ? Spacing.lg :
                        $style?.paddingBottom === 'xl' ? Spacing.xl :
                            $style?.paddingBottom === 'no-space' ? '0rem' : '0rem'};

    padding-top: ${({ $style }: IStack) => $style?.paddingTop === 'xs' ? Spacing.xs :
            $style?.paddingTop === 'sm' ? Spacing.sm :
                $style?.paddingTop === 'md' ? Spacing.md :
                    $style?.paddingTop === 'lg' ? Spacing.lg :
                        $style?.paddingTop === 'xl' ? Spacing.xl :
                            $style?.paddingTop === 'no-space' ? '0rem' : '0rem'};

    padding: ${({ $style }: IStack) => $style?.paddingLR === 'xs' ? `0rem ${Spacing.xs}` :
            $style?.paddingLR === 'sm' ? `0rem ${Spacing.sm}` :
                $style?.paddingLR === 'md' ? `0rem ${Spacing.md}` :
                    $style?.paddingLR === 'lg' ? `0rem ${Spacing.lg}` :
                        $style?.paddingLR === 'xl' ? `0rem ${Spacing.xl}` :
                            $style?.paddingLR === 'no-space' ? '0rem 0rem' : '0rem 0rem'};

    padding: ${({ $style }: IStack) => $style?.paddingMixed ? $style?.paddingMixed : ''};

    `;

};

export const Margin = () => {
    return css`
    margin-top: ${({ $style }: IStack) => $style?.marginTop ? $style?.marginTop : ''};
    margin-bottom: ${({ $style }: IStack) => $style?.marginBottom ? $style?.marginBottom : ''};
    margin-left: ${({ $style }: IStack) => $style?.marginLeft ? $style?.marginLeft : ''};
    margin-right: ${({ $style }: IStack) => $style?.marginRight ? $style?.marginRight : ''};
    margin: ${({ $style }: IStack) => $style?.marginMixed ? $style?.marginMixed : ''};
    `;
};