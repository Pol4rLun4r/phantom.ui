import MenuStyle from "./style/MenuLabel"
import { IMenu } from "./style/interface";

const MenuLabel = ({ children }: IMenu) => {
    return (
        <MenuStyle>{children}</MenuStyle>
    )
}

export default MenuLabel;