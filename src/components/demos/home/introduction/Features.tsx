//UI
import Flex from "../../../../PhantomUI/Components/Layout/Flex/Flex"
import ActionBox from "../../../../PhantomUI/Components/ActionBox/ActionBox"
import Title from "../../../../PhantomUI/Components/Title/Title"

//Icons
import { IconBrandMantine } from "@tabler/icons-react"
import { IconLicense } from "@tabler/icons-react"
import { IconBrandSass } from "@tabler/icons-react"

const Features = () => {
    return (
        <Flex gap="4rem" justify="space-between">
            <Flex direction="column" align="flex-start" gap="xs">
                <ActionBox radius="md" size="3rem" variant="gradient">
                    <IconLicense stroke={1.3} width={35} height={35} color="white" />
                </ActionBox>
                <Title as="h3" size="1rem" fontWeight="semiBold">Free and open source</Title>
            </Flex>
            <Flex direction="column" align="flex-start" gap="xs">
                <ActionBox radius="md" size="3rem" variant="gradient">
                    <IconBrandMantine stroke={1.3} width={35} height={35} color="white" />
                </ActionBox>
                <Title as="h3" size="1rem" fontWeight="semiBold">Inspired by Mantine UI</Title>
            </Flex>
            <Flex direction="column" align="flex-start" gap="xs">
                <ActionBox radius="md" size="3rem" variant="gradient">
                    <IconBrandSass stroke={1.3} width={35} height={35} color="white" />
                </ActionBox>
                <Title as="h3" size="1rem" fontWeight="semiBold">Made with styled-components</Title>
            </Flex>
        </Flex>
    )
}

export default Features