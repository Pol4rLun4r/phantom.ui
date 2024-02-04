import MenuStyle from "./style/MenuLabel"

// type
import type { PhantomProps } from "../../../../@Types/props";
import type { PhantomStyledComponentsProps } from "../../../../@Types/types";

interface Props extends PhantomProps, PhantomStyledComponentsProps {}

const MenuLabel = (props: Props) => {
    return (
        <MenuStyle {...props} >{props.children}</MenuStyle>
    )
}

export default MenuLabel;