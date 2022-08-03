import React from 'react'
import Dropdown from '../Dropdown'


const Sidebar = () => {
  return (
    <>
      <aside className='bg-main p-10 w-1/4 h-screen'>
        <div>
          <p className='text-white text-lg'>Dashboard</p>
        </div>
        <div>
          <Dropdown color="red" />
        </div>
      </aside>
    </>
  )
}

export default Sidebar