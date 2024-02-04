// style
import BadgeStyle, { Dot } from "./style/Badge"

// type 
import type { BadgeProps } from "../../../@Types/props"
import type { PhantomStyledComponentsProps } from "../../../@Types/types";

interface Props extends BadgeProps, PhantomStyledComponentsProps {}

const Badge = (props: Props) => {
  return (
    <BadgeStyle {...props}>
      {props.leftSection}
      {props.variant === 'dot' &&
        <Dot/>
      }
      {props.children}
      {props.rightSection}
    </BadgeStyle>
  )
}

export default Badge;