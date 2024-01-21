import type { PhantomSize } from "./types";
import type { PhantomFontWeight } from "./typography";

export interface PhantomStyleProps {
    direction?: React.CSSProperties['flexDirection'] | (string & NonNullable<unknown>);
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

    paddingTop?: PhantomSize | (string & NonNullable<unknown>) | React.CSSProperties['paddingTop'];
    paddingBottom?: PhantomSize | React.CSSProperties['paddingBottom'];
    paddingLeft?: PhantomSize | React.CSSProperties['paddingLeft'];
    paddingRight?: PhantomSize | React.CSSProperties['paddingRight'];
    padding?: React.CSSProperties['padding'];

    radius?: PhantomSize;

    fontWeight?: PhantomFontWeight | number | (string & NonNullable<unknown>);
    textAlign?: React.CSSProperties['textAlign'];
    fontSize?: PhantomSize | (string & NonNullable<unknown>);
    lineHeight?: (string & NonNullable<unknown>) | React.CSSProperties['lineHeight'];
    letterSpacing?: React.CSSProperties['letterSpacing'];
    textTransform?: React.CSSProperties['textTransform'];

    position?: React.CSSProperties['position'];
    display?: React.CSSProperties['display'];
    top?: React.CSSProperties['top'];
    left?: React.CSSProperties['left'];
    bottom?: React.CSSProperties['bottom'];
    right?: React.CSSProperties['right'];

    backgroundColor?: React.CSSProperties['backgroundColor'];
    color?: React.CSSProperties['color'];
}