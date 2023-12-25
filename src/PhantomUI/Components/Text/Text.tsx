// interface 
import { ITextProps } from "./Interface";

// style
import TextStyle from "./style/Text";

const Text = ({ children, marginBottom, marginTop, marginLeft, marginRight, marginMixed, fontWeight, size, textAlign }: ITextProps) => {
  const Style = {
    marginBottom,
    marginTop,
    marginLeft,
    marginRight,
    marginMixed,
    textAlign,
    fontWeight,
    size
  }

  return (
    <TextStyle $style={Style}>{children}</TextStyle>
  )
}

export default Text;