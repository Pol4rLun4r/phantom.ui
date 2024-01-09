import styled, { css } from "styled-components";

// theme
import { titleColor } from "../../../Theme/Theme";

// default settings
import Style from "../../../Style/Style";

const $Style = () => {
    return css`
    color: ${titleColor};
    ${Style()}
`
}

const H1 = styled.h1`${$Style()};`

const H2 = styled.h2`${$Style()};`

const H3 = styled.h3`${$Style()};`

const H4 = styled.h4`${$Style()};`

const H5 = styled.h5`${$Style()};`

const H6 = styled.h6`${$Style()};`

export { H1, H2, H3, H4, H5, H6 }
