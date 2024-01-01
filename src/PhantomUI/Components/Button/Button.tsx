// style
import ButtonStyle from "./style/Button"

// interface
import { IButtonProps } from "./interface"

const Button = ({ children, variant, radius, size, onClick, Props }: IButtonProps) => {
    const Style = {
        variant,
        radius,
        size
    }

    return (
        <ButtonStyle $style={Style} onClick={() => onClick ? onClick() : ''} {...Props}>
            {children}
        </ButtonStyle>
    )
}

export default Button