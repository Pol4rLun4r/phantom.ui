import styled from "styled-components";

import { motion } from "framer-motion";

// colors
import { borderMenu, bodyMenu } from "../../../../Theme/Theme";
import { $Radius } from "../../../../@Sizes/Radius";
// import Style from "../../../../Style/Style";

export const MenuContainer = styled(motion.ul)`

    // default
    display: flex;
    flex-direction: column;

    width: 10.813rem;

    background-color: ${bodyMenu};

    border: solid 1px ${borderMenu};
    border-radius: ${$Radius.sm};

    padding: 0.25rem;

    z-index: 20;
`