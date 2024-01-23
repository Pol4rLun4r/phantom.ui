import styled from "styled-components";

// colors
import { borderMenu, bodyMenu } from "../../../../Theme/Theme";
import { $Radius } from "../../../../@Sizes/Radius";

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 10.813rem;

    background-color: ${bodyMenu};

    border: solid 1px ${borderMenu};
    border-radius: ${$Radius.sm};

    padding: 0.25rem;
`