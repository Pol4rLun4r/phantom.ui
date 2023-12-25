import styled, { css } from "styled-components";

// interface
import { IText } from "../Interface"

const Style = () => {
    return css`
    color: #828282;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: ${({ $style }: IText) => $style!.size ? $style!.size : '18px'};

    margin-top: ${({ $style }: IText) => $style!.marginTop};
    margin-bottom: ${({ $style }: IText) => $style!.marginBottom};
    margin-left: ${({ $style }: IText) => $style!.marginLeft};
    margin-right: ${({ $style }: IText) => $style!.marginRight};
    margin: ${({ $style }: IText) => $style!.marginMixed};

    text-align: ${({ $style }: IText) => $style!.textAlign};

    line-height: 29px;

    font-weight: ${({ $style }: IText) =>
            $style!.fontWeight === "black" ? 900 :
                $style!.fontWeight === "bold" ? 700 :
                    $style!.fontWeight === "semiBold" ? 600 :
                        $style!.fontWeight === "regular" ? 400 :
                            $style!.fontWeight === "semiLight" ? 350 :
                                $style!.fontWeight === "light" ? 300 : 400};
`
}

const TextStyle = styled.p`
    ${Style()}
`

export default TextStyle;