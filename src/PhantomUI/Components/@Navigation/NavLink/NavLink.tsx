import { useEffect, useState } from "react";

// framer motion
import { Variants } from "framer-motion";

// style
import { Container, Content, NavLinkStyle, LinkNested, ContainerNested } from "./style/NavLink"

// type
import type { NavLinkProps } from "../../../@Types/props"
import type { PhantomStyledComponentsProps } from "../../../@Types/types";

// component
import Icon from "./Icon"
import NavLinkGroup from "./NavLinkGroup";

interface Props extends NavLinkProps, PhantomStyledComponentsProps { }

const containerVariants: Variants = {
    closed: {
        opacity: 0,
        height: "0",
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3,
        }
    },
    open: {
        opacity: 1,
        height: "auto",
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3,
        }
    }
}

const NavLink = ({ label, variant, active, nested, href, to, opened, ...props }: Props) => {
    const NavProps = { label, variant, nested, active }
    const LinkProps = { href, to }

    const [isNested, setIsNested] = useState(false);
    const [isOpen, setIsOpen] = useState(opened !== undefined ? opened : false);

    const isLink: boolean = !isNested && href !== undefined || to !== undefined;

    useEffect(() => {
        props.children ? setIsNested(true) : setIsNested(false);
    }, [props.children])

    return (
        <Container {...props} as={"div"}>
            {isLink ?
                <Content as={props.as ? props.as : "a"} onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} {...LinkProps} >
                    <NavLinkStyle {...NavProps} nested={isNested}>
                        {label}
                    </NavLinkStyle>
                    {isNested && (<Icon />)}
                </Content>
                :
                <Content onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} >
                    <NavLinkStyle {...NavProps} nested={isNested}>
                        {label}
                    </NavLinkStyle>
                    {isNested && (<Icon />)}
                </Content>
            }
            <ContainerNested
                layout
                transition={{
                    layout: { duration: 0.3, type: "spring", bounce: 0 },
                }}
                variants={containerVariants}
                initial={opened === true ? "open" : "closed"}
                animate={isOpen ? "open" : "closed"}
            >
                {isNested && (
                    <LinkNested>
                        {props.children}
                    </LinkNested>
                )}
            </ContainerNested>
        </Container >
    )
}

NavLink.Group = NavLinkGroup;

export default NavLink