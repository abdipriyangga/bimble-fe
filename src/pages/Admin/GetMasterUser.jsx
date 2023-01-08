import React from 'react'
import { useNavigate } from 'react-router-dom'
import LayoutAdmin from '../../components/Layouts/LayoutAdmin'
import Swal from 'sweetalert2'
import Data from '../../data-user.json'
const GetMasterUser = () => {
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
          "Your data has been deleted.",
          "success"
        );
        history("/admin/getMasterGroup");
        setTimeout(() => {
          window.location.reload(false);
        }, 500);
        console.log("page to reload");
      }
    });
  };
  return (
    <LayoutAdmin>
      <div className='p-5 lg:w-3/4 w-full'>
        <h2 className='font-bold text-xl my-2' >Master List User</h2>
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
          {/* <div>
            <Link to="/admin/addGroup" type='button' className="p-2 w-32 mx-2 text-black font-semibold bg-secMain border-none rounded ease-linear transition-all duration-150 shadow hover:shadow-lg">
              Tambah Grup
            </Link>
          </div> */}
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
                        Nama Siswa
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
                        Nomor Telepon
                      </th>

                    </tr>
                  </thead>
                  {
                    Data.map((user_data, idx) => {
                      return (
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 ">
                              {idx + 1}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 ">
                              {user_data.name}
                            </td>
                            <td className="text-sm text-center text-gray-800 w-48 whitespace-pre-line ">
                              {user_data.email}
                            </td>
                            <td className="text-sm text-center text-gray-800">
                              {user_data.no_hp}
                            </td>
                          </tr>
                        </tbody>
                      )
                    })
                  }

                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  )
}

export default GetMasterUser