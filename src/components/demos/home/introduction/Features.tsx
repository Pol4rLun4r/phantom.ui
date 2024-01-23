//UI
import { Flex } from "../../../../PhantomUI/Components/@Layout"
import { ActionIcon } from "../../../../PhantomUI/Components/@Buttons"
import { Title, Text } from "../../../../PhantomUI/Components/@Typography"

//Icons
import { IconBrandMantine, IconScale, IconBrandSass } from "@tabler/icons-react"

// queries
import { useMediaQuery } from "react-responsive"

// others
import { featuresList } from "./featuresList"

const iconProps = { stroke: 1.3, width: 30, height: 30, color: "white" }

const Features = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 820px)' });

    return (
        <Flex gap={isTablet ? "1.875rem" : "4rem"} justify="space-between" align="flex-start" direction={isTablet ? "column" : "row"}>
            {featuresList.map((feature) => {
                return (
                    <Flex key={feature.icon} direction={isTablet ? "row" : "column"} align="flex-start">
                        <ActionIcon radius="md" size="3rem" variant="gradient" as="div">
                            {feature.icon === 'license' ? <IconScale {...iconProps} /> : feature.icon === 'mantine' ? <IconBrandMantine {...iconProps} /> : <IconBrandSass {...iconProps} />}
                        </ActionIcon>
                        <Flex direction="column" align="flex-start" gap="0.25rem">
                            <Title as="h3" fontSize="1rem" fontWeight="semiBold">{feature.title}</Title>
                            <Text fontSize="sm" variant="description">{feature.description}</Text>
                        </Flex>
                    </Flex>
                )
            })}
        </Flex>
    )
}

export default Features