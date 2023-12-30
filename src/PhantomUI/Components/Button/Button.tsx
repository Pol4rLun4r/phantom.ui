// style
import ButtonStyle from "./style/Button"

// interface
import { IButtonProps } from "./interface"

const Button = ({ children, variant, radius, size }: IButtonProps) => {
    const Style = {
        variant,
        radius,
        size
    }

    return (
        <ButtonStyle $style={Style}>
            {children}
        </ButtonStyle>
    )
}

export default Button