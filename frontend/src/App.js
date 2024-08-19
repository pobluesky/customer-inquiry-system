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
import { AuthProvider } from './context/auth/AuthContext';
import Layout from './components/templates/Layout';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route index path="" element={<Intro />} />
                        <Route path="login" element={<Login />} />
                        <Route path="join" element={<Join />} />
                        <Route path="inq-main" element={<InqMain />} />
                        <Route path="inq-list" element={<InqList />} />
                        <Route path="inq-form" element={<InqForm />} />
                        <Route path="inq-item" element={<InqItem />} />

                        <Route path="voc-main" element={<VocMain />} />
                        <Route path="voc-list" element={<VocList />} />

                        <Route path="dashboard" element={<DashBoard />} />
                        {/* Route path="*" element={<Error404 />} /> */}
                    </Routes>
                </Layout>
            </Router>
        </AuthProvider>
    );
}

export default App;
