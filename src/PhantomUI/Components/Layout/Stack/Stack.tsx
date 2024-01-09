// type
import type { StackProps } from "../../../@Types/props"

// style
import StackStyle from "./style/Stack"

const Stack = ({
    // settings props
    children,
    refProp,

    // props
    direction, justify, align, gap, width, height, maxWidth, minWidth, maxHeight, minHeight, marginTop, marginBottom, marginLeft, marginRight, margin, paddingTop, paddingBottom, paddingLeft, paddingRight, padding, fontWeight, textAlign, fontSize, letterSpacing, textTransform, position, display, top, left, bottom, right
}: StackProps) => {
    const Style = {
        direction, justify, align, gap, width, height, maxWidth, minWidth, maxHeight, minHeight, marginTop, marginBottom, marginLeft, marginRight, margin, paddingTop, paddingBottom, paddingLeft, paddingRight, padding, fontWeight, textAlign, fontSize, letterSpacing, textTransform, position, display, top, left, bottom, right
    }

    return (
        <StackStyle {...Style} ref={refProp}>
            {children}
        </StackStyle>
    )
}

export default Stack