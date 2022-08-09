import React from 'react'
import { Logo } from '../../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons'

export const Header = ({ title }) => {
  return (
    <>
      <header className='p-3 bg-main flex flex-row justify-between'>
        <title>{title}</title>
        <div className='flex'>
          <img src={Logo} alt="Logo" className='mx-1' />
          <span className='text-white my-2 mx-2 text-lg font-bold'>Back to School</span>
        </div>
        <div className='flex flex-shrink'>
          <div className='p-2 mx-2'>
            <button>
              <FontAwesomeIcon icon={faBell} size='lg' inverse />
            </button>
          </div>
          <div className='p-2 bg-grey rounded-full w-11 mx-2 h-full'>
            <button>
              <FontAwesomeIcon icon={faUser} size='lg' inverse className='mx-1' />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
