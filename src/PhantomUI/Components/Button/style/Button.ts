import styled from "styled-components";

// style
import Style from "../../../Style/Style";

// settings
import { Size } from "./Size";

// variants
import Variants from "./Variants";
const ButtonStyle = styled.button`
    ${Style()}
    
    // default
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ fontWeight }) => fontWeight ? '' : 'font-weight: 600;'};

    appearance: none;
    border-style: none;
    cursor: pointer;

    /* white-space: nowrap; */

    // settings
    ${Variants()}
    ${Size()}
`

export default ButtonStyle;