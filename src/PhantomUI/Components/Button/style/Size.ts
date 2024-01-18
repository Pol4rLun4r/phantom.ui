import { css } from "styled-components";

// type
import type { ButtonProps } from "../../../@Types/props";

// sizes
import { $Heights, $Paddings } from "../../../@Sizes/Buttons";
import { $FontSize } from "../../../@Sizes/Typography";

export const Size = () => {
    return css`
    font-size: ${({ size }: ButtonProps) => size === 'xs' ? $FontSize.xs :
            size === 'sm' ? $FontSize.sm :
                size === 'md' ? $FontSize.md :
                    size === 'lg' ? $FontSize.lg :
                        size === 'xl' ? $FontSize.xl : $FontSize.sm};

    height: ${({ size }: ButtonProps) => size === 'xs' ? $Heights.xs :
            size === 'sm' ? $Heights.sm :
                size === 'md' ? $Heights.md :
                    size === 'lg' ? $Heights.lg :
                        size === 'xl' ? $Heights.xl :
                            typeof size === "string" ? size : $Heights.sm};

    padding: ${({ size }: ButtonProps) => size === 'xs' ? $Paddings.xs :
            size === 'sm' ? $Paddings.sm :
                size === 'md' ? $Paddings.md :
                    size === 'lg' ? $Paddings.lg :
                        size === 'xl' ? $Paddings.xl : $Paddings.sm};
    `;
};