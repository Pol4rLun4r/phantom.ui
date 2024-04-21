import styled from "styled-components";

// size
import { $Spacing } from "../../../PhantomUI/@Sizes/Spacings";

const Section = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-left: calc(${$Spacing.xl} * 2) ;
  padding-right: calc(${$Spacing.xl} * 2);

  @media (max-width: 67.5em) {
    padding-left: ${$Spacing.xl};
    padding-right: ${$Spacing.xl};
  }
`

export default Section;