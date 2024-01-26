// style
import BadgeStyle, { Dot } from "./style/Badge"

// type 
import type { BadgeProps } from "../../../@Types/props"

const Badge = (props: BadgeProps) => {
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