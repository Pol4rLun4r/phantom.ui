import styled from "styled-components";

// colors
import { bodyColorPrimary } from "../../../PhantomUI/Theme/Theme";

// sizes
import { $Spacing } from "../../../PhantomUI/@Sizes/Spacings";

// border color
import theme from "styled-theming";

const borderHeader = theme('mode', {
    light: '#e9ecef',
    dark: '#1f1f1f'
})

const HeaderStyle = styled.header`
    width: 100%;
    height: 3.75rem;

    position: fixed;
    z-index: 10;

    background-color: ${bodyColorPrimary};

    border-bottom: 0.0625rem solid ${borderHeader};
    padding: 0rem ${$Spacing.md};
`

export default HeaderStyle;