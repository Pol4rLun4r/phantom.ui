// types
import { TextProps } from "../../@Types/props";

// style
import { TextParagraph, TextSpan } from "./style/Text";

const Text = ({ children, component, marginBottom, marginTop, marginLeft, marginRight, margin, fontWeight, size, textAlign, variant, maxWidth }: TextProps) => {
  const Style = {
    marginBottom,
    marginTop,
    marginLeft,
    marginRight,
    margin,
    textAlign,
    fontWeight,
    variant,
    size,
    maxWidth
  }

  if (component == "span") return (<TextSpan {...Style}>{children}</TextSpan>)
  return (<TextParagraph {...Style}>{children}</TextParagraph>)
}

export default Text;