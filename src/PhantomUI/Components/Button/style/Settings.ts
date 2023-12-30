import { css } from "styled-components";

// interface
import { IButton } from "../interface";

export const Size = () => {
    return css`
    font-size: ${({ $style }: IButton) => $style?.size === 'xs' ? '12px' :
            $style?.size === 'sm' ? '14px' :
                $style?.size === 'md' ? '16px' :
                    $style?.size === 'lg' ? '18px' :
                        $style?.size === 'xl' ? '20px' : `14px`};

    height: ${({ $style }: IButton) => $style?.size === 'xs' ? '30px' :
            $style?.size === 'sm' ? '36px' :
                $style?.size === 'md' ? '42px' :
                    $style?.size === 'lg' ? '50px' :
                        $style?.size === 'xl' ? '60px' : `36px`};

    padding: ${({ $style }: IButton) => $style?.size === 'xs' ? '0px 14px' :
            $style?.size === 'sm' ? '0px 18px' :
                $style?.size === 'md' ? '0px 22px' :
                    $style?.size === 'lg' ? '0px 26px' :
                        $style?.size === 'xl' ? '0px 32px' : `0px 18px`};
    `;
};

export const Radius = () => {
    return css`
    border-radius: ${({ $style }: IButton) => $style?.radius === 'xs' ? '2px' :
            $style?.radius === 'sm' ? '4px' :
                $style?.radius === 'md' ? '8px' :
                    $style?.radius === 'lg' ? '16px' :
                        $style?.radius === 'xl' ? '32px' : `4px`}; 
    `;
};

export const DefaultSetting = () => {
    return css`
    font-weight: 600;
    appearance: none;
    border-style: none;
    `;
};

