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
        const size = width ? ((width / 100) / 1.4) : '5';
        return `${size}rem`
    }

    return (
        <Section>
            <Stack paddingMixed={isMobile ? '3.75rem 1rem' : '13.75rem 1rem'} gap="xl" align="flex-start" refProp={ref}>
                <Title size={reSize()} marginBottom={isTablet ? '1.5rem' : '0rem'}>
                    A
                    <Text fontWeight="black" component="span" variant="gradient"> library of React  </Text>
                    components
                </Title>
                <Text size="xl" textAlign="initial" maxWidth="50rem">
                    This is the start of a new project, a minimalist UI, based on Mantine UI, this project will include several interface components, made with Styled-Components, for more, see my GitHub.
                </Text>
                <Features/>
            </Stack>
        </Section>
    )
}

export default Introduction;