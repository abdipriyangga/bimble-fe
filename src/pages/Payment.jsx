import React from 'react'
import { Link } from 'react-router-dom'
import { Logo, LogoBni, QrImage } from '../assets'
import Footer from '../components/Footer'

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
      <div className='p-10'><div className='w-full bg-grey-300 h-0.5'></div></div>
      <div className='w-full flex justify-center mt-6'>
        <div className="flex flex-col w-1/2 my-4">
          <div className="overflow-x-auto">
            <div className="p-1 w-full inline-block align-middle">
              <div className="border-none rounded-lg">
                <table className="min-w-full divide-y-2 border-y border-x divide-grey-600 table-auto">
                  <thead className="bg-main divide-y divide-grey-600">
                    <tr>
                      <th
                        scope="col"
                        className="bg-main px-6 py-3 text-xs font-bold text-left text-white uppercase "
                      >
                        Detail
                      </th>
                      <th
                        scope="col"
                        className="px-6 bg-main py-3 text-xs font-bold text-left text-white uppercase "
                      >
                        Harga
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-grey-400">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 ">
                        Tryout PPPK
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 ">
                        Rp. 15.000
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 ">
                        Tryout PPPK
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 ">
                        Rp. 15.000
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold uppercase text-gray-800 ">
                        Total
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-gray-800 ">
                        Rp. 30.000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='p-10'><div className='w-full bg-grey-300 h-0.5'></div></div>
      <div className='p-12'>
        <div className='flex justify-center gap-x-56'>
          <div>
            <div className='flex gap-x-4 flex-row'>
              <p className='text-lg text-grey-400'>No. Rekening</p>
              <div><img src={LogoBni} className='mt-2' alt='Logo-Bni' width={50} height={50} /></div>
            </div>
            <div className='flex gap-x-2'>
              <p className='text-lg text-grey-500 font-bold'>2345678909</p>
              <span className='text-lg text-grey-500 font-bold'>a.n Ari Setiawan</span>
            </div>
          </div>
          <div>
            <img src={QrImage} alt='Qr-logo' width={200} height={200} />
          </div>
        </div>
      </div>
      <div className='p-10'>
        <p className='text-center text-2xl font-bold text-grey-500 uppercase'>Upload Bukti Pembayaran</p>
        <div className='text-center mt-10'>
          <Link to="/auth/login" type='button' className="p-2 w-72 mx-2 text-black font-semibold bg-secMain border border-secMain rounded ease-linear transition-all duration-150 shadow hover:shadow-lg">
            Upload Bukti Pembayaran
          </Link>
        </div>
      </div>
      <section className='p-10 ml-80 mb-12 w-1/2 h-1/2'>
        <div className='p-5 border ml-36 border-grey-400 w-80 h-80'>
          <div>
            <p className='text-lg text-grey-500 font-bold'>Upload File</p>
          </div>
          <div className='w-full h-52 p-4 mt-6 border border-dashed'>
            <div class="md:w-2/3 lg:w-full mt-14">
              <input class="bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-500 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="file" placeholder="URL" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Payment