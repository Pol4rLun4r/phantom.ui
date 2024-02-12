// UI
import { Menu } from "../../../PhantomUI/Components/@Overlays"
import { ColorSwatch } from "../../../PhantomUI/Components/@DataDisplay"

// colors
import ColorSchema from "../../../PhantomUI/Theme/Colors"

// recoil state manage
import { useSetRecoilState } from "recoil"
import { colorSchemaMode } from "../../../hooks/recoil"

const SwitchColors = () => {
    const setColorSchema = useSetRecoilState(colorSchemaMode)

    return (
        <>
            {Object.keys(ColorSchema).map((schema, index) => {
                return (
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    <Menu.item key={schema} index={index} onClick={() => setColorSchema(schema)}
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        leftSection={<ColorSwatch size="sm" circle swatch={ColorSchema[schema][5]} />}
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