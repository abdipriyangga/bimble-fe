import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const SellTryout = ({ to, price, title, description, btn_text }) => {
  return (
    <div>
      <div className='bg-main rounded-md w-60 h-80'>
        <div className='flex p-3'>
          <FontAwesomeIcon icon={faUserCircle} size='3x' inverse className='mx-3' />
          <p className='text-white text-xl mt-3 ml-5 font-semibold'>{price}</p>
        </div>
        <div className='p-2'>
          <p className='text-white text-xs text-center'>{title}</p>
          <p className='text-grey-400 p-2 mt-5 text-xs text-justify'>{description}</p>
        </div>
        <div className='text-left mt-2 p-2'>
          <Link to={to} type='button' className="p-2 w-32 mx-2 text-black text-center font-semibold bg-secMain border-none rounded ease-linear transition-all duration-150 shadow hover:shadow-lg hover:shadow-grey-800">
            {btn_text}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SellTryout