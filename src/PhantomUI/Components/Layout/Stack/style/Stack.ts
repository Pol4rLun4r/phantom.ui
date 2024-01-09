import styled from "styled-components";

// style
import Style from "../../../../Style/Style";

// type
import type { StackProps } from "../../../../@Types/props";

const StackStyle = styled.div`
    ${Style()}

    // default
    display: flex;
    flex-direction: ${({ direction }: StackProps) => direction ? direction : 'column'};

    // variants de configuração
    align-items: ${({ align }: StackProps) => align ? align : 'stretch'};
    justify-content: ${({ justify }: StackProps) => justify ? justify : 'center'};

`

export default StackStyle;