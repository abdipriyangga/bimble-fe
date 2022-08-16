import React from 'react';
import { Header } from '../Header';
import Sidebar from '../Sidebar';

const LayoutAdmin = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <div className='flex flex-row'>
        <Sidebar />
        {children}
      </div>
    </>
  )
}

export default LayoutAdmin;