import { css } from "styled-components";

// size
import { $FontSize } from "../../../@Sizes/Typography";
import { IconSize } from "../../../@Sizes/Buttons";

// type
import type { ActionIconProps } from "../../../@Types/props";

const Size = () => {
    return css`
    font-size: ${({ size }: ActionIconProps) => size === 'xs' ? $FontSize.xs :
            size === 'sm' ? $FontSize.sm :
                size === 'md' ? $FontSize.md :
                    size === 'lg' ? $FontSize.lg :
                        size === 'xl' ? $FontSize.xl : $FontSize.sm};

    height: ${({ size }: ActionIconProps) => size === 'xs' ? IconSize.xs :
            size === 'sm' ? IconSize.sm :
                size === 'md' ? IconSize.md :
                    size === 'lg' ? IconSize.lg :
                        size === 'xl' ? IconSize.xl : size};

    width: ${({ size }: ActionIconProps) => size === 'xs' ? IconSize.xs :
            size === 'sm' ? IconSize.sm :
                size === 'md' ? IconSize.md :
                    size === 'lg' ? IconSize.lg :
                        size === 'xl' ? IconSize.xl : size};
    `;

};

export default Size;