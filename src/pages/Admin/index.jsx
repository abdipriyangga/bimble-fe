import React, { useEffect } from 'react'
import LayoutAdmin from '../../components/Layouts/LayoutAdmin'
import AddMasterSoal from './AddMasterSoal';

const NotesList = () => {
  return <div>Notes List</div>;
};


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