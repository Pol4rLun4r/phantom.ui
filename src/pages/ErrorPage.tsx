// UI
import { Stack } from "../PhantomUI/Components/@Layout"
import { Text, Title } from "../PhantomUI/Components/@Typography"
import Main from "../components/demos/home/style/Main"

// Styled
import Section from "../components/errorPage/style/section"

const ErrorPage = () => {
    return (
        <Main>
            <Section>
                <Stack gap="xl" align="center">
                    <Title fontWeight='black' fontSize="3rem">Oops!</Title>
                    <Text>Sorry, an unexpected error has ocurred.</Text>
                    <Text variant="description">Error404 Not Found</Text>
                </Stack>
            </Section>
        </Main>
    )
}

export default ErrorPage