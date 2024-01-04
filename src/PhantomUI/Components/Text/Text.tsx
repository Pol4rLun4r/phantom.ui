// interface 
import { ITextProps } from "./Interface";

// style
import { TextParagraph, TextSpan } from "./style/Text";

const Text = ({ children, component, marginBottom, marginTop, marginLeft, marginRight, marginMixed, fontWeight, size, textAlign, variant, maxWidth }: ITextProps) => {
  const Style = {
    marginBottom,
    marginTop,
    marginLeft,
    marginRight,
    marginMixed,
    textAlign,
    fontWeight,
    variant,
    size,
    maxWidth
  }

  if (component == "span") return (<TextSpan $style={Style}>{children}</TextSpan>)
  return (<TextParagraph $style={Style}>{children}</TextParagraph>)
}

export default Text;