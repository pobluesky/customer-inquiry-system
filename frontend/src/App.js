import React from 'react';
import { useRoutes } from 'react-router';

import { Login } from './pages/login';

function App() {
    return useRoutes([{ path: '/login', element: <Login /> }]);
}

export default App;
