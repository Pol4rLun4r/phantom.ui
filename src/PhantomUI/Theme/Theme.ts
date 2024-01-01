import theme from "styled-theming"

// layout
export const bodyColor = theme('mode', {
    light: '#ffffff',
    dark: '#242424',
});

export const bodyColorTwo = theme('mode', {
    light: '#ffffff',
    dark: '#1f1f1f',
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

export const buttonActionIcon = theme('mode', {
    light: '#495057',
    dark: '#ffffff'
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

// menu
export const borderMenu = theme('mode', {
    light: '#e9ecef',
    dark: '#424242',
})

export const bodyMenu = theme('mode', {
    light: '#ffffff',
    dark: '#2e2e2e',
})

export const fontMenuItems = theme('mode', {
    light: '#000000',
    dark: '#c9c9c9',
})

export const fontMenuLabel = theme('mode', {
    light: '#868e96',
    dark: '#828282'
})

export const hoverMenuItems = theme('mode', {
    light: '#f1f3f5',
    dark: '	#424242'
})