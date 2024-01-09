import { ReactNode } from "react";

export interface MenuItemProps {
    leftSection?: ReactNode
    rightSection?: ReactNode

    children: ReactNode;

    onClick?: () => void;
}