import styled from "styled-components";

// style
import Style from "../../../Style/Style";

// type
import type { ImageProps } from "../../../@Types/props";

// settings
import { WithBorder } from "../style/WithBorder";

const Image = styled.img<ImageProps>`
    ${Style()}

    object-fit: ${({ objectFit }) => objectFit};
    ${({ withBorder }) => withBorder ? WithBorder() : ''}
`;

export default Image;