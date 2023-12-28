// interface
import { IStackProps } from "./interface"

// style
import StackStyle from "./style/Stack"

const Stack = ({ children, width, height, justify, align, gap }: IStackProps) => {
    const Style = {
        width,
        height,
        justify,
        align,
        gap
    }

    return (
        <StackStyle $style={Style}>
            {children}
        </StackStyle>
    )
}

export default Stack