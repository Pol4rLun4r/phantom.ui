import theme from "styled-theming"

// layout
export const bodyColor = theme('mode', {
    light: '#ffffff',
    dark: '#242424',
});

export const borderColor = theme('mode', {
    light: '#e9ecef',
    dark: '#2e2e2e',
})

// buttons
export const buttonBackground = theme('mode', {
    light: '#ffffff',
    dark: '#2e2e2e'
})

export const buttonBorder = theme('mode', {
    light: '#ced4da',
    dark: '#424242'
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