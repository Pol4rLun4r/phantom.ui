import { css } from "styled-components";

// interface
import { IBox } from "../interface";

// sizes
import { IconSize } from "../../../@Sizes/Buttons";
import { Radius } from "../../../@Sizes/Radius";
import { $FontSize } from "../../../@Sizes/Typography";

export const Size = () => {
    return css`
    font-size: ${({ $style }: IBox) => $style?.size === 'xs' ? $FontSize.xs :
            $style?.size === 'sm' ? $FontSize.sm :
                $style?.size === 'md' ? $FontSize.md :
                    $style?.size === 'lg' ? $FontSize.lg :
                        $style?.size === 'xl' ? $FontSize.xl : $FontSize.sm};

    height: ${({ $style }: IBox) => $style?.size === 'xs' ? IconSize.xs :
            $style?.size === 'sm' ? IconSize.sm :
                $style?.size === 'md' ? IconSize.md :
                    $style?.size === 'lg' ? IconSize.lg :
                        $style?.size === 'xl' ? IconSize.xl : $style?.size};

    width: ${({ $style }: IBox) => $style?.size === 'xs' ? IconSize.xs :
            $style?.size === 'sm' ? IconSize.sm :
                $style?.size === 'md' ? IconSize.md :
                    $style?.size === 'lg' ? IconSize.lg :
                        $style?.size === 'xl' ? IconSize.xl : $style?.size};
    `;

};

export const BorderRadius = () => {
    return css`
    border-radius: ${({ $style }: IBox) => $style?.radius === 'xs' ? Radius.xs :
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

