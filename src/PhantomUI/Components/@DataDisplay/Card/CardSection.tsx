// style
import { CardSectionStyle } from "./style/Card"

// type
import type { CardProps } from "../../../@Types/props"

const CardSection = (props: CardProps) => {
  return (
    <CardSectionStyle {...props}>
        {props.children}
    </CardSectionStyle>
  )
}

export default CardSection