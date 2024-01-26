import { css } from "styled-components";

// type
import type { BadgeProps } from "../../../../@Types/props";

// sizes
import { $Heights, $Paddings } from "../../../../@Sizes/Badge";
import { $BadgeFontSize } from "../../../../@Sizes/Typography";

export const Size = () => {
    return css`
    font-size: ${({ size }: BadgeProps) => size === 'xs' ? $BadgeFontSize.xs :
            size === 'sm' ? $BadgeFontSize.sm :
                size === 'md' ? $BadgeFontSize.md :
                    size === 'lg' ? $BadgeFontSize.lg :
                        size === 'xl' ? $BadgeFontSize.xl : $BadgeFontSize.md};

    height: ${({ size }: BadgeProps) => size === 'xs' ? $Heights.xs :
            size === 'sm' ? $Heights.sm :
                size === 'md' ? $Heights.md :
                    size === 'lg' ? $Heights.lg :
                        size === 'xl' ? $Heights.xl :
                            typeof size === "string" ? size : $Heights.md};

    ${({ padding }: BadgeProps) => padding ? '' : Padding()}

    `;
};

const Padding = () => {
    return css`
        padding: ${({ size }: BadgeProps) => size === 'xs' ? $Paddings.xs :
            size === 'sm' ? $Paddings.sm :
                size === 'md' ? $Paddings.md :
                    size === 'lg' ? $Paddings.lg :
                        size === 'xl' ? $Paddings.xl : $Paddings.md};
    `
}

export const DotSize = () => {
    return css`
    width: ${({ size }: BadgeProps) => size === 'xs' ? `calc(${$Heights.xs}/3.4)` :
            size === 'sm' ? `calc(${$Heights.sm}/3.4)` :
                size === 'md' ? `calc(${$Heights.md}/3.4)` :
                    size === 'lg' ? `calc(${$Heights.lg}/3.4)` :
                        size === 'xl' ? `calc(${$Heights.xl}/3.4)` : `calc(${$Heights.md}/3.4)`};

    height: ${({ size }: BadgeProps) => size === 'xs' ? `calc(${$Heights.xs}/3.4)` :
            size === 'sm' ? `calc(${$Heights.sm}/3.4)` :
                size === 'md' ? `calc(${$Heights.md}/3.4)` :
                    size === 'lg' ? `calc(${$Heights.lg}/3.4)` :
                        size === 'xl' ? `calc(${$Heights.xl}/3.4)` : `calc(${$Heights.md}/3.4)`};

    `
}