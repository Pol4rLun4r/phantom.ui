import HeaderStyle from "./style/Header";

// components
import Group from "../../PhantomUI/Components/Layout/Group/Group";
import Title from "../../PhantomUI/Components/Title/Title";
import ActionIcon from "../../PhantomUI/Components/ActionIcon/ActionIcon";

// icon
import { IconGhost3, IconPalette } from '@tabler/icons-react';
import SwitchTheme from "./switchTheme/SwitchTheme";

const Header = () => {

    return (
        <HeaderStyle>
            <Group height="100%" justify="space-between" align="center">
                <Group gap="xs">
                    <ActionIcon size="lg" radius="lg" variant="filled">
                        <IconGhost3 stroke={2} />
                    </ActionIcon>
                    <Title fontWeight="bold" order={2}>Phantom</Title>
                </Group>
                <Group gap="sm">
                    <ActionIcon size="lg" radius="md">
                        <IconPalette stroke={1.5} />
                    </ActionIcon>
                    <SwitchTheme />
                </Group>
            </Group>
        </HeaderStyle>
    )
}

export default Header;