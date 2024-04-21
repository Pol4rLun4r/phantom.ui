import styled from "styled-components";
import { motion } from "framer-motion";

// style
import Style from "../../../../Style/Style";

// size
import { $FontSize } from "../../../../@Sizes/Typography";
import { $Radius } from "../../../../@Sizes/Radius";

// settings
import Variants from "./Variants";

export const Container = styled(motion.div)`
    ${Style()}
    
    opacity: ${({ disabled }: any) => disabled ? 0.4 : 1};
    pointer-events: ${({ disabled }: any) => disabled ? 'none' : ''};
    cursor: not-allowed;

    user-select: none;
`;

interface IContainerNested {
    isOpen?: boolean;
}

export const Content = styled.div<IContainerNested>`
    display: flex;
    flex-direction: row;
    align-items: center;

    cursor: pointer;

    & > svg {
        transform: ${({ isOpen }) => isOpen ? 'rotate(90deg)' : ''};
        transition: all 300ms;
    }
`;

export const NavLinkStyle = styled.div`
    ${Style()}

    // default
    padding: 0.4rem 0.5rem;
    font-size: ${$FontSize.sm};
    border-radius: ${$Radius.md};
    margin-right: ${({ nested }) => nested ? '0.3rem' : '0rem'};
    margin-bottom: ${({ nested }) => nested ? '0.2rem' : '0rem'};
    width: 100%;

    // settings
    ${Variants()}
`;

export const ContainerNested = styled(motion.div)``;

export const LinkNested = styled.div`
    margin-left: 1rem; 
    display: flex;
    flex-direction: column;

    & > * {
        margin-bottom: 0.2rem;
    }

    & > .navLinkContainerGroup:not(:last-child) {
        margin-bottom: 0.8rem;
    }

    & > .navLinkContainerGroup:last-child {
        margin-bottom: 0.2rem;
    }
`;