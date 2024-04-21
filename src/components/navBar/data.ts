// icons
import { IconForms, IconLayout } from "@tabler/icons-react";

const data: Data[] = [
    {
        label: 'Components',
        opened: true,         
        children: [
            {
                group: 'Layout',
                icon: IconLayout,
                children: [
                    { label: 'Flex', to: '1' },
                    { label: 'Stack', to: '#', disabled: true },
                    { label: 'grid', to: '#' },
                ]
            },
            {
                group: 'Inputs',
                icon: IconForms,
                disabled: true,
                children: [
                    { label: 'text', to: '#' },
                    { label: 'pass', to: '#' },
                    { label: 'icon', to: '#' },
                ]
            },
        ]
    },
    {
        label: 'Hooks',
        children: [
            { label: 'page one', to: '1' },
            { label: 'page two', to: '2' },
            { label: 'page three', to: '3' },
            { label: 'page a', to: '#', disabled: true },
            { label: 'page b', to: '#', disabled: true },
        ]
    },

];

interface SubChildren {
    label?: string,
    to?: string,
    disabled?: true,
}

interface Children {
    label?: string,
    to?: string,
    disabled?: true,
    // ----
    group?: string,
    icon?: any,
    children?: SubChildren[]
}

interface Data {
    label: string,
    to?: string,
    opened?: boolean,
    disabled?: true,
    children?: Children[]
}

export default data;