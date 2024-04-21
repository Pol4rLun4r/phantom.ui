import styled from "styled-components";

// UI Style
import { NavLinkStyle } from "./NavLink";

// style
import Style from "../../../../Style/Style";

// colors
import { BackgroundGroup, FontColorGroup, BorderColorGroup } from "../../../../Theme/Themes/NavLink";

// sizes
import { $FontSize } from "../../../../@Sizes/Typography";
import { $Radius } from "../../../../@Sizes/Radius";

export const Container = styled.div`
    ${Style()};

    //default
    display: flex;
    flex-direction: column;
    gap: 0;
    
    opacity: ${({ disabled }: any) => disabled ? 0.4 : 1};
    pointer-events: ${({ disabled }: any) => disabled ? 'none' : ''};
    cursor: not-allowed;

    ${NavLinkStyle} {
        border-radius: 0;
        border-top-right-radius: ${$Radius.md};
        border-bottom-right-radius: ${$Radius.md};

        border-left-width: 0.063rem;
        border-left-style: solid;
    }
`;

export const LabelContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: ${BackgroundGroup};
    color: ${FontColorGroup};

    font-size: ${$FontSize.xs};

    height: 2.125rem;
    margin-bottom: 0.2rem;

    border-left: 0.063rem solid ${BorderColorGroup};
    padding-left: 0.5rem;

    border-top-right-radius: ${$Radius.md};
    border-bottom-right-radius: ${$Radius.md};

    &::before {
    content: "";
    position: absolute;
    bottom: -0.2rem;
    left: -0.050rem;
    height: .2rem;
    width: 100%;

    border-left: 0.063rem solid ${BorderColorGroup};
    }
`;

export const Label = styled.span`

`;


export const LeftSection = styled.div`
    display: flex;
    align-items: center;

    margin-right: 0.5rem;
`;