import { ReactNode } from "react"


type Style = {
    // direction seria o 'flex-direction'
    direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse'

    // justify seria o 'justify-content'
    justify?: 'center' | 'flex-end' | 'flex-start' | 'space-between'

    // align seria o 'align-items'
    align?: 'center' | 'flex-end' | 'flex-start' | 'stretch'

    // gap seria o espaço entre os elementos
    gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'no-space'
    //    10px | 12px | 16px | 20px | 32px |  0px

    // define a largura do da div 
    width?: string

    // define a altura da div
    height?: string

    // margins do container
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;

    // todas as margins juntas
    marginMixed?: string;

    paddingTop?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'no-space'
    //           10px | 12px | 16px | 20px | 32px |  0px

    paddingBottom?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'no-space'
    //              10px | 12px | 16px | 20px | 32px |  0px

    // padding-left and padding Right
    paddingLR?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'no-space'
    //          10px | 12px | 16px | 20px | 32px |  0px

    // todos os paddings
    paddingMixed?: string
}

interface IFlex {
    $style?: Style
}

interface IFlexProps extends Style {
    children: ReactNode

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    refProp?: any;
}

export type { IFlex, IFlexProps }