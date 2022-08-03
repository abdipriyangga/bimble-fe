import React, { useEffect } from 'react'
import { Header } from '../../components/Header'
import Sidebar from '../../components/Sidebar'

const Admin = () => {
  useEffect(() => {
    return () => {
      document.title = 'Admin | Bimble'
    };
  }, [])
  return (
    <>
      <Header />
      <Sidebar />
    </>
  )
}

export default Admin