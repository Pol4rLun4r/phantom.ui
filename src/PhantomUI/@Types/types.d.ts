/* eslint-disable @typescript-eslint/no-explicit-any */
export type PhantomSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TextVariant = 'default' | 'gradient' | 'description' | 'whiteText';

export type ActionIconVariant = 'default' | 'filled' | 'light' | 'outline' | 'transparent' | 'white' | 'custom' | 'gradient';

export type CommonHtmlTags = 'a' | 'article' | 'button' | 'div' | 'footer' | 'form' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'header' | 'i' | 'img' | 'input' | 'label' | 'p' | 'span';

export type ButtonVariant = ActionIconVariant;

export interface PhantomStyledComponentsProps extends React.BaseHTMLAttributes<T> {
    as?: CommonHtmlTags;
}