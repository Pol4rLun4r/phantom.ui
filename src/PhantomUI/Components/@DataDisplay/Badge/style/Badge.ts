import styled from "styled-components";

// style
import Style from "../../../../Style/Style";

// type
import type { BadgeProps } from "../../../../@Types/props";

// colors
import themeColorSchema from "../../../../hook/ThemeHook";

// settings
import { Size, DotSize } from "./Size";
import Variants from "./Variants";

export const Dot = styled.span`
    margin-right: -0.5rem;
    border-radius: 100%;
`

const BadgeStyle = styled.div<BadgeProps>`
    ${Style()}

    // default
    display: flex;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;
    font-weight: 700;

    ${({ fullWidth }) => fullWidth ? 'width: 100%' : ''};

    // settings
    ${Size()}
    ${Variants()}

    ${Dot}{
        ${DotSize()}
        background-color: ${({ color }) => color ? color : themeColorSchema({ dark: 6, light: 6 })};
    }
`

export default BadgeStyle;