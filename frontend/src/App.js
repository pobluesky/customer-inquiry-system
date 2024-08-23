import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import { Intro } from './pages/intro';
import { Login } from './pages/login';
import { Join } from './pages/join';
import { InqMain } from './pages/inq-main';
import { InqList } from './pages/inq-list';
import { InqForm } from './pages/inq-form';
import { InqItem } from './pages/inq-item';
import { VocMain } from './pages/voc-main';
import { VocList } from './pages/voc-list';
import { VocForm } from './pages/voc-form';
import { DashBoard } from './pages/dashboard';
import { AuthProvider } from './context/auth/AuthContext';
import Layout from './components/templates/Layout';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CustomerInqForm from './pages/inq-form/CustomerInqForm';
import SalesManagerInqForm from './pages/inq-form/SalesManagerInqForm';
import QualityManagerInqForm from './pages/inq-form/QualityManagerInqForm';
import CustomerInqList from './pages/inq-list/CustomerInqList';
import CustomerInqItem from './pages/inq-item/CustomerInqItem';
import SalesManagerInqList from './pages/inq-list/SalesManagerInqList';
import SalesManagerInqItem from './pages/inq-item/SalesManagerInqItem';

import QuestionInquirySearchModal from './components/mocules/QuestoinInquirySearchModal';
import Table from './pages/inq-list/Table'
import CustomerInqTableList from './pages/inq-list/CustomerInqTableList';

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

                        <Route path="inq-list/customer" element={<CustomerInqList />} />
                        <Route path="inq-list/manager" element={<SalesManagerInqList />} />
                        <Route path="inq-list/table" element={<CustomerInqTableList />} />

                        <Route path="inq-form/customer" element={<CustomerInqForm />} />
                        {/*<Route path="inq-form/sales" element={<SalesManagerInqForm />} />*/}
                        {/*<Route path="inq-form/quality" element={<QualityManagerInqForm />} />*/}

                        <Route path="inq-list/customer/:id" element={<CustomerInqItem />} />
                        <Route path="inq-list/manager/:id" element={<SalesManagerInqItem />} />
                        {/*<Route path="inq-list/quality" element={<QualityManagerInqItem />} />*/}

                        <Route path="voc-main" element={<VocMain />} />
                        <Route path="voc-list" element={<VocList />} />
                        <Route path="voc-form" element={<VocForm />} />

                        <Route path="dashboard" element={<DashBoard />} />
                        {/* Route path="*" element={<Error404 />} /> */}
                    </Routes>
                </Layout>
            </Router>
        </AuthProvider>
    );
}

export default App;
