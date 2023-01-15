import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Reject, Success } from '../../assets'
import LayoutAdmin from '../../components/Layouts/LayoutAdmin'
import DataUser from '../../data-user.json'
const PaymentValidation = () => {
  const data = DataUser;
  const [success, setSuccess] = useState('false')
  const [reject, setReject] = useState('false')
  const handleSuccess = (e) => {
    e.preventDefault();
    setSuccess('true')
  }
  const handleReject = (e) => {
    e.preventDefault();
    setReject('true')
  }
  return (
    <LayoutAdmin>
      <div className='p-5 w-3/4'>
        <h2 className='font-bold text-xl my-2' > Master Group - P3K - Teknis</h2>
        {/* Sub Header */}
        <div className='flex items-center justify-between'>
          <div className='flex flex-row items-center'>
            <input
              type="text"
              className="block w-full px-4 py-2 text-black bg-white border rounded-md focus:border-main focus:ring-main focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search..."
            />
            <button className="p-2 w-24 mx-2 text-black font-semibold bg-secMain shadow-md border-none rounded ">
              Search
            </button>
          </div>

        </div>
        {/* Table */}
        <div className="flex flex-col my-4">
          <div className="overflow-x-auto">
            <div className="p-1 w-full inline-block align-middle">
              <div className="border-none rounded-lg">
                <table className="min-w-full  divide-y divide-grey table-auto">
                  <thead className="bg-grey">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        No
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Nama User
                      </th>
                      <th
                        scope="col"
                        className="px-4 text-center py-3 text-xs font-bold text-gray-500 border-none uppercase"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                      >
                        No Pembayaran
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                      >
                        Tanggal
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                      >
                        Bukti
                      </th>
                      <th className='px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase'>Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 ">
                        1
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 ">
                        Jone Doe
                      </td>
                      <td className="text-sm text-justify text-gray-800 w-48 whitespace-pre-line ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                      </td>
                      <td className="text-sm text-center text-gray-800">
                        Jawaban Benar
                      </td>
                      <td className="text-sm text-center text-gray-800">
                        Pembahasan
                      </td>
                      <td className="text-sm text-center text-gray-800">
                        Pembahasan
                      </td>
                      <td className="text-sm text-center">
                        {reject === 'false' && success === 'false' ? (
                          <>
                            <button onClick={handleReject} type='button' className="text-main hover:text-green-700">
                              <img src={Reject} alt="icon-edit" className='lg:ml-3 ' />
                            </button>
                            <button onClick={handleSuccess} className=''>
                              <img src={Success} alt="icon-edit" className='lg:ml-0 ' />
                            </button>
                          </>
                        ) : (

                          reject === 'true' ? (
                            <>
                              <span className='text-red font-bold'>Gagal Tervalidasi</span>
                              <button onClick={handleReject} type='button' className="hidden">
                                <img src={Reject} alt="icon-edit" className='lg:ml-3 ' />
                              </button>
                            </>
                          ) : (
                            success === 'true' ? (
                              <>
                                <span className='text-green-400 font-bold '>Tervalidasi</span>
                                <button onClick={handleSuccess} className='hidden'>
                                  <img src={Success} alt="icon-edit" className='lg:ml-0 ' />
                                </button>
                              </>
                            ) : (
                              <button onClick={handleSuccess} className=''>
                                <img src={Success} alt="icon-edit" className='lg:ml-0 ' />
                              </button>
                            )
                          )
                        )}

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  )
}

export default PaymentValidation