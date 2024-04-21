//UI
import { NavLink } from "../../PhantomUI/Components/@Navigation"

// database
import data from "./data"

// react router
import { NavLink as Link } from "react-router-dom"

const Links = (pathname: string) => {
    return (
        data.map((item, index) => (
            <NavLink
                key={item.label + index}
                label={item.label}
                disabled={item?.disabled}
                opened={item?.opened}
            >
                {item.children && item.children.map((item, index) => (
                    <>
                        {item.group ?
                            <NavLink.Group label={item.group} leftSection={<item.icon size="1rem" stroke={1.5}/>} disabled={item?.disabled}>
                                {item.children && item.children.map((item, index) => (
                                    <NavLink
                                        key={index}
                                        label={item?.label}
                                        disabled={item?.disabled}
                                        to={item?.to}
                                        as={Link}
                                        active={item?.to === pathname}
                                        variant={item?.to === pathname ? 'light' : 'default'}
                                    />
                                ))}
                            </NavLink.Group>
                            :
                            <NavLink
                                key={index}
                                label={item?.label}
                                disabled={item?.disabled}
                                to={item?.to}
                                as={Link}
                                active={item?.to === pathname}
                                variant={item?.to === pathname ? 'light' : 'default'}
                            />
                        }
                    </>
                ))}
            </NavLink>
        )))
}

export default Links