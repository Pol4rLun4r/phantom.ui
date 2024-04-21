import styled from "styled-components";

// colors
import { bodyColorSecondary, borderColorSecondary } from "../../../PhantomUI/Theme/Theme";

const NavBarSection = styled.nav`
    position: fixed;
    top: 3.75rem;
    bottom: 0;
    left:0;
    z-index: 10;

    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 16.25rem;
    display: flex;
    flex-direction: column;

    border-right: 0.0625rem solid ${borderColorSecondary};    

    background-color: ${bodyColorSecondary};
`

export default NavBarSection;