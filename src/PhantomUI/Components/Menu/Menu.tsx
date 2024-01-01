import { ReactNode, useState } from "react";

// config menu
import { useLayer } from "react-laag"
import MenuItem from "./MenuItem/MenuItem";
import MenuLabel from "./MenuLabel/MenuLabel";

// style
import { MenuContainer } from "./style/Menu";

interface IMenu {
    activeMenu: ReactNode
    children: ReactNode
}

const Menu = ({ activeMenu, children }: IMenu) => {
    const [isOpen, setOpen] = useState(false);

    function close() {
        setOpen(false);
    }

    function handleOpen() {
        setOpen(!isOpen)
    }

    const { renderLayer, triggerProps, layerProps } = useLayer({
        isOpen,
        overflowContainer: false,
        placement: "bottom-center",
        triggerOffset: 10,
        onOutsideClick: close,
        auto: true
    })

    return (
        <>
            <div {...triggerProps} onClick={() => handleOpen()}>
                {activeMenu}
            </div>

            {renderLayer(
                <>
                    {isOpen && (
                        <MenuContainer {...layerProps}>
                            {children}
                        </MenuContainer>
                    )}
                </>
            )}
        </>
    )
}

Menu.item = MenuItem;
Menu.label = MenuLabel;

export default Menu;