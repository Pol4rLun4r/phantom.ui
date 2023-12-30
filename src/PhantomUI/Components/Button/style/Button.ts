import styled, { css } from "styled-components";

// interface
import { IButton } from "../interface";

// colors
import { buttonBorder, buttonBackground } from "../../../Theme/Theme";
import themeColorSchema from "../../../Theme/ThemeHook";
const Size = () => {
    return css`
    font-size: ${({ $style }: IButton) =>
            $style?.size === 'xs' ? '12px' :
                $style?.size === 'sm' ? '14px' :
                    $style?.size === 'md' ? '16px' :
                        $style?.size === 'lg' ? '18px' :
                            $style?.size === 'xl' ? '20px' : `14px`};

    height: ${({ $style }: IButton) =>
            $style?.size === 'xs' ? '30px' :
                $style?.size === 'sm' ? '36px' :
                    $style?.size === 'md' ? '42px' :
                        $style?.size === 'lg' ? '50px' :
                            $style?.size === 'xl' ? '60px' : `36px`};

    padding: ${({ $style }: IButton) =>
            $style?.size === 'xs' ? '0px 14px' :
                $style?.size === 'sm' ? '0px 18px' :
                    $style?.size === 'md' ? '0px 22px' :
                        $style?.size === 'lg' ? '0px 26px' :
                            $style?.size === 'xl' ? '0px 32px' : `0px 18px`};
    `
}

const Radius = () => {
    return css`
    border-radius: ${({ $style }: IButton) =>
            $style?.size === 'xs' ? '2px' :
                $style?.size === 'sm' ? '4px' :
                    $style?.size === 'md' ? '8px' :
                        $style?.size === 'lg' ? '16px' :
                            $style?.size === 'xl' ? '32px' : `4px`}; 
    `
}

const DefaultConfig = () => {
    return css`
    font-weight: 600;
    appearance: none;
    border-style: none;
    `
}

const DefaultVariant = () => {
    return css`
    border: solid 1px;
    color: white;
    background-color: ${buttonBackground};
    border-color: ${buttonBorder};
    `
}

const DefaultFilled = () => {
    return css`
    color: white;
    background-color: ${themeColorSchema({ dark: 6, light: 6 })};
    `
}

const ButtonStyle = styled.button`
    ${DefaultConfig()}

    ${Radius()}
    ${Size()}

    // variants
    ${DefaultVariant()}
    /* ${DefaultFilled()} */
`

export default ButtonStyle;