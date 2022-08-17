import React, { useState } from 'react'

const ModalInput = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button type='button' className="p-2 w-32 mx-2 text-black font-semibold bg-secMain border-none rounded ease-linear transition-all duration-150 shadow hover:shadow-lg" onClick={() => setShowModal(true)}>
        Tambah Soal
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center backdrop-blur items-center overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 h-full p-10 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-grey-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Tambah Master Soal</h3>
                  <button
                    className="shadow hover:shadow-lg border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-white opacity-7 h-6 w-6 text-xl block bg-red py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-grey-50 shadow-md rounded px-8 pt-6 pb-8 w-full">
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
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-grey-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-secMain active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Tambah
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default ModalInput