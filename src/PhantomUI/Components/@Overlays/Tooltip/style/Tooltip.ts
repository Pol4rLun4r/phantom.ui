import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// style
import Style from "../../../../Style/Style";

// colors
import { bodyTooltip, textTooltip } from "../../../../Theme/Theme";

// size
import { $FontSize } from "../../../../@Sizes/Typography";

const TopAndBottom = '0.4rem';
const LeftAndRight = '0.8rem';

const TooltipStyle = styled(motion.div)`
    ${Style()}

    // settings
    color: ${textTooltip};
    background-color: ${bodyTooltip};
    
    font-size: ${$FontSize.sm};
    padding-top: ${TopAndBottom};
    padding-bottom: ${TopAndBottom};
    padding-left: ${LeftAndRight};
    padding-right: ${LeftAndRight};
`;

export const ArrowTooltip = () => {
    return css`
        #layers {
            #tooltip {
                path {
                    fill: ${bodyTooltip};
                }
            }
    } 
    `;
};

export default TooltipStyle;