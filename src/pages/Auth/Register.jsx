import React from 'react'
import { Link } from 'react-router-dom'
import { BackgroundLogin, Logo } from '../../assets'
import LayoutAuth from '../../components/Layouts/LayoutAuth'

const Register = () => {
  return (
    <LayoutAuth>
      <div className='flex'>
        <div className='w-1/2 h-full bg-amber-900'>
          <img src={BackgroundLogin} alt="side-background" className='object-fill lg:w-full h-112.5 lg:h-114 lg:rounded-bl-md' />
        </div>
        <div className='flex-initial w-1/2 lg:h-104 lg:bg-white p-5'>
          <p className='text-center text-lg font-bold tracking-wider mt-10 lg:mt-0'>Create Your Account</p>
          <form className='ml-11 p-3 mt-10 lg:mt-3 w-4/5'>
            <div className="mb-4 ">
              <label
                for="fullname"
                className="block text-sm font-semibold text-grey-800"
              >
                Fullname
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4 ">
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
            <div className="mb-4 ">
              <label
                for="phone_number"
                className="block text-sm font-semibold text-grey-800"
              >
                Phone Number
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4 ">
              <label
                for="address"
                className="block text-sm font-semibold text-grey-800"
              >
                Address
              </label>
              <input
                type="textarea"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mb-4 ">
              <label
                for="password"
                className="block text-sm font-semibold text-grey-800"
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              <label
                for="confirm_password"
                className="block text-sm font-semibold text-grey-800"
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-indigo-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-6">
              <button className='w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-secMain rounded-md hover:bg-secMain focus:outline-none focus:bg-amber-600 font-bold'>Register</button>
            </div>
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm text-center font-semibold tracking-wider text-grey-700"
              > Already have an account?
                <Link to='/auth/login' className='tracking-wider ml-2 text-main'>
                  Login
                </Link>
              </label>
            </div>
          </form>
        </div>
      </div>
    </LayoutAuth>
  )
}

export default Register