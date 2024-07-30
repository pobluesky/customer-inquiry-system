import React from 'react';
import { useRoutes } from 'react-router';

import { Intro } from './pages/intro';
import { Login } from './pages/login';
import { Join } from './pages/join';
import { Inq } from './pages/inq';
import { Voc } from './pages/voc';
import { DashBoard } from './pages/dashboard';

function App() {
    return useRoutes([
        { path: '/', element: <Intro /> }, // 메인 화면
        { path: '/login', element: <Login /> },
        { path: '/join', element: <Join /> },
        { path: '/inq', element: <Inq /> },
        { path: '/voc', element: <Voc /> },
        { path: '/dashboard', element: <DashBoard /> },
    ]);
}

export default App;
