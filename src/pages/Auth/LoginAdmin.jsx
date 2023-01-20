import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BackgroundLogin, Logo } from '../../assets'
import LayoutAuth from '../../components/Layouts/LayoutAuth'

const LoginAdmin = () => {
  const history = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()
    history('/admin')
  }
  return (
    <LayoutAuth>
      <div className='flex'>
        <div className='w-1/2 h-full bg-amber-900 lg:rounded-md rounded-md'>
          <img src={BackgroundLogin} alt="side-background" className='object-fill lg:w-full h-112.5 lg:h-114 lg:rounded-bl-md' />
        </div>
        <div className='flex-initial w-1/2 lg:h-104 lg:bg-white p-5 rounded-md lg:rounded-md'>
          <div className='flex justify-center mt-14 lg:mt-14 '>
            <img src={Logo} alt="Logo" className='mx-1' />
            <span className='text-black my-2 mx-2 text-lg font-bold'>Back to Basic</span>
          </div>
          <p className='text-center text-lg font-bold tracking-wider mt-10 lg:mt-10'>Login To Your Account</p>
          <form className='ml-11 p-3 mt-10 lg:mt-10 w-4/5'>
            <div className="mb-2 ">
              <label
                for="email"
                className="block text-sm font-semibold text-grey-800"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-grey-800"
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-10">
              <label
                for="email"
                className="block text-sm text-right font-semibold text-grey-800"
              >
                <Link to='/auth/forgot-password'>
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="mb-12">
              <button type='submit' onClick={handleLogin} className='w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-secMain rounded-md hover:bg-secMain focus:outline-none focus:bg-amber-600 font-bold'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </LayoutAuth>
  )
}

export default LoginAdmin