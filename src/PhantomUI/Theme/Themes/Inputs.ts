import theme from "styled-theming"

// type
import type { ThemeValues } from "../../hook/ThemeHook";

export const inputValueColor = theme('mode', {
    light: '#000000',
    dark: '#c9c9c9',
});

export const inputBackgroundDefault = theme('mode', {
    light: '#ffffff',
    dark: '#2e2e2e'
});

export const inputBackgroundFilled = theme('mode', {
    light: '#f1f3f5',
    dark: '#3b3b3b'
});

export const inputBorder = theme('mode', {
    light: '#ced4da',
    dark: '#424242'
});

export const inputBackgroundDisabled = theme('mode', {
    light: '#f1f3f5',
    dark: '#2e2e2e'
});

export const inputColorDisabled = theme('mode', {
    light: '#828282',
    dark: '#828282'
});

export const inputBorderDisabled = theme('mode', {
    light: '#ced4da',
    dark: '#424242'
});

export const inputFocusBorder: ThemeValues = { dark: 6, light: 6};

export const inputDescriptionColor = theme('mode', {
    light: '#868e96',
    dark: '#828282'
});

export const inputIconColor = theme('mode', {
    light: '#828282',
    dark: '#828282'
});

export const inputIconColorDisabled = theme('mode', {
    light: '#828282',
    dark: '#828282'
});

export const inputColorError = theme('mode', {
    light: '#e03131',
    dark: '#fa5252'
})