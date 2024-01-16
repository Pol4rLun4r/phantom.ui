// UI
import ActionIcon from "../../../PhantomUI/Components/ActionIcon/ActionIcon"
import Menu from "../../../PhantomUI/Components/Menu/Menu"

// colors
import ColorSchema from "../../../PhantomUI/Theme/Colors"

// recoil state manage
import { useSetRecoilState } from "recoil"
import { colorSchemaMode } from "../../../hooks/recoil"

const SwitchColors = () => {
    const setColorSchema = useSetRecoilState(colorSchemaMode)

    return (
        <>
            {Object.keys(ColorSchema).map((schema) => {
                return (
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    <Menu.item key={schema} onClick={() => setColorSchema(schema)}
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        leftSection={<ActionIcon as="div" size="sm" radius="lg" variant="custom" backgroundColor={ColorSchema[schema][5]} />}
                    >
                        {schema}
                    </Menu.item >
                )
            }

            )}
        </>
    )
}

export default SwitchColors