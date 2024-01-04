// interface
import { IFlexProps } from "./interface"

// style
import FlexStyle from "./style/Flex"

const Flex = ({ children, width, height, justify, align, gap, paddingBottom, paddingTop, paddingLR, paddingMixed , marginBottom, marginLeft, marginMixed, marginRight, marginTop, refProp, direction}: IFlexProps) => {
    const Style = {
        width,
        height,
        justify,
        align,
        gap,
        paddingBottom,
        paddingTop,
        paddingLR,
        paddingMixed,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        marginMixed,
        direction
    }

    return (
        <FlexStyle $style={Style} ref={refProp}>
            {children}
        </FlexStyle>
    )
}

export default Flex