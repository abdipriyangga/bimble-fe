import React from 'react'
import { Logo } from '../assets'

const Payment = () => {
  return (
    <>
      <div className='p-6 flex justify-between'>
        <div className='w-1/2 flex'>
          <img src={Logo} alt="Logo" className='mx-1' />
          <span className='text-main my-7 mx-2 text-xl font-bold'>Back to School</span>
        </div>
        <div>
          <p className='text-black my-2 mx-2 text-4xl font-bold'>Pembayaran</p>
          <p className='text-black my-2 mx-2 text-lg font-bold'>No. 001100822452</p>
        </div>
      </div>
    </>
  )
}

export default Payment