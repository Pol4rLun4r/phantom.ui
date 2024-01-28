// UI
import { Group, Stack } from "../../../../PhantomUI/Components/@Layout";
import { Title } from "../../../../PhantomUI/Components/@Typography";

// @TestUI 
import { Badge } from "../../../../PhantomUI/Components/@DataDisplay";
import { Tooltip } from "../../../../PhantomUI/Components/@Overlays";

// styled
import Section from "../style/section";

// Icons

const SectionTest = () => {
    return (
        <Section background="secondary">
            <Stack width="100%" gap="xl" paddingLeft="md" paddingRight="md" align="flex-start">
                <Title fontWeight="black" fontSize="2.225rem" textTransform="uppercase">Section Test</Title>
                {/* Test Area  */}
                <Group width="100%">
                    <Tooltip label="tooltip" withArrow>
                        <Badge variant="dot" radius="lg" size="lg">Loading...</Badge>
                    </Tooltip>
                </Group>
            </Stack>
        </Section>
    )
}

export default SectionTest;