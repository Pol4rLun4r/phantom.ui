import { css } from "styled-components";

// type
import type { NavLinkProps } from "../../../../@Types/props";

// colors
import themeColorSchema from "../../../../hook/ThemeHook";
import { BackgroundDefaultActive, BackgroundSubtleActive, FontColorDefault, FontColorSubtle, BackgroundLightActive, FontColorLight, BackgroundFilledActive, FontColorFilled, BorderColorGroup, BorderColorActive } from "../../../../Theme/Themes/NavLink";

const DefaultVariant = () => {
    return css`
        color: ${FontColorDefault};

        border-color: ${BorderColorGroup};

        background-color: ${({ active }: NavLinkProps) => active ? BackgroundDefaultActive : ''};
        ${({ active }: NavLinkProps) => active ? 'font-weight: 600;' : ''};

        &:hover {
            background-color: ${BackgroundDefaultActive};
        }
    `;
};

const SubtleVariant = () => {
    return css`
        color: ${themeColorSchema(FontColorSubtle)};
        ${({ active }: NavLinkProps) => active ? 'font-weight: 600;' : ''};

        border-color: ${BorderColorActive};

        &:hover {
            background-color: ${themeColorSchema(BackgroundSubtleActive, '0.15')};
        }
    `;
};

const LightVariant = () => {
    return css`
        color: ${themeColorSchema(FontColorLight)};

        border-color: ${BorderColorActive};

        background-color: ${({ active }: NavLinkProps) => active ? themeColorSchema(BackgroundLightActive, '0.15') : ''};
        ${({ active }: NavLinkProps) => active ? 'font-weight: 600;' : ''};

        &:hover {
            background-color: ${themeColorSchema(BackgroundLightActive, '0.15')};
        }
    `;
};


const FilledVariant = () => {
    return css`
        color: ${FontColorFilled};

        border-color: ${BorderColorActive};

        background-color: ${({ active }: NavLinkProps) => active ? themeColorSchema(BackgroundFilledActive) : ''};
        ${({ active }: NavLinkProps) => active ? 'font-weight: 600;' : ''};

        &:hover {
            background-color: ${themeColorSchema(BackgroundFilledActive)};
        }
        `;
};

const Variants = () => {
    return css`
        ${({ variant }: NavLinkProps) =>
                variant === 'default' ? DefaultVariant() :
                    variant === 'light' ? LightVariant() :
                        variant === 'filled' ? FilledVariant() :
                            variant === 'subtle' ? SubtleVariant() : DefaultVariant()
        };
    `
}

export default Variants;