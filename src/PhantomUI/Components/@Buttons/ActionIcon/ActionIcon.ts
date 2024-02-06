import styled from "styled-components";
import { motion } from "framer-motion";

// default settings
import Style from "../../../Style/Style";

// settings
import Variants from "./style/Variants";
import Size from "./style/Size";

const ActionIcon = styled(motion.button).attrs({whileTap: {scale: 0.95}})`
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