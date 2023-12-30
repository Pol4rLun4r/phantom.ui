// interface
import { ITitleProps } from "./Interface";

// styles
import { H1, H2, H3, H4, H5, H6 } from "./style/Title";

const Title = ({ children, order, marginBottom, marginLeft, marginMixed, marginRight, marginTop, size, textAlign, fontWeight}: ITitleProps) => {
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

    if (order == 2) return (<H2 $style={Style}>{children}</H2>)
    if (order == 3) return (<H3 $style={Style}>{children}</H3>)
    if (order == 4) return (<H4 $style={Style}>{children}</H4>)
    if (order == 5) return (<H5 $style={Style}>{children}</H5>)
    if (order == 6) return (<H6 $style={Style}>{children}</H6>)
    return (<H1 $style={Style}>{children}</H1>)
}

export default Title