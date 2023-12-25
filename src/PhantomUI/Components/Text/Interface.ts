import { ReactNode } from "react";

type Style = {
    // tamanho do texto
    size?: string;

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
}

interface IText{
    $style?: Style
}

interface ITextProps extends Style {
    children: ReactNode;
}

export type { IText, ITextProps}