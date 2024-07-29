import React from 'react';
import { useRoutes } from 'react-router';

import { Login } from './pages/login';
import { Join } from './pages/join';
import { MyAsk } from './pages/myask';
import { Ask } from './pages/ask';
import { Collaboration } from './pages/collaboration';

function App() {
    return useRoutes([
        { path: '/login', element: <Login /> },
        { path: '/join', element: <Join /> },
        { path: '/myask', element: <MyAsk /> },
        { path: '/ask', element: <Ask /> },
        { path: '/collaboration', element: <Collaboration /> },
    ]);
}

export default App;
