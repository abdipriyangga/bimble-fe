import React, { useEffect } from 'react'
import LayoutAdmin from '../../components/Layouts/LayoutAdmin'
import AddMasterSoal from './AddMasterSoal';

const Admin = () => {
  useEffect(() => {
    return () => {
      document.title = 'Admin | Bimble'
    };
  }, [])
  return (
    <LayoutAdmin>
      <AddMasterSoal />
    </LayoutAdmin>
  )
}

export default Admin