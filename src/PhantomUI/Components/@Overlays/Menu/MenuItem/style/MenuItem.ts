import styled from "styled-components";
import { motion } from "framer-motion";

// type
import type { MenuItemProps } from "../../../../../@Types/props";

// settings
import { Size, DefaultSetting } from "./Settings";

const MenuStyle = styled(motion.li)`
    .leftSection {
        padding-right: ${({ leftSection }: MenuItemProps) => leftSection ? '0.5rem;' : '0rem'};
    }

    // settings
    ${DefaultSetting()}
    ${Size()}
`

export default MenuStyle;