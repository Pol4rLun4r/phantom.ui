// UI
import Button from "../../../../PhantomUI/Components/Button/Button"
import Box from "../../../../PhantomUI/Components/Layout/Box/Box";
import Stack from "../../../../PhantomUI/Components/Layout/Stack/Stack";
import Title from "../../../../PhantomUI/Components/Title/Title"

const Preview = () => {
    const buttonProp = { size: 'sm'};

    return (
        <Stack>
            <Title as="h2" fontWeight="bold">Variants preview</Title>
            <Box grow>
                <Button variant="filled" {...buttonProp}>Button</Button>
                <Button variant="light" {...buttonProp}>Button</Button>
                <Button variant="transparent" {...buttonProp}>Button</Button>
                <Button variant="outline" {...buttonProp}>Button</Button>
                <Button variant="white" {...buttonProp}>Button</Button>
            </Box>
        </Stack>
    )
}

export default Preview