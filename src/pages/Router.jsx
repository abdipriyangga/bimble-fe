import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Admin from './Admin';
import EditMasterSoal from './Admin/EditMasterSoal';
import AddMasterSoal from './Admin/AddMasterSoal';
import GetMasterSoal from './Admin/GetMasterSoal';
import GetMasterGroup from './Admin/GetMasterGroup';
import AddMasterGroup from './Admin/AddMasterGroup';
import PaymentValidation from './Admin/PaymentValidation';
import Login from './Auth/Login';
import Register from './Auth/Register';
import ForgotPassword from './Auth/ForgotPassword';
import CheckEmail from './Auth/CheckEmail';
import GetMasterUser from './Admin/GetMasterUser';
import Homepage from './Homepage';
import Payment from './Payment';
import TryoutUser from './TryoutUser';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/get-master-soal" element={<GetMasterSoal />} />
        <Route path="/admin/editSoal" element={<EditMasterSoal />} />
        <Route path="/admin/add-soal" element={<AddMasterSoal />} />
        <Route path="/admin/master-group" element={<GetMasterGroup />} />
        <Route path="/admin/master-user" element={<GetMasterUser />} />
        <Route path="/admin/addGroup" element={<AddMasterGroup />} />
        <Route path="/admin/payment-validation" element={<PaymentValidation />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/check-email" element={<CheckEmail />} />
        <Route path="/payment-user" element={<Payment />} />
        <Route path="/tryout-user" element={<TryoutUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router