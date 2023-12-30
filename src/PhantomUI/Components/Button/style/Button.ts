import styled from "styled-components";

// settings
import { Size, Radius, DefaultSetting } from "./Settings";

// variants
import Variants from "./Variants";

const ButtonStyle = styled.button`
    // settings
    ${DefaultSetting()}
    ${Radius()}
    ${Size()}

    // variants
    ${Variants()}
`

export default ButtonStyle;