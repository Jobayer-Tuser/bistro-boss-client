import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";
import { FaRegEdit, FaTrash } from "react-icons/fa";


const ManageItems = () => {
    const [menuItems, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted.`,
                        icon: "success"
                    });
                }

            }
        });
    }
    return (
        <>
            <div>
                <SectionTitle heading={'Manage All Items'} subHeading={'Hurry Up'}></SectionTitle>
            </div>
            <div className="w-4/5 mx-auto max-md:w-full">
                <div>
                    <h3 className="text-3xl max-md:text-xl mb-5">Total Items: {menuItems.length}</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-center text-black text-sm">
                            <tr className="">
                                <th className="font-normal">#</th>
                                <th className="font-normal">Item Image</th>
                                <th className="font-normal">Item Name</th>
                                <th className="font-normal">Price</th>
                                <th className="font-normal">Update</th>
                                <th className="font-normal">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                menuItems.map((item, index) => (
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="items-center">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            {item.name}
                                        </td>
                                        <td>${item.price}</td>
                                        <td>
                                            <button className="btn btn-success text-xl "><FaRegEdit /></button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDeleteItem(item)} className="btn btn-error text-xl"><FaTrash /></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageItems;