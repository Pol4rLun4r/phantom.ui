// style
import { ButtonGroupStyle } from "./style/Button"

// type
import type { ButtonGroupProps } from "../../../@Types/props"

const ButtonGroup = (props: ButtonGroupProps) => {
    return (
        <ButtonGroupStyle {...props}>
            {props.children}
        </ButtonGroupStyle>
    )
}

export default ButtonGroup