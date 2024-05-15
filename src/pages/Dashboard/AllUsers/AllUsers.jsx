import { FaTrashCan, FaUsers } from "react-icons/fa6";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useUsers from "../../../hooks/useUsers";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [users, refetch] = useUsers();

    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, do it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Confirmed!",
                                text: `${user.name} is an admin now.`,
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }

    const handleDeleteUser = (id) => {
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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Meal has deleted successfully.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className=" text-black">
            <SectionTitle subHeading={'How Many??'} heading={'manage all users'}></SectionTitle>
            <div className="w-4/5 mx-auto max-md:w-11/12">
                <div>
                    <h2 className="uppercase mb-5 text-2xl font-light">total users: {users.length}</h2>
                </div>
                <div className="overflow-x-auto">
                <table className="table mt-5">
                    {/* head */}
                    <thead className="text-black text-center bg-slate-600 text-white">
                        <tr className="border-0 uppercase">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {/* row 1 */}
                        {
                            users.map((user, index) => (
                                <tr className="border-0" key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className=''>{
                                        user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="p-full text-white btn btn-success"><FaUsers /></button>
                                    }</td>
                                    <td className="">
                                        <button className="btn btn-outline btn-error" onClick={() => handleDeleteUser(user._id)}><FaTrashCan /></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
            </div>

        </div >
    );
};

export default AllUsers;