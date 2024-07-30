import React from 'react';
import { useRoutes } from 'react-router';

import { Intro } from './pages/intro';
import { Login } from './pages/login';
import { Join } from './pages/join';
import { MyAsk } from './pages/myask';
import { Ask } from './pages/ask';
import { Collaboration } from './pages/collaboration';
import { DashBoard } from './pages/dashboard';
import { Inq } from './pages/inq';

function App() {
    return useRoutes([
        { path: '/', element: <Intro /> }, // 메인 화면
        { path: '/login', element: <Login /> },
        { path: '/join', element: <Join /> },
        { path: '/myask', element: <MyAsk /> },
        { path: '/ask', element: <Ask /> },
        { path: '/collaboration', element: <Collaboration /> },
        { path: '/dashboard', element: <DashBoard /> },
        { path: '/inq', element: <Inq /> },
    ]);
}

export default App;
