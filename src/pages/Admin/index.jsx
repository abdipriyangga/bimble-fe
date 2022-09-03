import React, { useEffect } from 'react'
import LayoutAdmin from '../../components/Layouts/LayoutAdmin'
import Dashboard from './Dashboard';

const Admin = () => {
  useEffect(() => {
    return () => {
      document.title = 'Admin | Bimble'
    };
  }, [])
  return (
    <LayoutAdmin>
      <Dashboard />
    </LayoutAdmin>
  )
}

export default Admin