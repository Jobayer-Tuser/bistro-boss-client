import { FaWallet } from "react-icons/fa6";
import { FaStore } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import './UserHome.css';
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import useMenu from "../../../hooks/useMenu";
import useReviews from "../../../hooks/useReviews";
import useBookings from "../../../hooks/useBookings";

const UserHome = () => {

    const {user} = useAuth();
    const [cart] = useCart();
    const [menu] = useMenu();
    const [reviews] = useReviews();
    const [bookings] = useBookings();
    
    return (
        <div>
            <h2 className="uppercase text-2xl bold" id="rateUs">hi, welcome back!</h2>
            <div className="flex gap-4 justify-center mt-5">
                <div className="menu-part text-white w-1/3 py-5 flex justify-center items-center rounded-xl">
                    <span className="text-4xl mr-5"><FaWallet /></span>
                    <div>
                        <h3 className="uppercase text-4xl font-bold text-left">{menu.length}</h3>
                        <p className="uppercase text-left">menu</p>
                    </div>
                </div>
                <div className="shop-part text-white w-1/3 py-5 flex justify-center items-center rounded-xl">
                    <span className="text-4xl mr-5"><FaStore /></span>
                    <div>
                        <h3 className="uppercase text-4xl font-bold text-left">103</h3>
                        <p className="uppercase text-left ml-1">shop</p>
                    </div>
                </div>
                <div className="contact-part text-white w-1/3 py-5 flex justify-center items-center rounded-xl">
                    <span className="text-4xl mr-5"><FaPhoneVolume /></span>
                    <div>
                        <h3 className="uppercase text-4xl font-bold text-left">03</h3>
                        <p className="uppercase text-left">contact</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center my-10">
                <div className="user-info text-center w-full py-20 h-[350px]">
                    <img src={`${user.photoURL}`} alt="" className="inline-block mb-10" />
                    <h2 id="rateUs" className="uppercase text-xl">{user.displayName}</h2>
                </div>
                <div className="user-activity w-full py-20 h-[350px]">
                    <div className="px-10" id="rateUs">
                        <h2 className="uppercase text-2xl font-light mb-5">your activities</h2>
                        <p className="text-primary flex uppercase">
                            <IoCart className="mr-2 text-xl" />
                            <span>Orders: {cart.length}</span>
                        </p>
                        <p className="text-success flex uppercase my-1">
                            <FaStar className="mr-2 text-xl" />
                            <span>reviews: {reviews.length}</span>
                        </p>
                        <p className="text-warning flex uppercase">
                            <FaRegCalendarDays className="mr-2 text-xl" />
                            <span>bookings: {bookings.length}</span>
                        </p>
                        <p className="text-red-500 flex uppercase mt-1">
                            <FaWallet className="mr-2 text-xl" />
                            <span>Payment: 6</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;