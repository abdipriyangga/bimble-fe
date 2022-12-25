import React from 'react'
import { menuItems } from '../../menuItems'
import MenuItems from '../MenuItems'
import "./sidebar.css"
const Sidebar = () => {
  return (
    <nav className='bg-main p-10 w-1/4  h-122'>
      <ul className="menus text-white font-bold">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems items={menu} key={index} depthLevel={depthLevel} />
          )
        })}
      </ul>
    </nav>
  )
}

export default Sidebar