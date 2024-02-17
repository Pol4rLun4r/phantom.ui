// UI
import { Group, Stack } from "../../../../PhantomUI/Components/@Layout";
import { Title } from "../../../../PhantomUI/Components/@Typography";

// styled
import Section from "../style/section";

// @TestUI
import FormTest from "./FormTest";

// components
// import WaveSplitter from "../waveSplitter/WaveSplitter";

const SectionTest = () => {
    return (
        <Section background="secondary">
            {/* <WaveSplitter color="secondary" /> */}
            <Stack width="100%" gap="xl" paddingLeft="md" paddingRight="md" align="flex-start">
                <Title fontWeight="black" fontSize="2.225rem" textTransform="uppercase">Section Test</Title>
                {/* Test Area  */}
                <Group width="100%">
                    <FormTest/>
                </Group>
            </Stack>
            {/* <WaveSplitter topOrBottom="bottom" color="secondary" /> */}
        </Section>
    )
};

export default SectionTest;