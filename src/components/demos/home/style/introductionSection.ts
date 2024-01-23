import styled from "styled-components";

//UI
import { Stack } from "../../../../PhantomUI/Components/@Layout";

// color
import { bodyColorSecondary } from "../../../../PhantomUI/Theme/Theme";

const IntroductionSection = styled.div`
    position: relative;

    width: 100%;
    display: flex;
    justify-content: center;

    background-color: ${bodyColorSecondary};

    & ${Stack} {
        max-width: 60rem;
    }
`

export default IntroductionSection;