declare module '@jcomponents/header' {
    import React from 'react';

    export default function Header(props: {
        maxWidth?: number | 'none';
        color?: string | { from: string; to: string };
        children?: React.ReactNode;
        [key: string]: any;
    }): React.JSX.Element;
}
