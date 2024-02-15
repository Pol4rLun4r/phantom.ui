import { css } from "styled-components";

// type
import type { InputsProps } from "../../../../@Types/props";

// component
import { Input } from "./TextInput";

// colors
import themeColorSchema from "../../../../hook/ThemeHook";
import { inputValueColor, inputBackgroundDefault, inputBackgroundFilled, inputBorder, inputBackgroundDisabled, inputColorDisabled, inputFocusBorder, inputBorderDisabled, inputColorError } from "../../../../Theme/Themes/Inputs";

const DefaultVariant = (error: boolean | undefined) => {
    return css`
    ${Input} {
        border: solid 1px;
        color: ${error ? inputColorError : inputValueColor};
        background-color: ${inputBackgroundDefault};
        border-color: ${error ? inputColorError : inputBorder};

        &:focus {
            border: 1px solid ${error ? inputColorError : themeColorSchema(inputFocusBorder)};
            outline: none;
            transition: border 100ms;
        }

        &::placeholder{
            color: ${error ? inputColorError : ''};
        }
    }
    `;
};

const FilledVariant = (error: boolean | undefined) => {
    return css`
    ${Input}{
        border: solid 1px;
        color: ${error ? inputColorError : inputValueColor};
        background-color: ${inputBackgroundFilled};
        border-color: ${inputBackgroundFilled};
    
        &:focus {
            border: 1px solid ${error ? inputColorError : themeColorSchema(inputFocusBorder)};
            outline: none;
            transition: border 100ms;
        }

        &::placeholder{
            color: ${error ? inputColorError : ''};
        }
    }
    `;
};

const inputDisabled = () => {
    return css`
    ${Input}{
        border: solid 1px;
        background-color: ${inputBackgroundDisabled};
        color: ${inputColorDisabled};
        border-color: ${inputBorderDisabled};
        opacity: .6;
        cursor: not-allowed;  
    
        &::placeholder{
            color: ${inputColorDisabled};
        }
    }
    `;
};


const Variants = () => {
    return css`
    ${({ variant, disabled, error }: InputsProps) =>
            disabled ? inputDisabled() :
                    variant === 'default' ? DefaultVariant(error) :
                        variant === 'filled' ? FilledVariant(error) : DefaultVariant(error)};
`;
}

export default Variants;