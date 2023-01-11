import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Logo, Twitter } from '../../assets'

const Footer = () => {
  return (
    <footer className='bg-main flex h-80 p-5'>
      <section className=' w-1/2 p-3'>
        <div className='flex'>
          <img src={Logo} alt="Logo" className='mx-1' />
          <span className='text-white my-2 mx-2 text-lg font-bold'>Back to School</span>
        </div>
        <div className='mt-9'>
          <p className='text-justify text-sm text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </section>
      <section className=' w-1/2 p-3'>
        <div className='mt-20'>
          <p className='text-justify text-sm text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='flex gap-x-3 justify-end mt-3'>
          <Link to="#" type="button">
            <img src={Facebook} alt="facebook-icon" width={30} height={30} />
          </Link>
          <Link to="#" type="button">
            <img src={Twitter} alt="facebook-icon" width={30} height={30} />
          </Link>
          <Link to="#" type="button">
            <img src={Linkedin} alt="facebook-icon" width={30} height={30} />
          </Link>
          <Link to="#" type="button">
            <img src={Instagram} alt="facebook-icon" width={30} height={30} />
          </Link>
        </div>
      </section>
    </footer>
  )
}

export default Footer