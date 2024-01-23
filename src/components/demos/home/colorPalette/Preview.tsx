// UI
import { Button } from "../../../../PhantomUI/Components/@Buttons";
import { Box, Stack } from "../../../../PhantomUI/Components/@Layout";
import { Title } from "../../../../PhantomUI/Components/@Typography";

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