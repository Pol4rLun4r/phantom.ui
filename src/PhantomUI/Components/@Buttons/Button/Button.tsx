// style
import ButtonStyle from "./style/Button"

// type
import type { ButtonProps } from "../../../@Types/props"

//components
import ButtonGroup from "./ButtonGroup"


const Button = (props: ButtonProps) => {
    return (
        <ButtonStyle {...props}>
            {props.leftSection}
            {props.children}
            {props.rightSection}
        </ButtonStyle>
    )
}

Button.Group = ButtonGroup;

export default Button;