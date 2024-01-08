import styled from "styled-components";

// default settings
import Style from "../../../Style/Style";

// settings
import Variants from "./Variants";

const TextParagraph = styled.p`
    ${Style()};
`

const TextSpan = styled.span`
    ${Style()}
    ${Variants()}
`

export { TextParagraph, TextSpan }