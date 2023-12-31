// style
import ButtonStyle from "./style/Button"

// interface
import { IButtonProps } from "./interface"

const ActionIcon = ({ children, variant, radius, size, onClick }: IButtonProps) => {
    const Style = {
        variant,
        radius,
        size,
        onClick
    }

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <ButtonStyle $style={Style} onClick={() => onClick()}>
            {children}
        </ButtonStyle>
    )
}

export default ActionIcon;