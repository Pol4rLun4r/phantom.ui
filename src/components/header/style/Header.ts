import styled from "styled-components";

// colors
import { bodyColor } from "../../../PhantomUI/Theme/Theme";

// sizes
import { Spacing } from "../../../PhantomUI/Theme/Spacing";

// border color
import theme from "styled-theming";

const borderHeader = theme('mode', {
    light: '#e9ecef',
    dark: '#1f1f1f'
})

const HeaderStyle = styled.header`
    width: 100%;
    height: 3.75rem;

    background-color: ${bodyColor};

    border-bottom: 0.0625rem solid ${borderHeader};
    padding: 0rem ${Spacing.md};
`

export default HeaderStyle;