import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// style
import Style from "../../../../Style/Style";
import Variants from "./Variants";

// size
import { Size, LabelSize, DescriptionSize, SectionSize } from "./Size";

// colors
import { inputDescriptionColor, inputIconColor, inputColorError } from "../../../../Theme/Themes/Inputs";

// type
import type { InputsProps } from "../../../../@Types/props";

export const InputWrapper = styled(motion.div) <InputsProps>`
    //default
    position: relative;

    //settings
    ${({ description }) => description ? 'margin-top: 5px;' : 'margin-top: 3px;'}
`;

export const Input = styled(motion.input).attrs({ type: "text" })`
    ${Style()}

    // settings
    ${Size()}
`;

export const Container = styled(motion.div)<InputsProps>`
    //settings
    ${Variants()}
`;

export const Label = styled(motion.label)`
    // default
    font-weight: 500;

    // settings
    ${LabelSize()}
`;

export const Asterisk = styled(motion.span)`
    color: ${inputColorError};
`;

export const Description = styled(motion.p)`
    // settings
    ${DescriptionSize()}

    //default 
    color: ${inputDescriptionColor};
`;

const Section = (error: boolean | undefined) => {
    return css`
    // default
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;

    // settings
    color: ${error ? inputColorError : inputIconColor};
    ${SectionSize}
    `
}

export const RightSection = styled(motion.div) <InputsProps>`
    // default
    ${({ error }) => Section(error)}
    ${({ disabled }) => disabled ? 'opacity: .6;' : ''}
    right: 0;
    z-index: 2;
`;

export const LeftSection = styled(motion.div) <InputsProps>`
    // default
    ${({ error }) => Section(error)}
    ${({ disabled }) => disabled ? 'opacity: .6;' : ''}
    left: 0;
    z-index: 2;
`;