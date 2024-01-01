import styled from "styled-components";

// interface
import { IMenu } from "../interface";

// settings
import { Size, DefaultSetting } from "./Settings";

const MenuStyle = styled.button`

    .leftSection {
        padding-right: ${({ $style }: IMenu) => $style.leftSection ? '0.5rem;' : '0rem'};
    }

    // settings
    ${DefaultSetting()}
    ${Size()}
`

export default MenuStyle;