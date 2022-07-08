import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Admin from './Admin';
import App from './App';
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router