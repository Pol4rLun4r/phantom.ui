import styled from "styled-components";

// type
import type { PhantomProps } from "../../../@Types/props";

// default settings
import Style from "../../../Style/Style";

const Flex = styled.div`
    ${Style()}

    // default
    display: flex;

    // variants de configuração
    align-items: ${({ align }: PhantomProps) => align ? align : 'center'};
    justify-content: ${({ justify }: PhantomProps) => justify ? justify : 'center'};

`

export default Flex;