import './AdminHome.css';
import { FaWallet } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
import { PiVanFill } from "react-icons/pi";
import usePayments from '../../../hooks/usePayments';
import useMenu from '../../../hooks/useMenu';
import useUsers from '../../../hooks/useUsers';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const AdminHome = () => {
    const axiosSecure = useAxiosSecure();
    const [payments] = usePayments();
    const [menu] = useMenu();
    const [users] = useUsers();

    const allId = [];

    payments.map(payment => {
        const paymentId = payment.menuIds;
        paymentId.map(id => allId.push(id))
    })

    // Calculate total revenue
    const totalRevenue = payments.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price
    }, 0);

    // Get all items from cart
    const { data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allCarts`)
            return res.data;
        }
    })

    /* ------------------------
        Pi chart information
    --------------------------*/
    const data = [31, 21, 21, 28];

    // Total sum of all data values
    const total = data.reduce((acc, value) => acc + value, 0);

    // Calculate the start and end angles for each segment
    let startAngle = 0;
    let endAngle = 0;

    const segments = data.map((value, index) => {
        startAngle = endAngle;
        endAngle = startAngle + (value / total) * 360;

        // Calculate the x and y coordinates of the arc endpoints
        const x1 = Math.cos((startAngle - 90) * Math.PI / 180) * 50 + 50;
        const y1 = Math.sin((startAngle - 90) * Math.PI / 180) * 50 + 50;
        const x2 = Math.cos((endAngle - 90) * Math.PI / 180) * 50 + 50;
        const y2 = Math.sin((endAngle - 90) * Math.PI / 180) * 50 + 50;

        // Large arc flag
        const largeArcFlag = value / total > 0.5 ? 1 : 0;

        return (
            <path
                key={index}
                d={`M50,50 L${x1},${y1} A50,50 0 ${largeArcFlag},1 ${x2},${y2} Z`}
                fill={`hsl(${index * (360 / data.length)}, 70%, 50%)`}
            />
        );
    });

    return (
        <div className='w-4/5 mx-auto h-[100vh] max-md:h-full'>
            <h2 className="font-light text-3xl uppercase pt-10 text-black" id="rateUs">hi, welcome back!</h2>
            <div className="flex gap-4 justify-center mt-5 max-md:block">
                <div className="revenue-part text-white w-1/3 py-5 flex justify-center items-center rounded-xl max-md:w-full mt-2">
                    <span className="text-4xl mr-5"><FaWallet /></span>
                    <div>
                        <h3 className="uppercase text-4xl font-bold text-left">{Math.floor(totalRevenue)}</h3>
                        <p className="uppercase text-left">revenue</p>
                    </div>
                </div>
                <div className="customers-part text-white w-1/3 py-5 flex justify-center items-center rounded-xl max-md:w-full mt-2">
                    <span className="text-4xl mr-5"><IoPeople /></span>
                    <div>
                        <h3 className="uppercase text-4xl font-bold text-left">{users.length}</h3>
                        <p className="uppercase text-left ml-1">customers</p>
                    </div>
                </div>
                <div className="products-part text-white w-1/3 py-5 flex justify-center items-center rounded-xl max-md:w-full mt-2">
                    <span className="text-4xl mr-5"><MdFastfood /></span>
                    <div>
                        <h3 className="uppercase text-4xl font-bold text-left">{menu.length}</h3>
                        <p className="uppercase text-left">products</p>
                    </div>
                </div>
                <div className="orders-part text-white w-1/3 py-5 flex justify-center items-center rounded-xl max-md:w-full mt-2">
                    <span className="text-4xl mr-5"><PiVanFill /></span>
                    <div>
                        <h3 className="uppercase text-4xl font-bold text-left">{cart.length}</h3>
                        <p className="uppercase text-left">orders</p>
                    </div>
                </div>
            </div>

            <div className="w-8/12 mx-auto mt-20 flex items-center justify-center pb-10">
                {/* Pi chart here */}
                <div className=''>
                    <svg viewBox="0 0 100 100" className="w-40 h-40">
                        {segments}
                    </svg>
                </div>

            </div>

        </div>
    );
};

export default AdminHome;