import React from 'react'
import Dropdown from '../Atom/Dropdown'

const Sidebard = () => {
  return (
    <>
      <aside className='bg-red p-10 w-1/4 h-screen'>
        <div>
          <p className='text-white text-lg'>Dashboard</p>
        </div>
        <Dropdown color="white" />
        {/* <Dropdown color="white" />
        <Dropdown color="white" /> */}
        <div>
        </div>
      </aside>
    </>
  )
}

export default Sidebard