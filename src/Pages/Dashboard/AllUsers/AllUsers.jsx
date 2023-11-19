import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = UseAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  });


  const handleMakeAdmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin now!!`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch(error => {
        console.error("Error making user admin:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to make user admin.",
          icon: "error"
        });
      });
  }

  const handleDeleteUser = user => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success"
              });
            }
          })
          .catch(error => {
            console.error("Error deleting user:", error);
            Swal.fire({
              title: "Error",
              text: "Failed to delete user.",
              icon: "error"
            });
          });
      }
    });
  }

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl"> All Users </h2>
        <h2 className="text-3xl"> Total Users {users.length} </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === 'admin' ? 'Admin' :
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-ghost btn-lg">
                        <FaUsers></FaUsers>
                      </button>}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="btn btn-ghost btn-lg">
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
