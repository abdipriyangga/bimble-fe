import React from 'react'
import Dropdown from '../Dropdown'


const Sidebar = () => {
  return (
    <>
      <aside className='bg-main p-10 w-1/4 h-122 '>
        <div>
          <p className='text-white text-lg'>Dashboard</p>
        </div>
        <div>
          <Dropdown title={`Master Soal`} />
        </div>
      </aside>
    </>
  )
}

export default Sidebar