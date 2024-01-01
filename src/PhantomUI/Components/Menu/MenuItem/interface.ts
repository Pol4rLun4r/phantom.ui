import { ReactNode } from "react";

type Style = {
    leftSection?: ReactNode
    rightSection?: ReactNode
}

interface IMenu {
    $style: Style
}

interface IMenuProps extends Style {
    children: ReactNode;

    onClick?: () => void | undefined;
}

export type { IMenu, IMenuProps }