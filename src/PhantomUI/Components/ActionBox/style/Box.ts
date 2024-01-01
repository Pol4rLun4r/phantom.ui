import styled from "styled-components";

// settings
import { Size, BorderRadius, DefaultSetting } from "./Settings";

// variants
import Variants from "./Variants";

const BoxStyle = styled.div`
    // settings
    ${DefaultSetting()}
    ${BorderRadius()}
    ${Size()}

    // variants
    ${Variants()}
`

export default BoxStyle;