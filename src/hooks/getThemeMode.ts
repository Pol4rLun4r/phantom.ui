import { atom } from "recoil";

const themeMode = atom<'dark' | 'light'>({
    key: 'themeMode',
    default: 'dark'
})

export default themeMode;