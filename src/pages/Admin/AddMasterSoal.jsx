import React from 'react'
import LayoutAdmin from '../../components/Layouts/LayoutAdmin'

const AddMasterSoal = () => {
  return (
    <LayoutAdmin>
      <div className='p-5 w-full lg:w-3/4'>
        <h2 className='font-bold text-xl my-2' > Add Soal - P3K - Teknis</h2>
        {/* Table */}
        <div className="my-10">
          <form class="w-full max-w-screen-xl">
            <div class="md:flex md:items-center flex flex-wrap mx-3 mb-6">
              <div class="md:w-1/3 lg:w-full mb-3">
                <label class="block text-grey-500 tracking-wide font-bold md:text-left md:mb-0 pr-4" for="inline-full-name">
                  Pertanyaan
                </label>
              </div>
              <div class="md:w-2/3 lg:w-full">
                <input class="bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-500 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Pertanyaan" />
              </div>
            </div>
            <div class="md:flex md:items-center flex flex-wrap mx-3 mb-6">
              <div class="md:w-1/3 lg:w-full mb-3">
                <label class="block text-grey-500 font-bold md:text-left  md:mb-0 pr-4" for="inline-jawaban">
                  Jawaban
                </label>
              </div>
              <div className="md:flex md:items-center lg:w-full mb-6">
                <div class="md:w-1/3 lg:w-16 ml-10 mb-3">
                  <label class="block text-grey-500 font-bold md:text-left md:mb-0 pr-4" for="inline-password">
                    A
                  </label>
                </div>
                <div class="md:w-1/2 lg:w-full">
                  <input class="bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="Jawaban" />
                </div>
              </div>
              <div className="md:flex md:items-center lg:w-full mb-6">
                <div class="md:w-1/3 lg:w-16 ml-10 mb-3">
                  <label class="block text-grey-500 font-bold md:text-left md:mb-0 pr-4" for="inline-password">
                    B
                  </label>
                </div>
                <div class="md:w-1/2 lg:w-full">
                  <input class="bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="Jawaban" />
                </div>
              </div>
              <div className="md:flex md:items-center lg:w-full mb-6">
                <div class="md:w-1/3 lg:w-16 ml-10 mb-3">
                  <label class="block text-grey-500 font-bold md:text-left md:mb-0 pr-4" for="inline-password">
                    C
                  </label>
                </div>
                <div class="md:w-1/2 lg:w-full">
                  <input class="bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="Jawaban" />
                </div>
              </div>
              <div className="md:flex md:items-center lg:w-full mb-6">
                <div class="md:w-1/3 lg:w-16 ml-10 mb-3">
                  <label class="block text-grey-500 font-bold md:text-left md:mb-0 pr-4" for="inline-password">
                    D
                  </label>
                </div>
                <div class="md:w-1/2 lg:w-full">
                  <input class="bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="Jawaban" />
                </div>
              </div>
            </div>
            <div class="md:flex md:items-center flex flex-wrap mx-3 mb-6">
              <div class="md:w-1/3 lg:w-full mb-3">
                <label class="block text-grey-500 tracking-wide font-bold md:text-left md:mb-0 pr-4" for="inline-correct-answer">
                  Jawaban Benar
                </label>
              </div>
              <div class="md:w-2/3 lg:w-full">
                <input class="bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-500 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Jawaban Benar" />
              </div>
            </div>
            <div class="md:flex md:items-center flex flex-wrap mx-3 mb-6">
              <div class="md:w-1/3 lg:w-full mb-3">
                <label class="block text-grey-500 tracking-wide font-bold md:text-left md:mb-0 pr-4" for="inline-full-name">
                  Pembahasan
                </label>
              </div>
              <div class="md:w-2/3 lg:w-full">
                <input class="bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-500 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Pembahasan" />
              </div>
            </div>
            <div class="md:flex md:items-center flex flex-wrap mx-3 mb-6">
              <div class="md:w-1/3 lg:w-full mb-3">
                <label class="block text-grey-500 tracking-wide font-bold md:text-left md:mb-0 pr-4" for="inline-full-name">
                  Bobot
                </label>
              </div>
              <div class="md:w-2/3 lg:w-full">
                <input class="bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-500 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Bobot" />
              </div>
            </div>
            <div class="md:flex md:items-center lg:flex lg:justify-end">
              {/* <div class="md:w-1/3"></div> */}
              <div class="md:w-auto px-3">
                <button class="shadow bg-secMain hover:bg-amber-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                  Batal
                </button>
              </div>
              <div class="md:w-auto px-3">
                <button class="shadow bg-secMain hover:bg-amber-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                  Simpan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </LayoutAdmin>
  )
}

export default AddMasterSoal