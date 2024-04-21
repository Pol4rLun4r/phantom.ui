import theme from "styled-theming"

// type
import type { ThemeValues } from "../../hook/ThemeHook"

export const BackgroundDefaultActive = theme('mode', {
    light: '#f2f2f2',
    dark: '#2e2e2e',
});

export const FontColorDefault = theme('mode', {
    light: '#000000',
    dark: '#ffffff',
});

export const FontColorSubtle: ThemeValues = { dark: 6, light: 6 };

export const BackgroundSubtleActive: ThemeValues = { dark: 6, light: 6 };

export const FontColorLight: ThemeValues = { dark: 6, light: 6 };

export const BackgroundLightActive: ThemeValues = { dark: 6, light: 6 };

export const FontColorFilled = theme('mode', {
    light: '#ffffff',
    dark: '#ffffff',
});

export const BackgroundFilledActive: ThemeValues = { dark: 6, light: 6 };

// --------------- navLinkGroup ---------------

export const BackgroundGroup = theme('mode', {
    light: '#f8f9fa',
    dark: '#242424',
})

export const FontColorGroup = theme('mode', {
    light: '#828282',
    dark: '#828282',
})

export const BorderColorGroup = theme('mode', {
    light: '#dee2e6',
    dark: '#2e2e2e',
})

export const BorderColorActive: ThemeValues = { dark: 6, light: 6 };