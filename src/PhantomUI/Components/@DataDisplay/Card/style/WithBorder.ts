import { css } from "styled-components";

// color
import { buttonBorder } from "../../../../Theme/Theme";

export const BorderChild = () => {
    return css`
    border-bottom: solid 1px ${buttonBorder};
    border-top: solid 1px ${buttonBorder};
`;
}

export const BorderFirstChild = () => {
    return css`
        border-bottom: solid 1px ${buttonBorder};
    `;
};

export const BorderLastChild = () => {
    return css`
        border-top: solid 1px ${buttonBorder};
    `;
};
