import MenuStyle from "./style/MenuLabel"
import { MenuLabelProps } from "./style/style";

const MenuLabel = ({ children }: MenuLabelProps) => {
    return (
        <MenuStyle>{children}</MenuStyle>
    )
}

export default MenuLabel;