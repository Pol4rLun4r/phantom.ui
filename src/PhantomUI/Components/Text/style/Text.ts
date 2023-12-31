import styled from "styled-components";

// default settings
import { Style } from "./Style";

// size
import { Size } from "./Size";

const TextParagraph = styled.p`
    ${Size()};
    ${Style()};
`

const TextSpan = styled.span`
    ${Style()}
`

export { TextParagraph, TextSpan }