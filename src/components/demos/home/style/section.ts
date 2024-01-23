import styled from "styled-components";

//UI
import { Stack, Group } from "../../../../PhantomUI/Components/@Layout";

// colors
import { bodyColorPrimarySection, bodyColorSecondary } from "../../../../PhantomUI/Theme/Theme";

interface ISection {
    background?: 'primary' | 'secondary'
}

const Section = styled.div`
    position: relative;

    width: 100%;
    display: flex;
    justify-content: center;

    background-color: ${({ background }: ISection) => background === 'secondary' ? bodyColorSecondary : bodyColorPrimarySection};

    padding:7.5rem 0rem;

    & ${Stack} {
        max-width: 60rem;
    }

    & ${Group} {
        max-width: 60rem;
    }
`

export default Section;