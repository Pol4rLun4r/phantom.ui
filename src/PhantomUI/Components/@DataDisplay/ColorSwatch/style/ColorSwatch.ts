import styled from "styled-components";
import { motion } from "framer-motion";

// style
import Style from "../../../../Style/Style";

// type
import type { ColorSwatchProps } from "../../../../@Types/props";

// settings
import Size from "./Size";

const ColorSwatchStyle = styled(motion.span) <ColorSwatchProps>`
    ${Style()}
    ${Size()}

    // default
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 3;
    
    border-style: none;

    // settings
    ${({ swatch }) => swatch ? `background-color: ${swatch};` : 'background-color: gray;'}
    ${({ circle }) => circle ? `border-radius: 100%;` : ''}
`;

export const Container = styled(motion.div)`
    ${Style()}
    ${Size()}

    //default
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0;
    position: relative;
`;

export const Background = styled(motion.span)`
    ${Style()}
    ${Size()}

    //default
    background-color: rgb(255 255 255 / 40%);
    position: absolute;
    z-index: 2;

    // settings
    ${({ circle }) => circle ? `border-radius: 100%;` : ''}
`;

const alphaColor = '#424242';
const alphaColorBackground = '#242424';
export const BackgroundAlpha = styled(motion.span)`
    ${Style()}
    ${Size()}

    // default
    background-image: linear-gradient(45deg,${alphaColor} 25%,transparent 25%),linear-gradient(-45deg,${alphaColor} 25%,transparent 25%),linear-gradient(45deg,transparent 75%,${alphaColor} 75%),linear-gradient(-45deg,${alphaColorBackground} 75%,${alphaColor} 75%);
    background-position: 0 0,0 .25rem, .25rem -.25rem, -.25rem 0;
    background-size: .5rem .5rem;
    position: absolute;
    z-index: 1;

    // settings
    ${({ circle }) => circle ? `border-radius: 100%;` : ''} 
`;

export default ColorSwatchStyle;