import styled from "styled-components";

// style
import Style from "../../../Style/Style";

// type
import type { PhantomProps } from "../../../@Types/props";

const Stack = styled.div<PhantomProps>`
    ${Style()}

    // default
    display: flex;
    flex-direction: ${({ direction }) => direction ? direction : 'column'};

    // variants de configuração
    align-items: ${({ align }) => align ? align : 'stretch'};
    justify-content: ${({ justify }) => justify ? justify : 'center'};

`

export default Stack;