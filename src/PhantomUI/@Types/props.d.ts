import { ReactNode } from "react";
import type { PhantomStyleProps } from "./style-props";
import type { PhantomSize, ActionIconVariant, TextVariant, ButtonVariant, BadgeVariant } from "./types";

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