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

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/getMasterSoal" element={<GetMasterSoal />} />
        <Route path="/admin/editSoal" element={<EditMasterSoal />} />
        <Route path="/admin/addSoal" element={<AddMasterSoal />} />
        <Route path="/admin/getMasterGroup" element={<GetMasterGroup />} />
        <Route path="/admin/addGroup" element={<AddMasterGroup />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router