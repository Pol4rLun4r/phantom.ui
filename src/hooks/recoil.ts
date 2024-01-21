import { atom } from "recoil";

// interface 
import { mode, colorSchema } from "../PhantomUI/styled";

export const themeMode = atom<mode>({
    key: 'themeMode',
    default: 'dark'
})

export const colorSchemaMode = atom<colorSchema>({
    key: 'colorSchemaMode',
    default: 'magenta'
})
