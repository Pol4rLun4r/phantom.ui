// style
import BoxStyle from "./style/Box"

// interface
import { IBoxProps } from "./interface"

const ActionBox = ({ children, variant, radius, size, onClick, color, backgroundColor }: IBoxProps) => {
    const Style = {
        variant,
        color,
        backgroundColor,
        radius,
        size,
        onClick
    }

    return (
        <BoxStyle $style={Style} onClick={() => onClick ? onClick() : ''}>
            {children}
        </BoxStyle>
    )
}

export default ActionBox;