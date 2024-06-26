import { ReactNode } from "react";
import type { PhantomStyleProps } from "./style-props";
import type { PhantomSize, ActionIconVariant, TextVariant, ButtonVariant, BadgeVariant, InputVariant, NavLinkVariant } from "./types";

export interface PhantomProps extends PhantomStyleProps {
    children?: ReactNode;
}

export interface TextProps extends PhantomProps {
    variant?: TextVariant;
}

export interface ActionIconProps extends PhantomProps {
    size?: PhantomSize | number | (string & NonNullable<unknown>);

    variant?: ActionIconVariant;
}

export interface ButtonProps extends PhantomProps {
    size?: PhantomSize | number | (string & NonNullable<unknown>);
    variant?: ButtonVariant;
    disabledHoverEffect?: true;
    gradient?: { from: string, to: string, deg: number };

    leftSection?: ReactNode;
    rightSection?: ReactNode;

    fullWidth?: true;

    disabled?: true;
}

export interface LayoutComponentsProps extends PhantomProps {
    grow?: true;
}

export interface ImageProps extends PhantomProps {
    objectFit?: React.CSSProperties['objectFit'];
    withBorder?: true;
}

export interface CardProps extends PhantomProps {
    withBorder?: true;
}

export interface BadgeProps extends PhantomProps {
    size?: PhantomSize;
    variant?: BadgeVariant;
    gradient?: { from: string, to: string, deg: number };

    leftSection?: ReactNode;
    rightSection?: ReactNode;

    fullWidth?: true;
}

export interface TooltipProps extends PhantomProps {
    label: string | number;
    withArrow?: true;
}

export interface MenuItemProps extends PhantomProps {
    leftSection?: ReactNode
    rightSection?: ReactNode
    index?: number;
}

export interface MenuProps extends PhantomProps {
    activeMenu: ReactNode;
}

export interface ColorSwatchProps extends PhantomProps {
    size?: PhantomSize | (string & NonNullable<unknown>);
    swatch?: React.CSSProperties['color'];
    circle?: true;
}

export interface InputsProps extends PhantomProps {
    size?: PhantomSize;

    label?: string;
    description?: string;
    error?: boolean;
    withAsterisk?: true;

    leftSection?: ReactNode;
    rightSection?: ReactNode;

    variant?: InputVariant;
    disabled?: true;

}

export interface NavLinkProps extends PhantomProps {
    label: string | undefined;
    variant?: NavLinkVariant;
    disabled?: true; 

    opened?: boolean;

    active?: boolean;
    nested?: boolean;

    to?: string; 
}

export interface NavLinkGroupProps extends PhantomProps {
    label?: string | undefined;
    disabled?: true;

    leftSection?: ReactNode;
}