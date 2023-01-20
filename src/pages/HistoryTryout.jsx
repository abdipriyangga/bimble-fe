import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { menuItems } from '../menuItems'
import DataHistory from '../data-history.json'
const HistoryTryout = () => {
  return (
    <div>
      <header className="App-header">
        <Header name={"userIsAuth"} />
      </header>
      <section className='w-full h-full flex justify-between p-14'>
        <div className='flex flex-col gap-y-8'>
          <div>
            <span className='text-2xl font-bold text-grey-600'>Riwayat Tes</span>
          </div>
          <div>
            <p className='text-base font-bold text-grey-600'>Test yang sebelumnya pernah anda jalani.</p>
          </div>
        </div>
      </section>
      <section className='p-10 h-full'>
        <div className="flex flex-col my-4">
          <div className="overflow-x-auto">
            <div className="p-1 w-full inline-block">
              <div className="border-2 rounded-lg">
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
                        Kategori
                      </th>
                      <th
                        scope="col"
                        className="px-6 text-center py-3 text-xs font-bold text-gray-500 border-none uppercase"
                      >
                        Sub Kategori
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                      >
                        Tanggal Pengerjaan
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {DataHistory.map((data, idx) => {
                      return (
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 ">
                            {data.id}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 ">
                            {data.kategori}
                          </td>
                          <td className="text-sm text-center text-gray-800 w-48 whitespace-pre-line ">
                            {data.subKategori}
                          </td>
                          <td className="text-sm text-center text-gray-800">
                            {data.tanggalPengerjaan}
                          </td>
                          <td className="text-sm text-center">
                            <Link to={`user/data-history/${data.id}`} type='button' className="p-2 w-32 mx-2 text-black font-semibold bg-secMain border border-secMain rounded ease-linear transition-all duration-150 shadow hover:shadow-lg">
                              View Detail
                            </Link>
                          </td>
                        </tr>
                      )
                    })}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HistoryTryout