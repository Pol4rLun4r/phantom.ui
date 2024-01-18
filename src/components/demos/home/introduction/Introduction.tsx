// UI
import Title from "../../../../PhantomUI/Components/Title/Title";
import Text from "../../../../PhantomUI/Components/Text/Text";
import Stack from "../../../../PhantomUI/Components/Layout/Stack/Stack";

// styled
import Section from "../style/section";

// components
import Features from "./Features";

// queries
import { useMediaQuery } from "react-responsive";
import { useResizeDetector } from "react-resize-detector";

const Introduction = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 60em)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const { ref, width } = useResizeDetector();

    function reSize() {
        // pega o tamanho do container e calcula junto ao tamanho da tela para definir o tamanho da fonte
        const size = width ? ((width / 100) / 1.4) : 5;
        return size;
    }

    const titleProps = { fontWeight: "black", lineHeight: 1, fontSize: `${reSize()}rem` }

    return (
        <Section>
            <Stack padding={isMobile ? '3.75rem 1rem' : '13.75rem 1rem'} gap="xl" align="flex-start" ref={ref}>
                <Title marginBottom={isTablet ? '1.5rem' : '0rem'} {...titleProps}>
                    A
                    <Text as='span' variant="gradient" {...titleProps}> library of React  </Text>
                    components
                </Title>
                <Text fontSize="xl" textAlign="initial" maxWidth="50rem">
                    {/* This is the start of a new project, a minimalist UI, based on Mantine UI, this project will include several interface components, made with Styled-Components, for more, see my GitHub. */}
                    Build fully functional web applications in a simple way – Phantom must include numerous customizable components for your convenience and ease of work
                </Text>
                <Features />
            </Stack>
        </Section>
    )
}

export default Introduction;