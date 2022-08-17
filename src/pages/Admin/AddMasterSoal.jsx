import React from 'react'
import { Link } from 'react-router-dom'
import ModalInput from '../../components/Modal/ModalInput'

const AddMasterSoal = () => {
  return (
    <div className='p-5 w-full'>
      <h2 className='font-bold text-xl my-2' > Master Soal - P3K - Teknis</h2>
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
        <div>
          <ModalInput />
        </div>
      </div>
      {/* Table */}
      <div className="flex flex-col my-4">
        <div className="overflow-x-auto">
          <div className="p-1 w-full inline-block align-middle">
            <div className="overflow-hidden border-none rounded-lg">
              <table className="min-w-full divide-y divide-grey">
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
                      Pertanyaan
                    </th>
                    <th
                      colSpan={5}
                      scope="col"
                      className="px-4 text-center py-3 text-xs font-bold text-gray-500 uppercase "
                    >
                      Pilihan Jawaban
                      <td className=" text-center px-24 py-4 text-sm text-gray-800 whitespace-nowrap">
                        <th className="px-4">
                          A
                        </th>
                        <th className="px-4">
                          B
                        </th>
                        <th className="px-4">
                          C
                        </th>
                        <th className="px-4">
                          D
                        </th>
                        <th className="px-4">
                          E
                        </th>
                      </td>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Jawaban Benar
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Pembahasan
                    </th>
                    <th className='text-sm' colSpan={2}>Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      1
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Jone Doe
                    </td>
                    <td className="text-sm text-center text-gray-800 whitespace-nowrap">
                      A
                    </td>
                    <td className="text-sm text-center text-gray-800 whitespace-nowrap">
                      A
                    </td>
                    <td className="text-sm text-center text-gray-800 whitespace-nowrap">
                      A
                    </td>
                    <td className="text-sm text-center text-gray-800 whitespace-nowrap">
                      A
                    </td>
                    <td className="text-sm text-center text-gray-800 whitespace-nowrap">
                      A
                    </td>
                    <td className="text-sm text-center text-gray-800 whitespace-nowrap">
                      Jawaban Benar
                    </td>
                    <td className="text-sm text-center text-gray-800 whitespace-nowrap">
                      Pembahasan
                    </td>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <Link to='editSoal' className="text-main hover:text-green-700">
                          Edit
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <Link to='#' className="text-red hover:text-red-700">
                          Delete
                        </Link>
                      </td>
                    </tr>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddMasterSoal