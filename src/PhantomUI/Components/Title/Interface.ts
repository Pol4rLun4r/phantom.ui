import { ReactNode } from "react";

type Style = {
    // tamanho do titulo
    size?: string;

    // margins do titulo
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;

    // todas as margins juntas
    marginMixed?: string;

    // alinhamento do titulo
    textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit'

    // peso da fonte
    fontWeight?: 'black' | 'bold' | 'semiBold' | 'regular' | 'semiLight' | 'light'
    //            900    |  700   |  600       |  400      |  350        |  300
}

interface ITitle{
    $style?: Style
}

interface ITitleProps extends Style {
    children: ReactNode;

    // representa os "h1, h2, h3..." do html
    order?: 1 | 2 | 3 | 4 | 5 | 6;
}

export type { ITitle, ITitleProps}