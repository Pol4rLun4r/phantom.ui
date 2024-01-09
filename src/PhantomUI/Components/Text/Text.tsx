// type
import { TextProps } from "../../@Types/props";

// style
import { TextParagraph, TextSpan } from "./style/Text";

const Text = ({
  // settings props
  children,
  component,

  // props
  direction, justify, align, gap, width, height, maxWidth, minWidth, maxHeight, minHeight, marginTop, marginBottom, marginLeft, marginRight, margin, paddingTop, paddingBottom, paddingLeft, paddingRight, padding, fontWeight, textAlign, fontSize, letterSpacing, textTransform, position, display, top, left, bottom, right
}: TextProps) => {
  const Style = {
    direction, justify, align, gap, width, height, maxWidth, minWidth, maxHeight, minHeight, marginTop, marginBottom, marginLeft, marginRight, margin, paddingTop, paddingBottom, paddingLeft, paddingRight, padding, fontWeight, textAlign, fontSize, letterSpacing, textTransform, position, display, top, left, bottom, right
  }

  if (component == "span") return (<TextSpan {...Style}>{children}</TextSpan>)
  return (<TextParagraph {...Style}>{children}</TextParagraph>)
}

export default Text;