import { css } from "styled-components";

// interface
import { IButton } from "../interface";

// sizes
import { Radius, IconSize } from "../../../@Sizes/Buttons";
import { FontSizes } from "../../../@Sizes/Typography";

export const Size = () => {
    return css`
    font-size: ${({ $style }: IButton) => $style?.size === 'xs' ? FontSizes.xs :
            $style?.size === 'sm' ? FontSizes.sm :
                $style?.size === 'md' ? FontSizes.md :
                    $style?.size === 'lg' ? FontSizes.lg :
                        $style?.size === 'xl' ? FontSizes.xl : FontSizes.sm};

    height: ${({ $style }: IButton) => $style?.size === 'xs' ? IconSize.xs :
            $style?.size === 'sm' ? IconSize.sm :
                $style?.size === 'md' ? IconSize.md :
                    $style?.size === 'lg' ? IconSize.lg :
                        $style?.size === 'xl' ? IconSize.xl : IconSize.md};

    width: ${({ $style }: IButton) => $style?.size === 'xs' ? IconSize.xs :
            $style?.size === 'sm' ? IconSize.sm :
                $style?.size === 'md' ? IconSize.md :
                    $style?.size === 'lg' ? IconSize.lg :
                        $style?.size === 'xl' ? IconSize.xl : IconSize.md};
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
    display: flex;
    justify-content: center;
    align-items: center;

    appearance: none;
    border-style: none;
    cursor: pointer;
    `;
};

