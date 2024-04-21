import HeaderStyle from "./style/Header";

// components
import SwitchColors from "./switchColors/SwitchColors";

// UI
import { Group } from "../../PhantomUI/Components/@Layout";
import { ActionIcon } from "../../PhantomUI/Components/@Buttons";
import { Title } from "../../PhantomUI/Components/@Typography";
import { Menu } from "../../PhantomUI/Components/@Overlays";

// icon
import { IconGhost3, IconPalette, IconBrandGithub } from '@tabler/icons-react';
import SwitchTheme from "./switchTheme/SwitchTheme";

const Header = () => {
    return (
        <HeaderStyle>
            <Group height="100%" justify="space-between" align="center">
                <Group gap="xs" as={"a"} href="/">
                    <ActionIcon size="lg" radius="lg" variant="filled">
                        <IconGhost3 stroke={2} />
                    </ActionIcon>
                    <Title fontWeight="bold" as="h2">Phantom</Title>
                </Group>
                <Group gap="sm">
                    <ActionIcon size="lg" radius="md" 
                        as="a"
                        href="https://github.com/Pol4rLun4r/phantom.ui"
                        target="_blank"
                    ><IconBrandGithub stroke={1.5}/></ActionIcon>
                <Menu activeMenu={<ActionIcon size="lg" radius="md"><IconPalette stroke={1.5} /></ActionIcon>}>
                    <Menu.label>Colors</Menu.label>
                    <SwitchColors />
                </Menu>
                <SwitchTheme />
            </Group>
        </Group>
        </HeaderStyle >
    )
}

export default Header;