import styled from "styled-components";

// style
import Style from "../../../../Style/Style";

// settings
import { Size } from "./Size";

// variants
import Variants from "./Variants";
import { BorderRadiusGroup } from "../../../../Style/size/RadiusGroup.style";

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

    // settings
    ${Variants()}
    ${Size()}

    ${({ fullWidth }) => fullWidth ? 'width: 100%' : ''};
`

export const ButtonGroupStyle = styled.div`
        ${Style()}

        // default
        display: flex;
        flex-direction: ${({ direction }) => direction ? direction : 'row'};
        ${({ gap }) => gap ? '' : 'gap: 0rem;'};
        ${ButtonStyle} {
            border-radius: 0rem;
            ${BorderRadiusGroup()}
        }
`

export default ButtonStyle;