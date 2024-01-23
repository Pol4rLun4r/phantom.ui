import styled from "styled-components";

// type
import type { LayoutComponentsProps } from "../../../@Types/props";

// default settings
import Style from "../../../Style/Style";

const Group = styled.div<LayoutComponentsProps>`
    ${Style()}

    // default
    display: flex;
    flex-direction: ${({ direction }) => direction ? direction : 'row '};

    // variants de configuração
    align-items: ${({ align }) => align ? align : 'center'};
    justify-content: ${({ justify }) => justify ? justify : 'center'};
    
    & > * {
        ${({ grow}) => grow ? 'flex-grow: 1;' : ''}
    }
`

export default Group;