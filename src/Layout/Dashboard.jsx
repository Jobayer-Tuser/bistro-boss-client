import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { FaFilePen } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";


const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="flex bg-gray-200">
                {/* Sidebar */}
                <div className={`w-64 bg-gray-800 text-white ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <div className="flex items-center justify-center h-16 bg-gray-900">
                        <span className="text-xl font-semibold">Dashboard</span>
                    </div>
                    <ul className="py-4">
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
                        <hr className="w-10/12 mx-auto my-5"/>
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

{/* <div className="flex">
    <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu text-black">
            <li>
                <NavLink to='/dashboard/userHome'>
                    <FaCartShopping></FaCartShopping>
                    User Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/reservation'>
                    <FaCartShopping></FaCartShopping>
                    Reservation
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/review'>
                    <FaCartShopping></FaCartShopping>
                    Add Review
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/bookings'>
                    <FaCartShopping></FaCartShopping>
                    My Bookings
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/cart'>
                    <FaCartShopping></FaCartShopping>
                    My Cart
                </NavLink>
            </li>
        </ul>
    </div>
    <div className="flex-1">
        <Outlet></Outlet>
    </div>
</div> */}