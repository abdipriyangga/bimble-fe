import React from 'react'
import LayoutAdmin from '../../components/Layouts/LayoutAdmin'

const EditMasterSoal = () => {
  return (
    <LayoutAdmin>
      <div className='p-5 w-full h-screen'>
        <h2 className='font-bold text-xl my-2' > Edit Master Soal - P3K - Teknis</h2>
        {/* FORM */}
        <div className="relative p-0 flex-auto">
          <form className="shadow-md rounded px-8 pt-4 pb-8 w-full">
            <label className="block text-black text-sm font-bold mb-1">
              Pertanyaan
            </label>
            <input className="shadow appearance-none border rounded w-full mb-2 py-2 px-1 text-black" />
            <label className="block text-black text-sm font-bold mb-1">
              Jawaban A
            </label>
            <input className="shadow appearance-none mb-2 border rounded w-full py-2 px-1 text-black" />
            <label className="block text-black text-sm font-bold mb-1">
              Jawaban B
            </label>
            <input className="shadow appearance-none mb-2 border rounded w-full py-2 px-1 text-black" />
            <label className="block text-black text-sm font-bold mb-1">
              Jawaban C
            </label>
            <input className="shadow appearance-none mb-2 border rounded w-full py-2 px-1 text-black" />
            <label className="block text-black text-sm font-bold mb-1">
              Jawaban D
            </label>
            <input className="shadow appearance-none mb-2 border rounded w-full py-2 px-1 text-black" />
            <label className="block text-black text-sm font-bold mb-1">
              Jawaban E
            </label>
            <input className="shadow appearance-none mb-2 border rounded w-full py-2 px-1 text-black" />
            <label className="block text-black text-sm font-bold mb-1">
              Jawaban Benar
            </label>
            <input className="shadow appearance-none mb-2 border rounded w-full py-2 px-1 text-black" />
            <label className="block text-black text-sm font-bold mb-1">
              Pembahasan
            </label>
            <input className="shadow appearance-none mb-2 border rounded w-full py-2 px-1 text-black" />
          </form>
          <div className="flex items-center justify-end p-6 border-t border-solid border-grey-200 rounded-b">
            <button
              className="text-white bg-secMain active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  )
}

export default EditMasterSoal