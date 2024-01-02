// interface
import { IStackProps } from "./interface"

// style
import StackStyle from "./style/Stack"

const Stack = ({ children, width, height, justify, align, gap, paddingBottom, paddingTop, paddingLR, paddingMixed }: IStackProps) => {
    const Style = {
        width,
        height,
        justify,
        align,
        gap,
        paddingBottom,
        paddingTop,
        paddingLR,
        paddingMixed
    }

    return (
        <StackStyle $style={Style}>
            {children}
        </StackStyle>
    )
}

export default Stack