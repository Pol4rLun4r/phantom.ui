import { ReactNode } from "react";
import type { PhantomStyleProps } from "./style-props";
import type { PhantomSize, ActionIconVariant, TextVariant, ButtonVariant, PhantomStyledComponentsProps } from "./types";

export interface PhantomProps extends PhantomStyleProps, PhantomStyledComponentsProps {
}

export interface TextProps extends PhantomProps {
    variant?: TextVariant;
}

export interface ActionIconProps extends PhantomProps {
    size?: PhantomSize | number | (string & NonNullable<unknown>);

    variant?: ActionIconVariant;
}

export interface ButtonProps extends PhantomProps {
    children?: ReactNode;

    size?: PhantomSize | number | (string & NonNullable<unknown>);
    variant?: ButtonVariant;
    gradient?: { from: string, to: string, deg: number }

    leftSection?: ReactNode;
    rightSection?: ReactNode;

    fullWidth?: true;

    disabled?: true;
}

export interface ButtonGroupProps extends PhantomProps {
    children?: ReactNode;
}

export interface LayoutComponentsProps extends PhantomProps {
    grow?: true;
}

export interface ImageProps extends PhantomProps {
    objectFit?: React.CSSProperties['objectFit'];
    withBorder?: true;
}

export interface CardProps extends PhantomProps {
    children?: ReactNode;
    withBorder?: true;
}