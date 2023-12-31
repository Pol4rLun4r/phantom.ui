import styled from "styled-components";

// settings
import { Size, BorderRadius, DefaultSetting } from "./Settings";

// variants
import Variants from "./Variants";

const ButtonStyle = styled.button`
    // settings
    ${DefaultSetting()}
    ${BorderRadius()}
    ${Size()}

    // variants
    ${Variants()}
`

export default ButtonStyle;