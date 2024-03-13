import styled from "styled-components";

//UI
import { Stack } from "../../../PhantomUI/Components/@Layout";

// color
import { bodyColorSecondary } from "../../../PhantomUI/Theme/Theme";

const Section = styled.div`
    position: relative;

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    background-color: ${bodyColorSecondary};

    & ${Stack} {
        max-width: 60rem;
    }
`

export default Section;