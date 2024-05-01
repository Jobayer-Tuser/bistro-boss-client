import { FaTrashCan, FaUsers } from "react-icons/fa6";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

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
        <>
            <SectionTitle subHeading={'How Many??'} heading={'manage all users'}></SectionTitle>
            <div>
                <h2 className="uppercase mb-5 text-2xl font-light">total users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto h-[100vh]">
                <table className="min-w-full text-center">
                    <thead className="" id='cart-table-header'>
                        <tr className="">
                            <th className="  bg-gray-200 text-left text-xs leading-4 font-medium uppercase tracking-wider text-center bg-slate-600 py-5 px-2">#</th>
                            <th className="bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider text-center bg-slate-600">Name</th>
                            <th className=" bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider text-center bg-slate-600">Email</th>
                            <th className=" bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider text-center bg-slate-600">Role</th>
                            <th className=" bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider text-center bg-slate-600">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-transparent">
                        {
                            users.map((user, index) => (
                                <tr key={user._id} className="">
                                    <td className="border  whitespace-no-wrap">{index + 1}</td>
                                    <td className="border  whitespace-no-wrap">{user.name}</td>
                                    <td className="border  whitespace-no-wrap">{user.email}</td>
                                    <td className="border  whitespace-no-wrap w-11 rounded">
                                        <button className="p-full text-white btn btn-success"><FaUsers /></button>
                                    </td>
                                    <td className="border  whitespace-no-wrap"><button className="btn btn-outline btn-error" onClick={() => handleDeleteUser(user._id)}><FaTrashCan /></button></td>
                                </tr>
                            ))
                        }
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllUsers;