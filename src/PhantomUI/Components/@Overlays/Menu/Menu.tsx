import { useEffect, useState } from "react";

// settings menu
import { useLayer } from "react-laag"
import MenuItem from "./MenuItem/MenuItem";
import MenuLabel from "./MenuLabel/MenuLabel";

// style
import { MenuContainer } from "./style/Menu";

// types
import type { MenuProps } from "../../../@Types/props";
import type { PhantomStyledComponentsProps } from "../../../@Types/types";

// motion
import { AnimatePresence, motion, Variants, useAnimate, stagger } from "framer-motion";

const menuContainerVariants: Variants = {
    open: {
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.4,
            delayChildren: 0.3,
            staggerChildren: 0.05
        }
    },
    closed: {
        scale: 0,
        y: -130,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.4,
        }
    }
}

interface Props extends MenuProps, PhantomStyledComponentsProps { }

const Menu = (props: Props) => {
    const [isOpen, setOpen] = useState(false);

    const [scope, animate] = useAnimate()

    if(scope.current && isOpen) {
        animate("li", { opacity: 1, y: 0, }, { delay: stagger(0.2) })
    }

    const { renderLayer, triggerProps, layerProps } = useLayer({
        isOpen,
        overflowContainer: false,
        placement: "bottom-center",
        triggerOffset: 10,
        onOutsideClick: () => setOpen(false),
        auto: true
    })

    return (
        <>
            <motion.div {...triggerProps} onClick={() => setOpen(!isOpen)}>
                {props.activeMenu}
            </motion.div>

            {renderLayer(
                <AnimatePresence>
                    {isOpen && (
                        <MenuContainer
                            {...props}
                            {...layerProps}
                            variants={menuContainerVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            ref={scope}
                        >
                            {props.children}
                        </MenuContainer>
                    )}
                </AnimatePresence>
            )}
        </>
    )
}

Menu.item = MenuItem;
Menu.label = MenuLabel;

export default Menu;