import styled from "styled-components";

import { motion } from "framer-motion";

// style
import Style from "../../../../Style/Style";

// settings
import { Size } from "./Size";

// variants
import Variants from "./Variants";

// size
import { BorderRadiusGroup } from "../../../../Style/size/RadiusGroup.style";

const ButtonStyle = styled(motion.button).attrs({whileTap: {scale: 0.95}})`
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
        flex-direction: ${({ direction }) => direction ? direction : 'column'};
        ${({ gap }) => gap ? '' : 'gap: 0rem;'};
        ${ButtonStyle} {
            border-radius: 0rem;
            ${BorderRadiusGroup()}
        }
`

export default ButtonStyle;