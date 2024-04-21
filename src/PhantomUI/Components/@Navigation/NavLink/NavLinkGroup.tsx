// style
import { Label, Container, LabelContainer, LeftSection } from "./style/NavLinkGroup";

// types
import type { NavLinkGroupProps } from "../../../@Types/props"
import type { PhantomStyledComponentsProps } from "../../../@Types/types"

interface Props extends NavLinkGroupProps, PhantomStyledComponentsProps { }

const NavLinkGroup = ({ label, leftSection, ...props }: Props) => {

    return (
        <Container {...props} className="navLinkContainerGroup">
            <LabelContainer>
                <LeftSection>{leftSection}</LeftSection>
                <Label>{label}</Label>
            </LabelContainer>
            {props.children}
        </Container>
    )
}

export default NavLinkGroup