import { ReactNode } from "react"

type Style = {
    // justify seria o 'justify-content', nesse caso define o alinhamento vertical
    justify?: 'center' | 'flex-end' | 'flex-start' | 'space-between'
    // default sendo o 'center'

    // align seria o 'align-items', nesse caso define o alinhamento vertical
    align?: 'center' | 'flex-end' | 'flex-start' | 'stretch'
    // default sendo 'flex-start'

    // gap seria o espaço entre os elementos
    gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'no-space'
    //    10px | 12px | 16px | 20px | 32px |  0px

    // ativa o 'flex-grow', sendo ele 'flex-grow: 1'
    grow?: true
    // default sendo 'false'

    // define a largura do da div 
    width?: string

    // define a altura da div
    height?: string

    // growOverflow?: boolean

    //wrap?: ????
}

interface IGroup {
    $style?: Style
}

interface IGroupProps extends Style {
    children: ReactNode
}

export type { IGroup, IGroupProps }