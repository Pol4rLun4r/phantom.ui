//UI
import { Group, Stack } from "../../../../PhantomUI/Components/@Layout"
import { Title } from "../../../../PhantomUI/Components/@Typography"

// colors
import ColorSchema from "../../../../PhantomUI/Theme/ColorPalette"

// recoil StateManage
import { colorSchemaMode } from "../../../../hooks/recoil"
import { useRecoilValue } from 'recoil'

// components
import { ColorBox, ColorContainer, ColorInfo } from "./style/Colors"

// queries
import { useResizeDetector } from "react-resize-detector"

// motion
import { Variants } from "framer-motion"

const colorBoxVariants: Variants = {
    initial: {
        scale: 0
    },
    animate: (index: number) => ({
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            delay: 0.1 * index,
        }
    })
}

const Colors = () => {
    const { ref, width } = useResizeDetector();
    const colorPalette = useRecoilValue(colorSchemaMode);

    function reSize() {
        const size = width! / 10;
        return `${size}px`
    }

    return (
        <Stack>
            <Title as="div" fontWeight="bold">Colors</Title>
            <Group gap="0rem" height={reSize()} ref={ref}>
                <ColorContainer>
                    {ColorSchema[colorPalette].map((color, index) => {
                        return (
                            <ColorBox key={color} background={color}
                                variants={colorBoxVariants}
                                initial="initial"
                                whileInView="animate"
                                custom={index}
                            >
                                <ColorInfo>
                                    <span>{index}</span>
                                    <span>{color}</span>
                                </ColorInfo>
                            </ColorBox>
                        )
                    })}
                </ColorContainer>
            </Group>
        </Stack>
    )
}

export default Colors