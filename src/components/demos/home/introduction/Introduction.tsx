// UI
import Title from "../../../../PhantomUI/Components/Title/Title";
import Text from "../../../../PhantomUI/Components/Text/Text";
import Stack from "../../../../PhantomUI/Components/Layout/Stack/Stack";
import Button from "../../../../PhantomUI/Components/Button/Button";
import Group from "../../../../PhantomUI/Components/Layout/Group/Group";

// styled
import IntroductionSection from "../style/introductionSection";

// components
import Features from "./Features";

// queries
import { useMediaQuery } from "react-responsive";
import { useResizeDetector } from "react-resize-detector";

// icons
import { IconBrandGithub } from "@tabler/icons-react";

// type
import { PhantomProps } from "../../../../PhantomUI/@Types/props";

const Introduction = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 60em)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const { ref, width } = useResizeDetector();

    function reSize() {
        // pega o tamanho do container e calcula junto ao tamanho da tela para definir o tamanho da fonte
        const size = width ? ((width / 100) / 1.4) : 5;
        return size;
    }

    const titleProps = { fontWeight: "black", lineHeight: 1, fontSize: `${reSize()}rem` };

    const groupProp: { grow: true } | object = !isTablet ? { grow: true } : {};

    const buttonProps: PhantomProps = { paddingLeft: '4rem', paddingRight: '3rem' };

    return (
        <IntroductionSection>
            <Stack padding={isMobile ? '3.75rem 1rem' : '13.75rem 1rem'} gap="xl" align="flex-start" ref={ref}>
                <Title marginBottom={isTablet ? '1.5rem' : '0rem'} {...titleProps}>
                    A
                    <Text as='span' variant="gradient" {...titleProps}> library of React  </Text>
                    components
                </Title>
                <Text fontSize="xl" textAlign="initial" maxWidth="50rem">
                    Build fully functional web applications in a simple way – Phantom must include numerous customizable components for your convenience and ease of work
                </Text>
                <Features />
                <Group width="100%" justify="flex-start" {...groupProp}>
                    <Button size="xl" variant="gradient" fontWeight={700} radius="md" {...buttonProps}>
                        {/* Get Started */}
                        Coming Soon
                    </Button>
                    <Button size="xl" variant="custom" backgroundColor="black" color="white" fontWeight={700} radius="md" {...buttonProps}
                        leftSection={<IconBrandGithub />}
                        as="a"
                        href="https://github.com/Pol4rLun4r/phantom.ui"
                        target="_ blank"
                    >
                        GitHub
                    </Button>
                </Group>
            </Stack>
        </IntroductionSection>
    )
}

export default Introduction;