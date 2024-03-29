// UI
import { Stack } from "../../../../PhantomUI/Components/@Layout";
import { Title, Text } from "../../../../PhantomUI/Components/@Typography";
import { Anchor } from "../../../../PhantomUI/Components/@Navigation";

// styled
import Section from "../style/section";

// components
import WaveSplitter from "../waveSplitter/WaveSplitter";
import Colors from "./Colors";
import Preview from "./Preview";

const ColorPalette = () => {
    return (
        <Section>
            <WaveSplitter color="secondary" />
            <Stack width="100%" gap="xl" paddingLeft="md" paddingRight="md">
                <Title fontWeight="black" fontSize="2.225rem" textTransform="uppercase">Color Palette</Title>
                <Text fontWeight="regular" fontSize="lg" >
                    Phantom uses <Anchor href="https://yeun.github.io/open-color/" target="_blank">open-color</Anchor> as the basis for its color palette, as does <Anchor href="https://mantine.dev/" target="_blank">Mantine</Anchor>, where each color has 10 shades, from the lightest to the darkest.
                </Text>
                <Colors />
                <Preview/>
            </Stack>
            <WaveSplitter topOrBottom="bottom" color="secondary" />
        </Section>
    )
}

export default ColorPalette;