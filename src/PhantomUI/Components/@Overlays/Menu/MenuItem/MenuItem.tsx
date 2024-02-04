// style
import MenuStyle from "./style/MenuItem"

// type
import type { MenuItemProps } from "../../../../@Types/props"
import type { PhantomStyledComponentsProps } from "../../../../@Types/types"

interface Props extends MenuItemProps, PhantomStyledComponentsProps {}

const MenuItem = (props: Props) => {

    return (
        <MenuStyle {...props}>
            <div className="leftSection">
                {props.leftSection}
            </div>
            <div className="children">
                {props.children}
            </div>
            <div className="rightSection">
                {props.rightSection}
            </div>
        </MenuStyle>
    )
}

export default MenuItem