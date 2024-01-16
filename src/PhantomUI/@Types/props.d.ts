// import { ReactNode } from "react";
import type { PhantomStyleProps } from "./style-props";
import type { PhantomSize } from "./size";

export interface PhantomProps extends PhantomStyleProps {
}

type TextVariant = 'default' | 'gradient';
export interface TextProps extends PhantomProps {
    variant?: TextVariant;
}

type ActionIconVariant = 'default' | 'filled' | 'light' | 'outline' | 'transparent' | 'white' | 'custom';
export interface ActionIconProps extends PhantomProps {
    size?: PhantomSize | number | (string & NonNullable<unknown>);

    variant?: ActionIconVariant;
}