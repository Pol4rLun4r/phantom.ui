import styled from "styled-components";

// type
import type { MenuItemProps } from "../../../../../@Types/props";

// settings
import { Size, DefaultSetting } from "./Settings";

const MenuStyle = styled.button`

    .leftSection {
        padding-right: ${({ leftSection }: MenuItemProps) => leftSection ? '0.5rem;' : '0rem'};
    }

    // settings
    ${DefaultSetting()}
    ${Size()}
`

export default MenuStyle;