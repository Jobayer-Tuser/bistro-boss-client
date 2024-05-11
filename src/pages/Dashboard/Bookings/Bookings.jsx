import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { FaTrashCan } from "react-icons/fa6";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import './Bookings.css';
import Swal from "sweetalert2";
import useBookings from "../../../hooks/useBookings";


const Bookings = () => {
    const axiosPublic = useAxiosPublic();
    const [bookings, refetch] = useBookings();
    const [cart] = useCart()

    const totalPrice = bookings.reduce((accumulator, currentItem) => {
        return accumulator + parseFloat(currentItem.person.split(' ')[0]) * 14;
    }, 0);

    const handleDeleteBooking = (item) => {
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
                const res = await axiosPublic.delete(`/bookings/${item._id}`)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your booking has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }

    return (
        <div>
            <SectionTitle subHeading={'Excellent Ambience'} heading={'My bookings'}></SectionTitle>
            <div className="grid grid-cols-3 gap-4 text-center uppercase" id='rateUs'>
                <div className=""><h4 className='text-2xl font-medium mb-8 mt-2'>Total Bookings: {bookings.length}</h4></div>
                <div className=""><h4 className='text-2xl font-medium mb-8 mt-2'>Total Price: ${totalPrice}</h4></div>
                <div className="">
                    {
                        cart.length ? <Link to='/dashboard/payment'>
                            <button className='btn btn-success'>Pay Now</button>
                        </Link> : <button disabled className='btn text-slate-600' id='disabled-btn'>Pay Now</button>
                    }
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full text-center">
                    <thead className="" id='bookings-table-header'>
                        <tr className="">
                            <th className="  bg-gray-200 text-left text-xs leading-4 font-medium uppercase tracking-wider text-center bg-slate-600 py-5 px-2">#</th>
                            <th className="bg-gray-200 text-left text-xs leading-4 font-medium uppercase tracking-wider text-center bg-slate-600">Name</th>
                            <th className=" bg-gray-200 text-left text-xs leading-4 font-medium uppercase tracking-wider text-center bg-slate-600">Date</th>
                            <th className=" bg-gray-200 text-left text-xs leading-4 font-medium uppercase tracking-wider text-center bg-slate-600">Guest</th>
                            <th className=" bg-gray-200 text-left text-xs leading-4 font-medium uppercase tracking-wider text-center bg-slate-600">Phone</th>
                            <th className=" bg-gray-200 text-left text-xs leading-4 font-medium uppercase tracking-wider text-center bg-slate-600">Price</th>
                            <th className=" bg-gray-200 text-left text-xs leading-4 font-medium uppercase tracking-wider text-center bg-slate-600">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-transparent mt-10">
                        {
                            bookings.map((item, index) => (
                                <tr key={item._id}>
                                    <td className="border  whitespace-no-wrap">{index + 1}</td>
                                    <td className="border  whitespace-no-wrap">{item.name}</td>
                                    <td className="border  whitespace-no-wrap">{item.date}</td>
                                    <td className="border  whitespace-no-wrap">{item.person}</td>
                                    <td className="border  whitespace-no-wrap">{item.phone}</td>
                                    <td className="border  whitespace-no-wrap">${item.person.split(' ')[0] * 14}</td>
                                    <td className="border  whitespace-no-wrap"><button className="btn btn-outline btn-error" onClick={() => handleDeleteBooking(item)}><FaTrashCan /></button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;