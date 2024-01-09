import styled from "styled-components";

// type
import type { GroupProps } from "../../../../@Types/props";

// default settings
import Style from "../../../../Style/Style";

const GroupStyle = styled.div`
    ${Style()}

    // default
    display: flex;
    flex-direction: ${({ direction }: GroupProps) => direction ? direction : 'row '};

    // variants de configuração
    align-items: ${({ align }: GroupProps) => align ? align : 'center'};
    justify-content: ${({ justify }: GroupProps) => justify ? justify : 'center'};

`

export default GroupStyle;