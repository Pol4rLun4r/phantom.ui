// icons
import { IconMoon, IconSunHigh } from '@tabler/icons-react';

// components
import ActionIcon from '../../../PhantomUI/Components/ActionIcon/ActionIcon';

// recoil StateManage
import { useRecoilState } from 'recoil'
import themeMode from '../../../hooks/getThemeMode'

const SwitchTheme = () => {
    const [theme, setTheme] = useRecoilState(themeMode)

    const handleThemeMode = () => {
        if (theme === 'dark') return setTheme('light')
        return setTheme('dark')
    }

    return (
        <ActionIcon size="lg" radius="md" onClick={handleThemeMode}>
            {theme === 'dark' ?
                <IconSunHigh stroke={1.5} />
                :
                <IconMoon stroke={1.5} />
            }
        </ActionIcon>
    )
}

export default SwitchTheme