import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import { Intro } from './pages/intro';
import { Login } from './pages/login';
import { Join } from './pages/join';
import { Inq } from './pages/inq';
import { Voc } from './pages/voc';
import { DashBoard } from './pages/dashboard';
import DateInput from './components/mocules/DateInput';

function App() {
    return (
        <Router>
            <Routes>
                <Route index path="" element={<Intro />} />
                <Route path="login" element={<Login />} />
                <Route path="join" element={<Join />} />
                <Route path="inq" element={<Inq />} />
                <Route path="voc" element={<Voc />} />
                <Route path="dashboard" element={<DashBoard />} />
                <Route path="test" element={<DateInput />} />
                {/* Route path="*" element={<Error404 />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
