// UI
import { Stack } from "../../../../PhantomUI/Components/@Layout";
import { Title } from "../../../../PhantomUI/Components/@Typography";

// @TestUI 
import { Button } from "../../../../PhantomUI/Components/@Buttons";

// styled
import Section from "../style/section";

// Icons
import { IconBrand4chan, IconArrowRight } from "@tabler/icons-react";

const SectionTest = () => {
    return (
        <Section background="secondary">
            <Stack width="100%" gap="xl" paddingLeft="md" paddingRight="md" align="flex-start">
                <Title fontWeight="black" fontSize="2.225rem" textTransform="uppercase">Section Test</Title>
                <Button variant="gradient" gap="xs"
                    leftSection={<IconBrand4chan width={18}/>}
                    rightSection={<IconArrowRight width={18}/>}
                    >
                    Visit my WebSite
                </Button>
            </Stack>
        </Section>
    )
}

export default SectionTest;