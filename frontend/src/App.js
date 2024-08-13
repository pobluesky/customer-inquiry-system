import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import { Intro } from './pages/intro';
import { Login } from './pages/login';
import { Join } from './pages/join';
import { InqList } from "./pages/inqlist";
import { Inq } from "./pages/inq";
import { InqItem } from './pages/inqitem';
import { Voc } from './pages/voc';
import { DashBoard } from './pages/dashboard';
import { QuestionAnswer } from './pages/voc';

function App() {
    return (
        <Router>
            <Routes>
                <Route index path="" element={<Intro />} />
                <Route path="login" element={<Login />} />
                <Route path="join" element={<Join />} />
                <Route path="inq-list" element={<InqList />} />
                <Route path="inq" element={<Inq />} />
                <Route path="inq-item" element={<InqItem />} />
                <Route path="voc" element={<Voc />} />
                <Route path="voc/qna" element={<QuestionAnswer />} />
                <Route path="dashboard" element={<DashBoard />} />
                {/* Route path="*" element={<Error404 />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
