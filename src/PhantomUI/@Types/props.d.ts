import { ReactNode } from "react";
import type { PhantomStyleProps } from "./style-props";
import type { PhantomSize, ActionIconVariant, TextVariant, ButtonVariant, PhantomStyledComponentsProps } from "./types";

export interface PhantomProps extends PhantomStyleProps {
}

export interface TextProps extends PhantomProps {
    variant?: TextVariant;
}

export interface ActionIconProps extends PhantomProps {
    size?: PhantomSize | number | (string & NonNullable<unknown>);

    variant?: ActionIconVariant;
}

export interface ButtonProps extends PhantomProps, PhantomStyledComponentsProps {
    children?: ReactNode;
    onClick?: () => void;

    size?: PhantomSize | number | (string & NonNullable<unknown>);
    variant?: ButtonVariant;
    gradient?: { from: string, to: string, deg: number }

    leftSection?: ReactNode;
    rightSection?: ReactNode;

    fullWidth?: true;
}

export interface LayoutComponentsProps extends PhantomProps {
    grow?: true;
}