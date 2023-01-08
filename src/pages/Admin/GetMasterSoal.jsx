import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LayoutAdmin from '../../components/Layouts/LayoutAdmin'
import Swal from 'sweetalert2'
import Accordion from '../../components/Accordions/Accordion'

const GetMasterSoal = () => {
  const history = useNavigate()
  const onDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // dispatch(deleteHistory(props.auth.token, id));
        Swal.fire(
          "Deleted!",
          "Your history has been deleted.",
          "success"
        );
        history("/admin/getMasterSoal");
        setTimeout(() => {
          window.location.reload(false);
        }, 500);
        console.log("page to reload");
      }
    });
  };
  return (
    <LayoutAdmin>
      <div className='p-5 w-full lg:w-3/4 '>
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
          <div className='text-center'>
            <Link to="/admin/add-soal" type='button' className="p-2 w-32 mx-2 text-black font-semibold bg-secMain border-none rounded ease-linear transition-all duration-150 shadow hover:shadow-lg">
              Tambah Soal
            </Link>
          </div>
        </div>
        {/* Table */}

        {/* Start Accordion */}
        <div className='flex p-2 mt-2 w-full lg:w-full bg-grey-200'>
          <div className='flex w-full justify-between  text-grey-500 font-bold'>
            <div className='p-2'>
              <span className='m-5'>No</span>
              <span className='m-5'>Pertanyaan</span>
            </div>
            <div className='p-2 '>
              <span className='-ml-24 p-2 text-center'>Action</span>
            </div>

          </div>
        </div>
        <Accordion />
        {/* end accordion */}
      </div>
    </LayoutAdmin>
  )
}

export default GetMasterSoal