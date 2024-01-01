import { ReactNode } from "react";

type Style = {
    // tamanho do botão
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    //     12px | 14px | 16px | 18px | 20px  <- font
    //     30px | 36px | 42px | 50px | 60px  <- height
    //     14px | 18px | 22px | 26px | 32px  <- padding(left and right)

    // define o raio da borda
    radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    //       2px  | 4px  | 8px  | 16px | 32px

    // margins do botão
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;

    // todas as margins juntas
    marginMixed?: string;

    // define o estilo do botão
    variant?: 'default' | 'filled' | 'light' | 'outline' | 'transparent' | 'white' | 'custom';

    // só é possível usar se a variant 'custom' estiver ativa
    color?: string;
    backgroundColor?: string;
}

interface IBox{
    $style?: Style
}

interface IBoxProps extends Style {
    children?: ReactNode;

    onClick?: () => void;
}

export type { IBox, IBoxProps}