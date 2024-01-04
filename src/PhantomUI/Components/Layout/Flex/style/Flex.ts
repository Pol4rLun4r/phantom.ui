import styled from "styled-components";

// interface
import { IFlex } from "../interface";

// sizes
import { Gap, Margin, Padding } from "./Settings";

const FlexStyle = styled.div`
    // default
    display: flex;
    flex-direction: ${({ $style }: IFlex) => $style?.direction ? $style?.direction : 'row'};

    // variants de tamanho
    ${({ $style }: IFlex) => $style?.width ? `width: ${$style.width};` : undefined}
    ${({ $style }: IFlex) => $style?.height ? `height: ${$style.height};` : undefined}

    // variants de configuração
    align-items: ${({ $style }: IFlex) => $style?.align ? $style.align : 'center'};
    justify-content: ${({ $style }: IFlex) => $style?.justify ? $style.justify : 'center'};

    ${Padding()}

    ${Margin()}

    ${Gap()}
`

export default FlexStyle;