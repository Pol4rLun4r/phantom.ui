// style
import MenuStyle from "./style/MenuItem"

// interface
import { IMenuProps } from "./interface"

const MenuItem = ({ children, onClick, leftSection, rightSection }: IMenuProps) => {
    const Style = {
        leftSection,
        rightSection
    }

    return (
        <MenuStyle $style={Style} onClick={() => onClick ? onClick() : ''}>
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