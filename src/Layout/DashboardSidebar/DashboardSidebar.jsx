import { NavLink } from "react-router-dom";
import { FaBagShopping, FaBook, FaCartShopping, FaEnvelope, FaUsers } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { FaFilePen } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { GiWallet } from "react-icons/gi";
// import DashboardSidebar from "./DashboardSidebar/DashboardSidebar";
import useAdmin from "../../hooks/useAdmin";

const DashboardSidebar = ({ isOpen }) => {
    const [isAdmin] = useAdmin();
    return (
        <div className={`bg-gray-800 h-screen w-64 fixed top-0 left-0 overflow-y-auto transition-all duration-300 z-10 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="px-4 py-6">
                <h1 className="text-white text-xl font-semibold text-center">Dashboard</h1>
                <ul className="mt-6 text-white">
                    {
                        isAdmin ? <>
                            {/* Admin Dashboard Start Here. */}
                            <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                                <NavLink className='flex' to='/dashboard/adminHome'>
                                    <FaHouse className="mt-1" />
                                    <p className="ml-2">Admin Home</p>
                                </NavLink>
                            </li>
                            <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                                <NavLink className='flex' to='/dashboard/addItems'>
                                    <ImSpoonKnife className="mt-1" />
                                    <p className="ml-2">Add Items</p>
                                </NavLink>
                            </li>
                            <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                                <NavLink className='flex' to='/dashboard/manageItems'>
                                    <FaBars className="mt-1" />
                                    <p className="ml-2">Manage Items</p>
                                </NavLink>
                            </li>
                            <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                                <NavLink className='flex' to='/dashboard/manageBookings'>
                                    <FaBook className="mt-1" />
                                    <p className="ml-2">Manage Bookings</p>
                                </NavLink>
                            </li>
                            <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                                <NavLink className='flex' to='/dashboard/allUsers'>
                                    <FaUsers className="mt-1" />
                                    <p className="ml-2">All Users</p>
                                </NavLink>
                            </li>
                        </> : <>
                            {/* User Dashboard starts here. */}
                            <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                                <NavLink className='flex' to='/dashboard/userHome'>
                                    <FaHouse className="mt-1" />
                                    <p className="ml-2">User Home</p>
                                </NavLink>
                            </li>
                            <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                                <NavLink className='flex' to='/dashboard/reservation'>
                                    <FaCalendarDays className="mt-1" />
                                    <p className="ml-2">Reservation</p>
                                </NavLink>
                            </li>
                            <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                                <NavLink className='flex' to='/dashboard/paymentHistory'>
                                    <GiWallet className="mt-1" />
                                    <p className="ml-2">Payment History</p>
                                </NavLink>
                            </li>
                            <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                                <NavLink className='flex' to='/dashboard/review'>
                                    <FaFilePen className="mt-1" />
                                    <p className="ml-2">Add Review</p>
                                </NavLink>
                            </li>
                            <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                                <NavLink className='flex' to='/dashboard/bookings'>
                                    <FaBars className="mt-1" />
                                    <p className="ml-2">My Bookings</p>
                                </NavLink>
                            </li>
                            <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                                <NavLink className='flex' to='/dashboard/cart'>
                                    <FaCartShopping className="mt-1" />
                                    <p className="ml-2">My Cart</p>
                                </NavLink>
                            </li>
                        </>
                    }
                    <hr className="w-10/12 mx-auto my-5" />

                    <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                        <NavLink className='flex' to='/'>
                            <FaHouse className="mt-1" />
                            <p className="ml-2">Home</p>
                        </NavLink>
                    </li>
                    <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                        <NavLink className='flex' to='/dashboard/cart'>
                            <FaBars className="mt-1" />
                            <p className="ml-2">Menu</p>
                        </NavLink>
                    </li>
                    <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                        <NavLink className='flex' to='/dashboard/cart'>
                            <FaBagShopping className="mt-1" />
                            <p className="ml-2">Shop</p>
                        </NavLink>
                    </li>
                    <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                        <NavLink className='flex' to='/dashboard/cart'>
                            <FaEnvelope className="mt-1" />
                            <p className="ml-2">Contact</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;