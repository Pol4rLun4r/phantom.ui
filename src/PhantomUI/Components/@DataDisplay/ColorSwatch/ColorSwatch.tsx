// style
import ColorSwatchStyle, { Background, BackgroundAlpha, Container } from "./style/ColorSwatch"

// type
import type { ColorSwatchProps } from "../../../@Types/props";
import { PhantomStyledComponentsProps } from "../../../@Types/types";

interface Props extends ColorSwatchProps, PhantomStyledComponentsProps { }

const ColorSwatch = (props: Props) => {
    return (
        <Container {...props}>
            <Background size={props.size} circle={props.circle}></Background>
            <BackgroundAlpha size={props.size} circle={props.circle}></BackgroundAlpha>
            <ColorSwatchStyle {...props}>
                {props.children}
            </ColorSwatchStyle>
        </Container>
    )
}

export default ColorSwatch