// style
import CardStyle from "./style/Card"

// type
import type { CardProps } from "../../../@Types/props"

// component
import CardSection from "./CardSection"

const Card = (props: CardProps) => {
    return (
        <CardStyle {...props}>
            {props.children}
        </CardStyle>
    )
}

Card.Section = CardSection;

export default Card