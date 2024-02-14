import { css } from "styled-components";

// type
import type { InputsProps } from "../../../../@Types/props";

// sizes
import { $Height, $Label, $Description } from "../../../../@Sizes/inputs";
import { $FontSize } from "../../../../@Sizes/Typography";

export const LabelSize = () => {
    return css`
    font-size: ${({ size }: InputsProps) => size === 'xs' ? $Label.xs :
            size === 'sm' ? $Label.sm :
                size === 'md' ? $Label.md :
                    size === 'lg' ? $Label.lg :
                        size === 'xl' ? $Label.xl : $Label.sm};
    `;
};

export const DescriptionSize = () => {
    return css`
    font-size: ${({ size }: InputsProps) => size === 'xs' ? $Description.xs :
            size === 'sm' ? $Description.sm :
                size === 'md' ? $Description.md :
                    size === 'lg' ? $Description.lg :
                        size === 'xl' ? $Description.xl : $Description.sm};
    `;
}

export const SectionSize = () => {
    return css`
        width: ${({ size }: InputsProps) => size === 'xs' ? `calc(${$Height.xs} - 0.125rem)` :
            size === 'sm' ? `calc(${$Height.sm} - 0.125rem)` :
                size === 'md' ? `calc(${$Height.md} - 0.125rem)` :
                    size === 'lg' ? `calc(${$Height.lg} - 0.125rem)` :
                        size === 'xl' ? `calc(${$Height.xl} - 0.125rem)` : `calc(${$Height.sm} - 0.125rem)`
        };
    `
}

export const Size = () => {
    return css`
    font-size: ${({ size }: InputsProps) => size === 'xs' ? $FontSize.xs :
            size === 'sm' ? $FontSize.sm :
                size === 'md' ? $FontSize.md :
                    size === 'lg' ? $FontSize.lg :
                        size === 'xl' ? $FontSize.xl : $FontSize.sm};

    height: ${({ size }: InputsProps) => size === 'xs' ? $Height.xs :
            size === 'sm' ? $Height.sm :
                size === 'md' ? $Height.md :
                    size === 'lg' ? $Height.lg :
                        size === 'xl' ? $Height.xl : $Height.sm};

    ${({ leftSection }: InputsProps) => leftSection ? SectionPadding("left") : PaddingLeft()}
    ${({ rightSection }: InputsProps) => rightSection ? SectionPadding("right") : PaddingRight()}
    `;
};

const SectionPadding = (side: 'left' | 'right') => {
    if (side === 'right') {
        return css`
            padding-right: ${({ size }: InputsProps) => size === 'xs' ? `calc(${$Height.xs} - 0.125rem)` :
                size === 'sm' ? `calc(${$Height.sm} - 0.125rem)` :
                    size === 'md' ? `calc(${$Height.md} - 0.125rem)` :
                        size === 'lg' ? `calc(${$Height.lg} - 0.125rem)` :
                            size === 'xl' ? `calc(${$Height.xl} - 0.125rem)` : `calc(${$Height.sm} - 0.125rem)`
            };
        `
    }

    return css`
        padding-left: ${({ size }: InputsProps) => size === 'xs' ? `calc(${$Height.xs} - 0.125rem)` :
            size === 'sm' ? `calc(${$Height.sm} - 0.125rem)` :
                size === 'md' ? `calc(${$Height.md} - 0.125rem)` :
                    size === 'lg' ? `calc(${$Height.lg} - 0.125rem)` :
                        size === 'xl' ? `calc(${$Height.xl} - 0.125rem)` : `calc(${$Height.sm} - 0.125rem)`
        };
`
}

const PaddingLeft = () => {
    return css`
    padding-left: ${({ size }: InputsProps) => size === 'xs' ? `calc(${$Height.xs} / 3)` :
            size === 'sm' ? `calc(${$Height.sm} / 3)` :
                size === 'md' ? `calc(${$Height.md} / 3)` :
                    size === 'lg' ? `calc(${$Height.lg} / 3)` :
                        size === 'xl' ? `calc(${$Height.xl} / 3)` : `calc(${$Height.sm} / 3)`};
    `
}

const PaddingRight = () => {
    return css`
    padding-right: ${({ size }: InputsProps) => size === 'xs' ? `calc(${$Height.xs} / 3)` :
            size === 'sm' ? `calc(${$Height.sm} / 3)` :
                size === 'md' ? `calc(${$Height.md} / 3)` :
                    size === 'lg' ? `calc(${$Height.lg} / 3)` :
                        size === 'xl' ? `calc(${$Height.xl} / 3)` : `calc(${$Height.sm} / 3)`};
    `
}