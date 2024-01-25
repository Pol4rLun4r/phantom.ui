import { css } from "styled-components";

// type
import type { PhantomStyleProps } from "../../../../@Types/style-props";

// size
import { $Spacing } from "../../../../@Sizes/Spacings";

export const PaddingChild = () => {
    return css`
    margin-left: ${({ padding }: PhantomStyleProps) => padding === 'xs' ? `-${$Spacing.xs}` :
            padding === 'sm' ? `-${$Spacing.sm}` :
                padding === 'md' ? `-${$Spacing.md}` :
                    padding === 'lg' ? `-${$Spacing.lg}` :
                        padding === 'xl' ? `-${$Spacing.xl}` : `-${$Spacing.sm}`};

    margin-right: ${({ padding }: PhantomStyleProps) => padding === 'xs' ? `-${$Spacing.xs}` :
            padding === 'sm' ? `-${$Spacing.sm}` :
                padding === 'md' ? `-${$Spacing.md}` :
                    padding === 'lg' ? `-${$Spacing.lg}` :
                        padding === 'xl' ? `-${$Spacing.xl}` : `-${$Spacing.sm}`};
    `;
}

export const PaddingFirstChild = () => {
    return css`
    margin-top: ${({ padding }: PhantomStyleProps) => padding === 'xs' ? `-${$Spacing.xs}` :
            padding === 'sm' ? `-${$Spacing.sm}` :
                padding === 'md' ? `-${$Spacing.md}` :
                    padding === 'lg' ? `-${$Spacing.lg}` :
                        padding === 'xl' ? `-${$Spacing.xl}` : `-${$Spacing.sm}`};
    `;
};

export const PaddingLastChild = () => {
    return css`
    margin-bottom: ${({ padding }: PhantomStyleProps) => padding === 'xs' ? `-${$Spacing.xs}` :
            padding === 'sm' ? `-${$Spacing.sm}` :
                padding === 'md' ? `-${$Spacing.md}` :
                    padding === 'lg' ? `-${$Spacing.lg}` :
                        padding === 'xl' ? `-${$Spacing.xl}` : `-${$Spacing.sm}`};
    `;
};
