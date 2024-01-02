import { ReactNode } from "react"


type Style = {
    // justify seria o 'justify-content', nesse caso define o alinhamento vertical
    justify?: 'center' | 'flex-end' | 'flex-start' | 'space-between'
    // default sendo o 'flex-start'

    // align seria o 'align-items', nesse caso define o alinhamento vertical
    align?: 'center' | 'flex-end' | 'flex-start' | 'stretch'
    // default sendo 'stretch'

    // gap seria o espaço entre os elementos
    gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'no-space'
    //    10px | 12px | 16px | 20px | 32px |  0px

    // define a largura do da div 
    width?: string

    // define a altura da div
    height?: string

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

interface IStack {
    $style?: Style
}

interface IStackProps extends Style {
    children: ReactNode
}

export type { IStack, IStackProps }