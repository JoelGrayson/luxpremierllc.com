declare module '@jcomponents/nav' {
    import React from 'react';

    interface NavProps {
        gap?: number;
        children?: React.ReactNode;
        [key: string]: any;
    }

    interface NavItemProps {
        children: React.ReactNode;
        href?: string;
        target?: '_blank' | '_self' | '_parent' | '_top' | string;
        Link?: any;
        [key: string]: any;
    }

    export default class Nav extends React.Component<NavProps> {
        static Item: (props: NavItemProps) => React.JSX.Element;
        render(): React.JSX.Element;
    }
}
