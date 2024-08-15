import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../mocules/Header';

const Layout = ({ children }) => {
    const location = useLocation();

    const inq = location.pathname.includes('inq');
    const voc = location.pathname.includes('voc');
    const dashboard = location.pathname.includes('dashboard');

    return (
        <div>
            <Header inq={inq} voc={voc} dashboard={dashboard} />
            <div>
                {children}
            </div>
        </div>
    );
};

export default Layout;
