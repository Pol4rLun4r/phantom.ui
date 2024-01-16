import styled from "styled-components";

// type
import type { PhantomProps } from "../../../@Types/props";

// default settings
import Style from "../../../Style/Style";

const Group = styled.div<PhantomProps>`
    ${Style()}

    // default
    display: flex;
    flex-direction: ${({ direction }) => direction ? direction : 'row '};

    // variants de configuração
    align-items: ${({ align }) => align ? align : 'center'};
    justify-content: ${({ justify }) => justify ? justify : 'center'};

`

export default Group;