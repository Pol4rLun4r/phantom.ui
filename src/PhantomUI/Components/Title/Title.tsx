// type
import type { TitleProps } from "../../@Types/props";

// style
import { H1, H2, H3, H4, H5, H6 } from "./style/Title";

const Title = ({
    // settings props
    children,
    order,

    // props
    direction, justify, align, gap, width, height, maxWidth, minWidth, maxHeight, minHeight, marginTop, marginBottom, marginLeft, marginRight, margin, paddingTop, paddingBottom, paddingLeft, paddingRight, padding, fontWeight, textAlign, fontSize, letterSpacing, textTransform, position, display, top, left, bottom, right
}: TitleProps) => {
    const Style = {
        direction, justify, align, gap, width, height, maxWidth, minWidth, maxHeight, minHeight, marginTop, marginBottom, marginLeft, marginRight, margin, paddingTop, paddingBottom, paddingLeft, paddingRight, padding, fontWeight, textAlign, fontSize, letterSpacing, textTransform, position, display, top, left, bottom, right
    }

    if (order == 2) return (<H2 {...Style}>{children}</H2>)
    if (order == 3) return (<H3 {...Style}>{children}</H3>)
    if (order == 4) return (<H4 {...Style}>{children}</H4>)
    if (order == 5) return (<H5 {...Style}>{children}</H5>)
    if (order == 6) return (<H6 {...Style}>{children}</H6>)
    return (<H1 {...Style}>{children}</H1>)
}

export default Title