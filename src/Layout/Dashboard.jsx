import { NavLink, Outlet } from "react-router-dom";
import { FaBagShopping, FaBook, FaCartShopping, FaEnvelope, FaUsers } from "react-icons/fa6";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { FaFilePen } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";


const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Todo: get isAdmin value from the database.
    const isAdmin = true;

    return (
        <>
            <div className="flex bg-gray-200">
                {/* Sidebar */}
                <div className={`w-64 bg-gray-800 text-white ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <div className="flex items-center justify-center h-16 bg-gray-900">
                        <span className="text-xl font-semibold">Dashboard</span>
                    </div>
                    <ul className="py-4">
                        {
                            isAdmin ? <>
                                {/* Admin Dashboard Start Here. */}
                                <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                                    <NavLink className='flex' to='/'>
                                        <FaHouse className="mt-1" />
                                        <p className="ml-2">Admin Home</p>
                                    </NavLink>
                                </li>
                                <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                                    <NavLink className='flex' to='/dashboard/reservation'>
                                        <ImSpoonKnife className="mt-1" />
                                        <p className="ml-2">Add Items</p>
                                    </NavLink>
                                </li>
                                <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                                    <NavLink className='flex' to='/dashboard/review'>
                                        <FaBars className="mt-1" />
                                        <p className="ml-2">Manage Items</p>
                                    </NavLink>
                                </li>
                                <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                                    <NavLink className='flex' to='/dashboard/bookings'>
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
                                    <NavLink className='flex' to='/'>
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

                        {/* Devider */}
                        <hr className="w-10/12 mx-auto my-5" />

                        <li className="px-8 py-2 hover:bg-gray-700 cursor-pointer mt-2">
                            <NavLink className='flex' to='/dashboard/cart'>
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
                {/* Content */}
                <div className="flex-1 max-md:w-full">
                    <button
                        onClick={toggleSidebar}
                        className="block md:hidden px-4 py-2 text-white bg-gray-800 focus:outline-none"
                    >
                        {isOpen ? <FaXmark /> : <FaAngleRight />}
                    </button>
                    <div className="p-4 text-black">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;

