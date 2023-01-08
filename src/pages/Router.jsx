import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Admin from './Admin';
import EditMasterSoal from './Admin/EditMasterSoal';
import AddMasterSoal from './Admin/AddMasterSoal';
import App from './App';
import GetMasterSoal from './Admin/GetMasterSoal';
import GetMasterGroup from './Admin/GetMasterGroup';
import AddMasterGroup from './Admin/AddMasterGroup';
import Login from './Auth/Login';
import Register from './Auth/Register';
import ForgotPassword from './Auth/ForgotPassword';
import CheckEmail from './Auth/CheckEmail';
import ResetPassword from './Auth/ResetPassword';
import GetMasterUser from './Admin/GetMasterUser';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/get-master-soal" element={<GetMasterSoal />} />
        <Route path="/admin/editSoal" element={<EditMasterSoal />} />
        <Route path="/admin/add-soal" element={<AddMasterSoal />} />
        <Route path="/admin/master-group" element={<GetMasterGroup />} />
        <Route path="/admin/master-user" element={<GetMasterUser />} />
        <Route path="/admin/addGroup" element={<AddMasterGroup />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/check-email" element={<CheckEmail />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router