import theme from "styled-theming"

export const backgroundColor = theme('mode', {
    light: '#ffffff',
    dark: '#242424',
});

export const borderColor = theme('mode', {
    light: '',
    dark: '',
})

// typography
export const textColor = theme('mode', {
    light: '#495057',
    dark: '#b8b8b8',
})

export const titleColor = theme('mode', {
    light: '#000000',
    dark: '#ffffff',
})