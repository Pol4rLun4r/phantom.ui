// style
import ButtonStyle from "./style/Button"

// type
import type { ButtonProps } from "../../../@Types/props"
import type { PhantomHTMLButtonElement } from "../../../@Types/types"

//components
import ButtonGroup from "./ButtonGroup"

interface Props extends ButtonProps, PhantomHTMLButtonElement {}

const Button = (props: Props) => {
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