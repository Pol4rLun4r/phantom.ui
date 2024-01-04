// interface
import { IStackProps } from "./interface"

// style
import StackStyle from "./style/Stack"

const Stack = ({ children, width, height, justify, align, gap, paddingBottom, paddingTop, paddingLR, paddingMixed , marginBottom, marginLeft, marginMixed, marginRight, marginTop, refProp}: IStackProps) => {
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
        marginMixed
    }

    return (
        <StackStyle $style={Style} ref={refProp}>
            {children}
        </StackStyle>
    )
}

export default Stack