import styled, { css } from "styled-components";

// theme
import { titleColor } from "../../../Theme/Theme";

// interface
import { ITitle } from "../Interface";

const Style = () => {
    return css`
    color: ${titleColor};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: ${({ $style }: ITitle) => $style!.size};

    margin-top: ${({ $style }: ITitle) => $style!.marginTop};
    margin-bottom: ${({ $style }: ITitle) => $style!.marginBottom};
    margin-left: ${({ $style }: ITitle) => $style!.marginLeft};
    margin-right: ${({ $style }: ITitle) => $style!.marginRight};
    margin: ${({ $style }: ITitle) => $style!.marginMixed};

    line-height: ${({ $style }: ITitle) => $style!.size};

    text-align: ${({ $style }: ITitle) => $style!.textAlign};

    font-weight: ${({ $style }: ITitle) =>
            $style!.fontWeight === "black" ? 900 :
                $style!.fontWeight === "bold" ? 700 :
                    $style!.fontWeight === "semiBold" ? 600 :
                        $style!.fontWeight === "regular" ? 400 :
                            $style!.fontWeight === "semiLight" ? 350 :
                                $style!.fontWeight === "light" ? 300 : 900};

`
}

const H1 = styled.h1`${Style()};`

const H2 = styled.h2`${Style()};`

const H3 = styled.h3`${Style()};`

const H4 = styled.h4`${Style()};`

const H5 = styled.h5`${Style()};`

const H6 = styled.h6`${Style()};`

export { H1, H2, H3, H4, H5, H6 }
