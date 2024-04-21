import { ReactNode } from "react"

// react Router
import { NavLink, useLocation } from "react-router-dom"

// UI
import { Text } from "../../../PhantomUI/Components/@Typography"
import { ActionIcon, Button } from "../../../PhantomUI/Components/@Buttons"

interface iLinkButton {
    text: string
    icon: ReactNode
    linkPath: string
}

const PageLinkButton = ({ text, icon, linkPath }: iLinkButton) => {
    const pathname = useLocation().pathname.split('/')[2];
    const isPathname = pathname == linkPath ? true : false;

    return (
        <Button
            variant={isPathname ? "light" : "transparent"}
            disabledHoverEffect
            radius="md"
            gap="0.6rem"
            as={NavLink}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            to={linkPath}
            justify="flex-start"
            padding={"0"}
            size={"3rem"}
            paddingLeft={"0.6rem"}
            paddingRight={"0.6rem"}
            leftSection={
                <ActionIcon variant={isPathname ? "transparent" : "light"} size="lg" radius="md">
                    {icon}
                </ActionIcon>
            }
        >
            <Text variant="whiteText" fontWeight={"semibold"} fontSize="sm" textTransform="capitalize">{text}</Text>
        </Button>
    )
}

export default PageLinkButton