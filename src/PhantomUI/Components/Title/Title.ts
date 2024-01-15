import styled from "styled-components";

// theme
import { titleColor } from "../../Theme/Theme";

// default settings
import Style from "../../Style/Style";


const Title = styled.h1`
    color: ${titleColor};
    ${Style()}
`

export default Title;