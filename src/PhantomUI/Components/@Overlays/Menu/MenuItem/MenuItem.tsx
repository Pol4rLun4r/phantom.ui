// style
import MenuStyle from "./style/MenuItem"

// type
import type { MenuItemProps } from "./style"

const MenuItem = ({ children, onClick, leftSection, rightSection }: MenuItemProps) => {
    const Style = {
        leftSection, rightSection
    }

    return (
        <MenuStyle {...Style} onClick={() => onClick ? onClick() : ''}>
            <div className="leftSection">
                {leftSection}
            </div>
            <div className="children">
                {children}
            </div>
            <div className="rightSection">
                {rightSection}
            </div>
        </MenuStyle>
    )
}

export default MenuItem