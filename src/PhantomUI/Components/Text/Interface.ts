import { ReactNode } from "react";

type Style = {
    // tamanho do texto
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    //     12px | 14px | 16px | 18px | 20px  <- font

    // margins do texto
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;

    // todas as margins juntas
    marginMixed?: string;

    // alinhamento do Texto
    textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit'

    // peso da fonte
    fontWeight?: 'black' | 'bold' | 'semiBold' | 'regular' | 'semiLight' | 'light'
    //            900    |  700   |  600       |  400      |  350        |  300

    // variant  do texto
    variant?: 'default' | 'gradient'
}

interface IText {
    $style?: Style
}

interface ITextProps extends Style {
    children: ReactNode;

    // componente do texto, por exemplo, se ele será um paragrafo ou um 'span'
    component?: 'default' | 'span'
    //          'default' seria o paragrafo
}

export type { IText, ITextProps }