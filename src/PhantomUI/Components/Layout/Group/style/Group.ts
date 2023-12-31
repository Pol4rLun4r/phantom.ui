import styled from "styled-components";

// interface
import { IGroup } from "../interface";

// sizes
import { Gap } from "./Settings";

const GroupStyle = styled.div`
    // default
    display: flex;
    flex-direction: row;

    // variants de tamanho
    ${({ $style }: IGroup) => $style?.width ? `width: ${$style.width};` : undefined}
    ${({ $style }: IGroup) => $style?.height ? `height: ${$style.height};` : undefined}

    // variants de configuração
    align-items: ${({ $style }: IGroup) => $style?.align ? $style.align : 'flex-start'};
    justify-content: ${({ $style }: IGroup) => $style?.justify ? $style.justify : 'center'};

    // verificação e ativação do flex-grow
    & > * {
        ${({ $style }: IGroup) => $style?.grow ? 'flex-grow: 1;' : ''}
    }

    ${Gap()}
`

export default GroupStyle;