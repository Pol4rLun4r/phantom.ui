// type
import type { FlexProps } from "../../../@Types/props"

// style
import FlexStyle from "./style/Flex"

const Flex = ({
    // settings props
    children,
    refProp,

    // props
    direction, justify, align, gap, width, height, maxWidth, minWidth, maxHeight, minHeight, marginTop, marginBottom, marginLeft, marginRight, margin, paddingTop, paddingBottom, paddingLeft, paddingRight, padding, fontWeight, textAlign, fontSize, letterSpacing, textTransform, position, display, top, left, bottom, right
}: FlexProps) => {
    const Style = {
        direction, justify, align, gap, width, height, maxWidth, minWidth, maxHeight, minHeight, marginTop, marginBottom, marginLeft, marginRight, margin, paddingTop, paddingBottom, paddingLeft, paddingRight, padding, fontWeight, textAlign, fontSize, letterSpacing, textTransform, position, display, top, left, bottom, right
    }

    return (
        <FlexStyle {...Style} ref={refProp}>
            {children}
        </FlexStyle>
    )
}

export default Flex