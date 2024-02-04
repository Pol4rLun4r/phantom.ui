import { useLayer, useHover, Arrow } from "react-laag"

// type
import type { TooltipProps } from "../../../@Types/props"
import type { PhantomStyledComponentsProps } from "../../../@Types/types";

// style
import TooltipStyle from "./style/Tooltip";

// motion
import { AnimatePresence } from "framer-motion";

interface Props extends TooltipProps, PhantomStyledComponentsProps {}

const Tooltip = (props: Props) => {

    const [isOver, hoverProps] = useHover({ delayEnter: 100, delayLeave: 200 });

    const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
        isOpen: isOver,
        auto: true,
        triggerOffset: props.withArrow ? 14 : 8,
    });

    return (
        <>
            <span {...triggerProps} {...hoverProps}>
                {props.children}
            </span>
            {renderLayer(
                <AnimatePresence>
                    {isOver && (
                        <TooltipStyle {...layerProps} {...props}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.1 }}
                        >
                            {props.label}
                            {props.withArrow && (
                                <Arrow
                                    id="tooltip"
                                    {...arrowProps}
                                    borderWidth={1}
                                    size={6}
                                />
                            )}
                        </TooltipStyle>
                    )}
                </AnimatePresence>
            )}
        </>
    )
}

export default Tooltip;