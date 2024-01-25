// UI
import { Stack } from "../../../../PhantomUI/Components/@Layout";
import { Text, Title } from "../../../../PhantomUI/Components/@Typography";

// @TestUI 
import { Button } from "../../../../PhantomUI/Components/@Buttons";
import { Card, Image } from "../../../../PhantomUI/Components/@DataDisplay";

// styled
import Section from "../style/section";

// Icons
import { IconBrandAmazon, IconArrowRight } from "@tabler/icons-react";


const SectionTest = () => {
    return (
        <Section background="secondary">
            <Stack width="100%" gap="xl" paddingLeft="md" paddingRight="md" align="flex-start">
                <Title fontWeight="black" fontSize="2.225rem" textTransform="uppercase">Section Test</Title>
                <Button.Group radius="md">
                    <Button gap="xs"
                        leftSection={<IconBrandAmazon width={18} />}
                        rightSection={<IconArrowRight width={18} />}
                    >
                        Visit my WebSite
                    </Button>
                    <Button gap="xs"
                        leftSection={<IconBrandAmazon width={18} />}
                        rightSection={<IconArrowRight width={18} />}
                    >
                        do not visit my website
                    </Button>
                    <Button gap="xs"
                        leftSection={<IconBrandAmazon width={18} />}
                        rightSection={<IconArrowRight width={18} />}
                    >
                        Visit my WebSite
                    </Button>
                </Button.Group>
                <Card gap="xs" radius="lg" padding="md" withBorder>
                    <Card.Section padding="lg" withBorder>
                        <Title fontWeight="bold">Hello</Title>
                    </Card.Section>
                    <Text fontSize="sm" variant="description">
                        Por favor, clique em qualquer lugar neste cartão para reivindicar sua recompensa, isso não é uma fraude, confie em nós
                    </Text>
                    <Card.Section>
                        <Image
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"
                            objectFit="cover"
                        />
                    </Card.Section>
                </Card>
            </Stack>
        </Section>
    )
}

export default SectionTest;