import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import { Intro } from './pages/intro';
import { Login } from './pages/login';
import { Join } from './pages/join';
import { InqMain } from './pages/inq-main';
import { InqList } from "./pages/inq-list";
import { InqForm } from "./pages/inq-form";
import { InqItem } from './pages/inq-item';
import { VocList } from './pages/voc-list';
import { VocMain } from './pages/voc-main';
import { DashBoard } from './pages/dashboard';
import { QuestionAnswer } from './pages/voc';
import { QuestionRegister } from './pages/voc';
import { ManagerQuestionAnswer } from './pages/voc';

function App() {
    return (
        <Router>
            <Routes>
                <Route index path="" element={<Intro />} />
                <Route path="login" element={<Login />} />
                <Route path="join" element={<Join />} />
                <Route path="inq-main" element={<InqMain />} />
                <Route path="inq-list" element={<InqList />} />
                <Route path="inq-form" element={<InqForm />} />
                <Route path="inq-item" element={<InqItem />} />

                <Route path="voc/qna/list" element={<QuestionAnswer />} />
                <Route path="voc/qna/register" element={<QuestionRegister />} />
                <Route path="voc/qna/list/manager" element={<ManagerQuestionAnswer />} />

                <Route path="voc-main" element={<VocMain />} />
                <Route path="voc-list" element={<VocList />} />
                <Route path="dashboard" element={<DashBoard />} />
                {/* Route path="*" element={<Error404 />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
