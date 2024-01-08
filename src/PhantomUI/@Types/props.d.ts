import { ReactNode } from "react";
import type { PhantomStyleProps } from "./style-props";
import type { PhantomSize } from "./size";

export interface PhantomProps extends PhantomStyleProps {
    size?: PhantomSize | number | (string & NonNullable<unknown>);
    refProps?: React.ClassAttributes.ref;
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