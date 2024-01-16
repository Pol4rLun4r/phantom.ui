import styled from "styled-components";

// default settings
import Style from "../../Style/Style";

// type

// settings
import Variants from "./style/Variants";
import Size from "./style/Size";

const ActionIcon = styled.button`
    ${Style()}

    // default 
    display: flex;
    justify-content: center;
    align-items: center;

    appearance: none;
    border-style: none;
    cursor: pointer;

    // settings
    ${Size()}
    ${Variants()}
`

export default ActionIcon;