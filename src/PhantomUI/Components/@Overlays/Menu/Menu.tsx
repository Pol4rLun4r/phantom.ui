import { useState } from "react";

// settings menu
import { useLayer } from "react-laag"
import MenuItem from "./MenuItem/MenuItem";
import MenuLabel from "./MenuLabel/MenuLabel";

// style
import { MenuContainer } from "./style/Menu";

import type { MenuProps } from "../../../@Types/props";
import type { PhantomStyledComponentsProps } from "../../../@Types/types";

interface Props extends MenuProps, PhantomStyledComponentsProps { }

const Menu = (props: Props) => {
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
                {props.activeMenu}
            </div>

            {renderLayer(
                <>
                    {isOpen && (
                        <MenuContainer {...layerProps} {...props}>
                            {props.children}
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