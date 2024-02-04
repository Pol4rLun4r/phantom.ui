// style
import { ButtonGroupStyle } from "./style/Button";

// type
import type { PhantomProps } from "../../../@Types/props";
import type { PhantomStyledComponentsProps } from "../../../@Types/types";

interface Props extends PhantomProps, PhantomStyledComponentsProps {}

const ButtonGroup = (props: Props) => {
    return (
        <ButtonGroupStyle {...props}>
            {props.children}
        </ButtonGroupStyle>
    )
}

export default ButtonGroup