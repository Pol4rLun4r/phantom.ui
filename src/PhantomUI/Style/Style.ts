import { css } from "styled-components";

// type
import type { PhantomStyleProps } from "../@Types/style-props";

// settings
import { FontSize, FontWeight } from "./typography/Typography.style";
import { Gap } from "./size/Gap.style";
import { Padding } from "./size/Padding.style";

const Style = () => {
    return css`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    flex-direction: ${({ direction }: PhantomStyleProps) => direction};
    justify-content: ${({ justify }: PhantomStyleProps) => justify};
    align-items: ${({ align }: PhantomStyleProps) => align};
    ${Gap()};

    width: ${({ width }: PhantomStyleProps) => width};
    height: ${({ height }: PhantomStyleProps) => height};
    
    max-width: ${({ maxWidth }: PhantomStyleProps) => maxWidth};
    min-width: ${({ minWidth }: PhantomStyleProps) => minWidth};
    max-height: ${({ maxHeight }: PhantomStyleProps) => maxHeight};
    min-height: ${({ minHeight }: PhantomStyleProps) => minHeight};

    margin-top: ${({ marginTop }: PhantomStyleProps) => marginTop};
    margin-bottom: ${({ marginBottom }: PhantomStyleProps) => marginBottom};
    margin-left: ${({ marginLeft }: PhantomStyleProps) => marginLeft};
    margin-right: ${({ marginRight }: PhantomStyleProps) => marginRight};
    margin: ${({ margin }: PhantomStyleProps) => margin};

    ${Padding()}

    ${FontWeight()};
    text-align: ${({ textAlign }: PhantomStyleProps) => textAlign};
    ${FontSize()};
    letter-spacing: ${({ letterSpacing }: PhantomStyleProps) => letterSpacing};
    text-transform: ${({ textTransform }: PhantomStyleProps) => textTransform};

    position: ${({ position }: PhantomStyleProps) => position};
    display: ${({ display }: PhantomStyleProps) => display};
    top: ${({ top }: PhantomStyleProps) => top};
    left: ${({ left }: PhantomStyleProps) => left};
    bottom: ${({ bottom }: PhantomStyleProps) => bottom};
    bottom: ${({ right }: PhantomStyleProps) => right};
`;
};

export default Style;