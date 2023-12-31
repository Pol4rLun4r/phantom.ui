import { css } from "styled-components";

// interface
import { IButton } from "../interface";

// sizes
import { Heights, Paddings, Radius } from "../../../Theme/Buttons";
import { FontSizes } from "../../../Theme/Typography";

export const Size = () => {
    return css`
    font-size: ${({ $style }: IButton) => $style?.size === 'xs' ? FontSizes.xs :
            $style?.size === 'sm' ? FontSizes.sm :
                $style?.size === 'md' ? FontSizes.md :
                    $style?.size === 'lg' ? FontSizes.lg :
                        $style?.size === 'xl' ? FontSizes.xl : FontSizes.sm};

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

