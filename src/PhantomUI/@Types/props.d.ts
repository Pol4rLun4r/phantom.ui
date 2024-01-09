import { ReactNode } from "react";
import type { PhantomStyleProps } from "./style-props";
import type { PhantomSize } from "./size";

export interface PhantomProps extends PhantomStyleProps {
    size?: PhantomSize | number | (string & NonNullable<unknown>);
    refProp?: React.ClassAttributes.ref;
}

type TextVariant = 'default' | 'gradient';
export interface TextProps extends PhantomProps {
    children: ReactNode;

    // variant  do texto
    variant?: TextVariant;

    // componente do texto, por exemplo, se ele será um paragrafo ou um 'span'
    component?: 'default' | 'span'
    //          'default' seria o paragrafo
}

export interface TitleProps extends PhantomProps {
    children: ReactNode;

    // representa os "h1, h2, h3..." do html
    order?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface FlexProps extends PhantomProps {
    children: ReactNode;
}

export interface GroupProps extends PhantomProps {
    children: ReactNode;
}

export interface StackProps extends PhantomProps {
    children: ReactNode;
}

export interface ActionIconProps extends PhantomProps {
    children: ReactNode;

    size?: PhantomSize;

    onClick?: () => void;
}