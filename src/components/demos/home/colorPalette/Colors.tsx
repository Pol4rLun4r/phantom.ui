//UI
import { Group, Stack } from "../../../../PhantomUI/Components/@Layout"
import { Title } from "../../../../PhantomUI/Components/@Typography"

// colors
import ColorSchema from "../../../../PhantomUI/Theme/Colors"

// recoil StateManage
import { colorSchemaMode } from "../../../../hooks/recoil"
import { useRecoilValue } from 'recoil'

// components
import { ColorBox, ColorContainer, ColorInfo } from "./style/Colors"

// queries
import { useResizeDetector } from "react-resize-detector"

const Colors = () => {
    const { ref, width } = useResizeDetector();
    const colorPalette = useRecoilValue(colorSchemaMode);

    function reSize() {
        const size = width! / 10;
        return `${size}px`
    }

    return (
        <Stack>
            <Title as="h2" fontWeight="bold">Colors</Title>
            <Group gap="0rem" height={reSize()} ref={ref}>
                <ColorContainer>
                    {ColorSchema[colorPalette].map((color, length) => {
                        return (
                            <ColorBox key={color} background={color}>
                                <ColorInfo>
                                    <span>{length}</span>
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