// type
import type { GroupProps } from "../../../@Types/props"

// style
import GroupStyle from "./style/Group"


const Group = ({
    // settings props
    children,
    refProp,

    // props
    direction, justify, align, gap, width, height, maxWidth, minWidth, maxHeight, minHeight, marginTop, marginBottom, marginLeft, marginRight, margin, paddingTop, paddingBottom, paddingLeft, paddingRight, padding, fontWeight, textAlign, fontSize, letterSpacing, textTransform, position, display, top, left, bottom, right
}: GroupProps) => {
    const Style = {
        direction, justify, align, gap, width, height, maxWidth, minWidth, maxHeight, minHeight, marginTop, marginBottom, marginLeft, marginRight, margin, paddingTop, paddingBottom, paddingLeft, paddingRight, padding, fontWeight, textAlign, fontSize, letterSpacing, textTransform, position, display, top, left, bottom, right
    }

    return (
        <GroupStyle {...Style} ref={refProp}>
            {children}
        </GroupStyle>
    )
}

export default Group