import HeaderStyle from "./style/Header";

// components
import SwitchColors from "./switchColors/SwitchColors";

// UI
import Group from "../../PhantomUI/Components/Layout/Group/Group";
import Title from "../../PhantomUI/Components/Title/Title";
import ActionIcon from "../../PhantomUI/Components/ActionIcon/ActionIcon";
import Menu from "../../PhantomUI/Components/Menu/Menu";

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
                    <Menu activeMenu={<ActionIcon size="lg" radius="md"><IconPalette stroke={1.5} /></ActionIcon>}>
                        <Menu.label>Colors</Menu.label>
                        <SwitchColors/>
                    </Menu>
                    <SwitchTheme />
                </Group>
            </Group>
        </HeaderStyle>
    )
}

export default Header;