import React from 'react'
import { BackgroundLogin, Email } from '../../assets'
import LayoutAuth from '../../components/Layouts/LayoutAuth'

const CheckEmail = () => {

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  return (
    <LayoutAuth>
      <div className='flex'>
        <div className='w-1/2 h-full bg-amber-900'>
          <img src={BackgroundLogin} alt="side-background" className='object-fill lg:w-full h-112.5 lg:h-114 lg:rounded-bl-md' />
        </div>
        <div className='flex-initial w-1/2 lg:h-104 lg:bg-white p-5'>
          <p className='text-center text-lg font-bold tracking-wider mt-10 lg:mt-0'>Check Email Anda</p>
          <p className='text-center text-sm font-bold text-grey-500 tracking-wider mt-10 lg:mt-7 lg:ml-0 '>Kode pemulihan telah dikirim ke email anda, silahkan
            periksa.</p>
          <div className='lg:mt-10 lg:ml-32'>
            <img src={Email} alt="email logo" />
          </div>
          <form className='ml-11 p-3 mt-10 lg:mt-3 w-4/5'>
            <div className="mb-6">
              <button className='w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-secMain rounded-md hover:bg-secMain focus:outline-none focus:bg-amber-600 font-bold' onClick={() => openInNewTab('https://gmail.com')}>Buka Email</button>
            </div>

          </form>
        </div>
      </div>
    </LayoutAuth>
  )
}

export default CheckEmail