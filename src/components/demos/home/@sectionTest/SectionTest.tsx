// UI
import { Group, Stack } from "../../../../PhantomUI/Components/@Layout";
import { Title } from "../../../../PhantomUI/Components/@Typography";

// styled
import Section from "../style/section";

// @TestUI
import { TextInput } from "../../../../PhantomUI/Components/@Inputs";
import { IconAt } from "@tabler/icons-react";

// components
// import WaveSplitter from "../waveSplitter/WaveSplitter";

const SectionTest = () => {
    const icon = <IconAt style={{ width: '1rem', height: '1rem' }} />

    return (
        <Section background="secondary">
            {/* <WaveSplitter color="secondary" /> */}
            <Stack width="100%" gap="xl" paddingLeft="md" paddingRight="md" align="flex-start">
                <Title fontWeight="black" fontSize="2.225rem" textTransform="uppercase">Section Test</Title>
                {/* Test Area  */}
                <Group width="100%">
                    <TextInput
                        label="Your e-mail"
                        placeholder="write your email here"
                        leftSection={icon}
                        withAsterisk
                    />
                </Group>
            </Stack>
            {/* <WaveSplitter topOrBottom="bottom" color="secondary" /> */}
        </Section>
    )
};

export default SectionTest;