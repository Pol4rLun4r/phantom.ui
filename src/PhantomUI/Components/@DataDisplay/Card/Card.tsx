// style
import CardStyle from "./style/Card"

// type
import type { CardProps } from "../../../@Types/props"
import type { PhantomStyledComponentsProps } from "../../../@Types/types"

// component
import CardSection from "./CardSection"

interface Props extends CardProps, PhantomStyledComponentsProps {}

const Card = (props: Props) => {
    return (
        <CardStyle {...props}>
            {props.children}
        </CardStyle>
    )
}

Card.Section = CardSection;

export default Card