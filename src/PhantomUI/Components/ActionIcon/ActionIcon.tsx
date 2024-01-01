// style
import ButtonStyle from "./style/Button"

// interface
import { IButtonProps } from "./interface"

const ActionIcon = ({ children, variant, radius, size, onClick, color, backgroundColor }: IButtonProps) => {
    const Style = {
        variant,
        color,
        backgroundColor,
        radius,
        size,
        onClick
    }

    return (
        <ButtonStyle $style={Style} onClick={() => onClick ? onClick() : ''}>
            {children}
        </ButtonStyle>
    )
}

export default ActionIcon;