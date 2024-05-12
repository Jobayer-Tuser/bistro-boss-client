import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './ManageBookings.css';
import { FaCheck } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { RxCross1 } from "react-icons/rx";


const ManageBookings = () => {
    const axiosSecure = useAxiosSecure();

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allBookings');
            return res.data;
        }
    });

    const handleConfirmBooking = (bookingItem) => {
        console.log('confirmed', bookingItem.email);
    }

    return (
        <div>
            <SectionTitle subHeading={'At a Glance!'} heading={'manage all bookings'}></SectionTitle>
            <div className="bg-slate-300 w-11/12 mx-auto px-5 py-10">
                <h2 className="uppercase text-3xl" id="rateUs">total items: 6</h2>
                <div className="overflow-x-auto">
                    <table className="table mt-5">
                        {/* head */}
                        <thead className="text-black text-center bg-slate-600 text-white">
                            <tr className="border-0 uppercase">
                                <th>#</th>
                                <th>user email</th>
                                <th>phone number</th>
                                <th>booking date</th>
                                <th>booking time</th>
                                <th>activity</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {/* row 1 */}
                            {
                                bookings.map((booking, index) => (
                                    <tr className="border-0" key={booking._id}>
                                        <th>{index + 1}</th>
                                        <th className="font-normal">{booking.email}</th>
                                        <td>{booking.phone}</td>
                                        <td>{booking.date}</td>
                                        <td>{booking.time}</td>
                                        <td className={booking.status === 'done' ? 'text-green-600 capitalize' : 'text-yellow-600 capitalize'}>{booking.status}</td>
                                        <td>{booking.status === 'done' ? <>
                                            <button disabled="disabled" className={"btn btn-circle btn-md"} id="disabled-btn1">
                                                <FaCheck />
                                            </button>
                                            <button disabled='disabled' className="btn btn-circle btn-error btn-md ml-2" id="disabled-btn2">
                                                <RxCross1 />
                                            </button>
                                        </> : (
                                            <>
                                                <button onClick={() => handleConfirmBooking(booking)} className={"btn btn-circle btn-success btn-md"}>
                                                    <FaCheck />
                                                </button>
                                                <button className="btn btn-circle btn-error btn-md ml-2">
                                                    <RxCross1 />
                                                </button>
                                            </>
                                        )}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageBookings;