// style
import ButtonStyle from "./style/Button"

// type
import type { ButtonProps } from "../../@Types/props"


const Button = (props: ButtonProps) => {
    return (
        <ButtonStyle {...props} onClick={() => props.onClick ? props.onClick() : ''}>
            {props.children}
        </ButtonStyle>
    )
}

export default Button