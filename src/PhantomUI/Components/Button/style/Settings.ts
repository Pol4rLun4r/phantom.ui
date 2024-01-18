import { css } from "styled-components";

// interface
import { IButton } from "../interface";

// sizes
import { Heights, Paddings } from "../../../@Sizes/Buttons";
import { $FontSize } from "../../../@Sizes/Typography";
import { Radius } from "../../../@Sizes/Radius";

export const Size = () => {
    return css`
    font-size: ${({ $style }: IButton) => $style?.size === 'xs' ? $FontSize.xs :
            $style?.size === 'sm' ? $FontSize.sm :
                $style?.size === 'md' ? $FontSize.md :
                    $style?.size === 'lg' ? $FontSize.lg :
                        $style?.size === 'xl' ? $FontSize.xl : $FontSize.sm};

    height: ${({ $style }: IButton) => $style?.size === 'xs' ? Heights.xs :
            $style?.size === 'sm' ? Heights.sm :
                $style?.size === 'md' ? Heights.md :
                    $style?.size === 'lg' ? Heights.lg :
                        $style?.size === 'xl' ? Heights.xl : Heights.sm};

    padding: ${({ $style }: IButton) => $style?.size === 'xs' ? Paddings.xs :
            $style?.size === 'sm' ? Paddings.sm :
                $style?.size === 'md' ? Paddings.md :
                    $style?.size === 'lg' ? Paddings.lg :
                        $style?.size === 'xl' ? Paddings.xl : Paddings.sm};
    `;
};

export const BorderRadius = () => {
    return css`
    border-radius: ${({ $style }: IButton) => $style?.radius === 'xs' ? Radius.xs :
            $style?.radius === 'sm' ? Radius.sm :
                $style?.radius === 'md' ? Radius.md :
                    $style?.radius === 'lg' ? Radius.lg :
                        $style?.radius === 'xl' ? Radius.xl : Radius.sm}; 
    `;
};

export const DefaultSetting = () => {
    return css`
    font-weight: 600;
    appearance: none;
    border-style: none;
    cursor: pointer;
    `;
};

