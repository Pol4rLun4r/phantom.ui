// style
import ColorSwatchStyle, { Background, BackgroundAlpha, Container } from "./style/ColorSwatch"

// type
import type { ColorSwatchProps } from "../../../@Types/props";
import { PhantomStyledComponentsProps } from "../../../@Types/types";

interface Props extends ColorSwatchProps, PhantomStyledComponentsProps { }

const ColorSwatch = (props: Props) => {
    return (
        <Container>
            <Background {...props}/>
            <BackgroundAlpha {...props}/>
            <ColorSwatchStyle {...props}>
                {props.children}
            </ColorSwatchStyle>
        </Container>
    )
}

export default ColorSwatch