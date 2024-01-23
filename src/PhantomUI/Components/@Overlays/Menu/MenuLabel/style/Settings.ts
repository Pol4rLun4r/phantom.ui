import { css } from "styled-components";

// sizes
import { $Heights, $Paddings } from "../../../../../@Sizes/Buttons";
import { $FontSize } from "../../../../../@Sizes/Typography";

// colors
import { fontMenuLabel } from "../../../../../Theme/Theme";

export const Size = () => {
    return css`
    font-size: ${$FontSize.xs};

    height: calc( ${$Heights.xs} / 1.2);

    padding: ${$Paddings.xs};
    `;
};

export const DefaultSetting = () => {
    return css`
    appearance: none;
    border-style: none;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    background-color: transparent;
    color: ${fontMenuLabel};
    `;
};

