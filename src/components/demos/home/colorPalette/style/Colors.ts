import styled from "styled-components";
import { motion } from "framer-motion";

// sizes
import { $Radius } from "../../../../../PhantomUI/@Sizes/Radius";
import { $FontSize } from "../../../../../PhantomUI/@Sizes/Typography";

// type
interface IBox {
    background: string;
}

export const ColorBox = styled(motion.div)`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ background }: IBox) => background};
`

export const ColorContainer = styled.div`
    height: 100%;
    width: 100%;

    display: flex;

    div:first-child {
        border-top-left-radius: ${$Radius.md};
        border-bottom-left-radius: ${$Radius.md};
    }

    div:last-child {
        border-top-right-radius: ${$Radius.md};
        border-bottom-right-radius: ${$Radius.md};
    }

    ${ColorBox}:nth-last-child(-n + 5){
        color: white;
    }

    ${ColorBox}:nth-child(-n + 5){
        color: black;
    }
`

export const ColorInfo = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;

    text-transform: uppercase;
    font-weight: 600;

    span:last-child{
        font-size: calc(${$FontSize.sm} / 1.2);
    }

    @media (max-width: 768px) {
        display: none;
    }

`