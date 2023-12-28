import styled from "styled-components";

// interface
import { IStack } from "../interface";

const StackStyle = styled.div`
    // default
    display: flex;
    flex-direction: column;

    // variants de tamanho
    ${({ $style }: IStack) => $style?.width ? `width: ${$style.width};` : undefined}
    ${({ $style }: IStack) => $style?.height ? `height: ${$style.height};` : undefined}

    // variants de configuração
    align-items: ${({ $style }: IStack) => $style?.align ? $style.align : 'stretch'};

    justify-content: ${({ $style }: IStack) => $style?.justify ? $style.justify : 'flex-start'};

    gap: ${({ $style }: IStack) =>
        $style?.gap === 'xs' ? '10px' :
            $style?.gap === 'sm' ? '12px' :
                $style?.gap === 'md' ? '16px' :
                    $style?.gap === 'lg' ? '20px' :
                        $style?.gap === 'xl' ? '32px' :
                            $style?.gap === 'no-space' ? '0px' : '16px'};
`

export default StackStyle;