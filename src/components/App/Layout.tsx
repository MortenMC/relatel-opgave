import React from 'react';

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props) => <React.Fragment>
    {props.children}
</React.Fragment>;

export default Layout;