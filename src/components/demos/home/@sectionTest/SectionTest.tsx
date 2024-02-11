// UI
import { Group, Stack } from "../../../../PhantomUI/Components/@Layout";
import { Title } from "../../../../PhantomUI/Components/@Typography";

// @TestUI 
import { ColorSwatch } from "../../../../PhantomUI/Components/@DataDisplay";
import { IconColorSwatch } from "@tabler/icons-react";

// styled
import Section from "../style/section";

const SectionTest = () => {
    return (
        <Section background="secondary">
            <Stack width="100%" gap="xl" paddingLeft="md" paddingRight="md" align="flex-start">
                <Title fontWeight="black" fontSize="2.225rem" textTransform="uppercase">Section Test</Title>
                {/* Test Area  */}
                <Group width="100%">
                    <ColorSwatch size="lg" radius='md' swatch="rgba(240, 24, 0, 0.2)" circle>
                        <IconColorSwatch/>
                    </ColorSwatch>
                </Group>
            </Stack>
        </Section>
    )
}

export default SectionTest;