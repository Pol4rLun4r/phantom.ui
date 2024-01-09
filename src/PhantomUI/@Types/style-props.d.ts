import type { PhantomSize } from "./size";
import type { PhantomFontWeight } from "./typography";

export interface PhantomStyleProps {
    direction?: React.CSSProperties['flexDirection'];
    justify?: React.CSSProperties['justifyContent'];
    align?: React.CSSProperties['alignItems'];
    gap?: PhantomSize | (string & NonNullable<unknown>);

    width?: React.CSSProperties['width'];
    height?: React.CSSProperties['height'];

    maxWidth?: React.CSSProperties['maxWidth'];
    minWidth?: React.CSSProperties['minWidth'];
    maxHeight?: React.CSSProperties['maxHeight'];
    minHeight?: React.CSSProperties['minHeight'];

    marginTop?: React.CSSProperties['marginTop'];
    marginBottom?: React.CSSProperties['marginBottom'];
    marginLeft?: React.CSSProperties['marginLeft'];
    marginRight?: React.CSSProperties['marginRight'];
    margin?: React.CSSProperties['margin'];

    paddingTop?: PhantomSize | (string & NonNullable<unknown>);
    paddingBottom?: React.CSSProperties['paddingBottom'];
    paddingLeft?: React.CSSProperties['paddingLeft'];
    paddingRight?: React.CSSProperties['paddingRight'];
    padding?: React.CSSProperties['padding'];

    fontWeight?: PhantomFontWeight | number;
    textAlign?: React.CSSProperties['textAlign'];
    fontSize?: PhantomSize | number;
    letterSpacing?: React.CSSProperties['letterSpacing'];
    textTransform?: React.CSSProperties['textTransform'];

    position?: React.CSSProperties['position'];
    display?: React.CSSProperties['display'];
    top?: React.CSSProperties['top'];
    left?: React.CSSProperties['left'];
    bottom?: React.CSSProperties['bottom'];
    right?: React.CSSProperties['right'];
}