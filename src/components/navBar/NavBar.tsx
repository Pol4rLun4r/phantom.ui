// style
import NavBarSection from "./style/section"

// component
import PageLinkButton from "./pageLinkButton/PageLinkButton"
import Links from "./Links"

// UI
import { Stack } from "../../PhantomUI/Components/@Layout"

// icons
import { IconCompass, IconReport, IconInfoHexagon } from "@tabler/icons-react"

// react router
import { useLocation } from "react-router-dom"

const NavBar = () => {
    const pathname = useLocation().pathname.split('/').slice(-1).toString();

    return (
        <NavBarSection>
            <Stack gap="0rem" marginBottom={"1rem"}>
                <PageLinkButton text="getting started" icon={<IconCompass />} linkPath="getting-started" />
                <PageLinkButton text="about phantom" icon={<IconInfoHexagon />} linkPath="about" />
                <PageLinkButton text="Changelog" icon={<IconReport />} linkPath="changelog" />
            </Stack>
            <Stack gap="0.2rem">
                {Links(pathname)}
            </Stack>
        </NavBarSection>
    )
}

export default NavBar;