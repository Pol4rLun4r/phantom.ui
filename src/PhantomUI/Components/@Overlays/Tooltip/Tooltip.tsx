import { useLayer, useHover, Arrow } from "react-laag"

// type
import type { TooltipProps } from "../../../@Types/props"

// style
import TooltipStyle from "./style/Tooltip";

const Tooltip = (props: TooltipProps) => {

    const [isOver, hoverProps] = useHover({ delayEnter: 100, delayLeave: 300 });

    const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
        isOpen: isOver,
        placement: "top-center",
        triggerOffset: props.withArrow ? 14 : 8,
    });

    return (   
        <>
            <span {...triggerProps} {...hoverProps}>
                {props.children}
            </span>
            {renderLayer(
                isOver && (
                    <TooltipStyle {...layerProps} {...props}>
                        {props.label}
                        <Arrow
                            id="tooltip"
                            {...arrowProps}
                            borderWidth={1}
                            size={6}
                        />
                    </TooltipStyle>
                )
            )}
        </>
    )
}

export default Tooltip