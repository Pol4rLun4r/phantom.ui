// style
import MenuStyle from "./style/MenuItem"

// type
import type { MenuItemProps } from "../../../../@Types/props"
import type { PhantomStyledComponentsProps } from "../../../../@Types/types"

// motion
import { Variants } from "framer-motion"

interface Props extends MenuItemProps, PhantomStyledComponentsProps { }

const itemVariants: Variants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
    }
}

const MenuItem = (props: Props) => {

    return (
        <MenuStyle
            variants={itemVariants}
            initial="initial"
            // animate="animate"
            {...props}
        >
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