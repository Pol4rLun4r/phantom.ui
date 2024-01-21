import styled, { css } from "styled-components";

// colors
import { bodyColorPrimary, bodyColorSecondary } from "../../../../../PhantomUI/Theme/Theme";

export interface IWave {
    topOrBottom?: 'top' | 'bottom'
    color?: 'primary' | 'secondary'
}

const Top = () => {
    return css`
    top: 0;
    left: 0;
    `
}

const Bottom = () => {
    return css`
    bottom: 0;
    left: 0;
    `
}

export const Wave = styled.div`
    position: absolute;
    ${({ topOrBottom }: IWave) => topOrBottom === 'bottom' ? Bottom() : Top()};
    width: 100%;
    overflow: hidden;
    line-height: 0;

    svg {
        position: relative;
        display: block;
        width: calc(145% + 1.3px);
        height: 42px;

        path {
            fill: ${({ color }: IWave) => color === 'secondary' ? bodyColorSecondary : bodyColorPrimary};
        }
    }
`;
