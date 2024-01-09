import styled from "styled-components";

// type
import type { FlexProps } from "../../../../@Types/props";

// default settings
import Style from "../../../../Style/Style";

const FlexStyle = styled.div`
    ${Style()}

    // default
    display: flex;

    // variants de configuração
    align-items: ${({ align }: FlexProps) => align ? align : 'center'};
    justify-content: ${({ justify }: FlexProps) => justify ? justify : 'center'};

`

export default FlexStyle;