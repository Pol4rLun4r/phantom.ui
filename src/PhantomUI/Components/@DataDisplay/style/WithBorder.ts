import { css } from "styled-components";

// color
import { buttonBorder } from "../../../Theme/Theme";

export const WithBorder = () => {
    return css`
        border: solid 1px ${buttonBorder};
    `;
};
