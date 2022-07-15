import React, { useEffect } from 'react'
import { Header } from '../../components/Header'
import Sidebard from '../../components/Sidebar'

const Admin = () => {
  useEffect(() => {
    return () => {
      document.title = 'Admin | Bimble'
    };
  }, [])
  return (
    <>
      <Header />
      <Sidebard />
    </>
  )
}

export default Admin