import styled from "styled-components";

// default settings
import Style from "../../Style/Style";

//colors
import themeColorSchema from "../../hook/ThemeHook";

const Anchor = styled.a`
    ${Style()}

    // default
    color: ${themeColorSchema({ dark: 6, light: 6 })};
`

export default Anchor;