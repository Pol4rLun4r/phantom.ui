import styled from "styled-components";

// interface
import { IStack } from "../interface";

// sizes
import { Gap } from "./Settings";

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

    ${Gap()}
`

export default StackStyle;