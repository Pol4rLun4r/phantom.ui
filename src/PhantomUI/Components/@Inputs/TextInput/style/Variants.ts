import { css } from "styled-components";

import type { InputsProps } from "../../../../@Types/props";

// colors
import themeColorSchema from "../../../../hook/ThemeHook";
import { inputValueColor, inputBackgroundDefault, inputBackgroundFilled, inputBorder, inputBackgroundDisabled, inputColorDisabled, inputFocusBorder, inputBorderDisabled } from "../../../../Theme/Themes/Inputs";

const DefaultVariant = () => {
    return css`
    border: solid 1px;
    color: ${inputValueColor};
    background-color: ${inputBackgroundDefault};
    border-color: ${inputBorder};

    &:focus {
        border: 1px solid ${themeColorSchema(inputFocusBorder)};
        outline: none;
        transition: border 100ms;
    }
    `;
};

const FilledVariant = () => {
    return css`
    border: solid 1px;
    color: ${inputValueColor};
    background-color: ${inputBackgroundFilled};
    border-color: ${inputBackgroundFilled};

    &:focus {
        border: 1px solid ${themeColorSchema(inputFocusBorder)};
        outline: none;
        transition: border 100ms;
    }
    `;
};

const inputDisabled = () => {
    return css`
    border: solid 1px;
    background-color: ${inputBackgroundDisabled};
    color: ${inputColorDisabled};
    border-color: ${inputBorderDisabled};
    opacity: .6;
    cursor: not-allowed;  

    &::placeholder{
        color: ${inputColorDisabled};
    }

    `;
};

const Variants = () => {
    return css`
    ${({ variant, disabled }: InputsProps) =>
            disabled ? inputDisabled() :
                variant === 'default' ? DefaultVariant() :
                    variant === 'filled' ? FilledVariant() : DefaultVariant()};
`;
}

export default Variants;