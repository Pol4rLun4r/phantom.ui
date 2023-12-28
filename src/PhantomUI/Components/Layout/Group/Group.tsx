// interface
import { IGroupProps } from "./interface"

// style
import GroupStyle from "./style/Group"


const Group = ({ children, width, height, justify, align, gap, grow }: IGroupProps) => {
    const Style = {
        width,
        height,
        justify,
        align,
        gap,
        grow
    }

    return (
        <GroupStyle $style={Style}>
            {children}
        </GroupStyle>
    )
}

export default Group