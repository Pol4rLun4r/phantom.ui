// UI
import Title from "../../../../PhantomUI/Components/Title/Title";
import Text from "../../../../PhantomUI/Components/Text/Text";
import Stack from "../../../../PhantomUI/Components/Layout/Stack/Stack";

const Introduction = () => {
    return (
        <Stack align="center" paddingMixed="13.75rem 1rem">
            <Title size="5rem">
                Welcome to
                <Text fontWeight="black" component="span" variant="gradient"> Phantom UI</Text>
            </Title>
            <Text size="xl">
                This is the start of a new project, a minimalist UI, based on Mantine UI, this project will include several interface components, made with Styled-Components, for more, see my GitHub.
            </Text>
        </Stack>
    )
}

export default Introduction;