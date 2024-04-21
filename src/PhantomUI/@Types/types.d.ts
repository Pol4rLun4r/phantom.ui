/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseHTMLAttributes } from "react";
import { HTMLMotionProps } from "framer-motion";

export type PhantomSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TextVariant = 'default' | 'gradient' | 'description' | 'whiteText';

export type ActionIconVariant = 'default' | 'filled' | 'light' | 'outline' | 'transparent' | 'white' | 'custom' | 'gradient';

export type CommonHtmlTags = 'a' | 'article' | 'button' | 'div' | 'footer' | 'form' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'header' | 'i' | 'img' | 'input' | 'label' | 'p' | 'span' | any;

export type ButtonVariant = ActionIconVariant;

export type BadgeVariant = ActionIconVariant | 'dot';

export type InputVariant = 'default' | 'filled'

export type NavLinkVariant = 'default' | 'subtle' | 'light' | 'filled';

export interface PhantomStyledComponentsProps extends Omit<BaseHTMLAttributes<T>, "color">  {
    as?: any | (string & NonNullable<unknown>);
}

export interface PhantomHTMLInputElement extends Omit<HTMLMotionProps<"input">, "width" | "children" | "color" | "disabled" | "size" | "height"> {
    as?: any | (string & NonNullable<unknown>);
}

export interface PhantomHTMLButtonElement extends Omit<BaseHTMLAttributes<T>, "color">, Omit<HTMLMotionProps<"button">, "children" | "disabled" | "accessKey" | "className" | "contentEditable" | "draggable" | "dir" | "hidden" | "id" | "color" >{
    as?: any | (string & NonNullable<unknown>);
}