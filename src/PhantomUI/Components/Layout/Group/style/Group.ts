import styled from "styled-components";

// interface
import { IGroup } from "../interface";

const GroupStyle = styled.div`
    // default
    display: flex;
    flex-direction: row;

    // variants de tamanho
    ${({ $style }: IGroup) => $style?.width ? `width: ${$style.width};` : undefined}
    ${({ $style }: IGroup) => $style?.height ? `height: ${$style.height};` : undefined}

    // variants de configuração
    align-items: ${({ $style }: IGroup) => $style?.align ? $style.align : 'flex-start'};

    justify-content: ${({ $style }: IGroup) => $style?.justify ? $style.justify : 'center'};

    gap: ${({ $style }: IGroup) =>
        $style?.gap === 'xs' ? '10px' :
            $style?.gap === 'sm' ? '12px' :
                $style?.gap === 'md' ? '16px' :
                    $style?.gap === 'lg' ? '20px' :
                        $style?.gap === 'xl' ? '32px' :
                            $style?.gap === 'no-space' ? '0px' : '16px'};


    & > * {
        ${({ $style }: IGroup) => $style?.grow ? 'flex-grow: 1;' : ''}
    }
`

export default GroupStyle;