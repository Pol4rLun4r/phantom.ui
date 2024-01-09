// style
import ButtonStyle from "./style/Button"

// type
import type { ActionIconProps } from "../../@Types/props"

const ActionIcon = ({
    // settings props
    children,
    size,
    onClick,

    // props
    direction, justify, align, gap, width, height, maxWidth, minWidth, maxHeight, minHeight, marginTop, marginBottom, marginLeft, marginRight, margin, paddingTop, paddingBottom, paddingLeft, paddingRight, padding, fontWeight, textAlign, fontSize, letterSpacing, textTransform, position, display, top, left, bottom, right
}: ActionIconProps) => {
    const Style = {
        // custom style props
        size,

        // default style props
        direction, justify, align, gap, width, height, maxWidth, minWidth, maxHeight, minHeight, marginTop, marginBottom, marginLeft, marginRight, margin, paddingTop, paddingBottom, paddingLeft, paddingRight, padding, fontWeight, textAlign, fontSize, letterSpacing, textTransform, position, display, top, left, bottom, right
    }

    return (
        <ButtonStyle {...Style} onClick={() => onClick ? onClick() : ''}>
            {children}
        </ButtonStyle>
    )
}

export default ActionIcon;