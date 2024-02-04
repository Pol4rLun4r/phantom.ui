// style
import { CardSectionStyle } from "./style/Card"

// type
import type { CardProps } from "../../../@Types/props"
import type { PhantomStyledComponentsProps } from "../../../@Types/types"

interface Props extends CardProps, PhantomStyledComponentsProps {}

const CardSection = (props: Props) => {

  return (
    <CardSectionStyle {...props}>
        {props.children}
    </CardSectionStyle>
  )
}

export default CardSection