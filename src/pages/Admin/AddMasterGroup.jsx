import React from 'react'
import LayoutAdmin from '../../components/Layouts/LayoutAdmin'
const AddMasterGroup = () => {
  return (
    <LayoutAdmin>
      <div className='p-5 w-full'>
        <h2 className='font-bold text-xl my-2' > Add Group - P3K - Teknis</h2>
        {/* Table */}
        <div className="my-10">
          <form class="w-full ">
            <div class="md:flex md:items-center flex flex-wrap mx-3 mb-6">
              <div class="md:w-1/3 lg:w-full mb-3">
                <label class="block text-black tracking-wide font-bold md:text-left md:mb-0 pr-4" for="inline-full-name">
                  Nama Group
                </label>
              </div>
              <div class="md:w-2/3 lg:w-full">
                <input class="bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-500 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="" />
              </div>
            </div>
            <div class="md:flex md:items-center flex flex-wrap mx-3 mb-6">
              <div class="md:w-1/3 lg:w-full mb-3">
                <label class="block text-black tracking-wide font-bold md:text-left md:mb-0 pr-4" for="inline-correct-answer">
                  Sub Kategori
                </label>
              </div>
              <div class="md:w-2/3 lg:w-full">
                <input class="bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-500 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Sub Kategori" />
              </div>
            </div>
            <div class="md:flex md:items-center flex flex-wrap mx-3 mb-6">
              <div class="md:w-1/3 lg:w-full mb-3">
                <label class="block text-black tracking-wide font-bold md:text-left md:mb-0 pr-4" for="inline-full-name">
                  URL
                </label>
              </div>
              <div class="md:w-2/3 lg:w-full">
                <input class="bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-500 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="URL" />
              </div>
            </div>
            <div class="md:flex md:items-center flex flex-wrap mx-3 mb-6">
              <div class="md:w-1/3 lg:w-full mb-3">
                <label class="block text-black tracking-wide font-bold md:text-left md:mb-0 pr-4" for="inline-full-name">
                  Status
                </label>
              </div>
              <div class="md:w-2/3 lg:w-full">
                <input class="bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-500 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Status" />
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

export default AddMasterGroup