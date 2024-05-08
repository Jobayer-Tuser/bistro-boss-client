import './Cart.css';
import useCart from '../../../hooks/useCart';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cart = () => {

    const [cart, refetch] = useCart();

    // Calculate total price with reducer
    const totalPrice = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price;
    }, 0);

    const handleDeleteItem = (id) => {
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
                axios.delete(`http://localhost:5000/carts/${id}`)
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
            <SectionTitle heading={'wanna add more'} subHeading={'My Cart'}></SectionTitle>
            <div className="grid grid-cols-3 gap-4 text-center uppercase">
                <div className=""><h4 className='text-2xl font-medium mb-8 mt-2'>Total Orders: {cart.length}</h4></div>
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
                    <thead className="" id='cart-table-header'>
                        <tr className="">
                            <th className="  bg-gray-200 text-left text-xs leading-4 font-medium uppercase tracking-wider text-center bg-slate-600 py-5 px-2">#</th>
                            <th className="bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider text-center bg-slate-600">Image</th>
                            <th className=" bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider text-center bg-slate-600">Item Name</th>
                            <th className=" bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider text-center bg-slate-600">Price</th>
                            <th className=" bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider text-center bg-slate-600">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-transparent mt-10">
                        {
                            cart.map((item, index) => (
                                <tr key={item._id}>
                                    <td className="border  whitespace-no-wrap">{index + 1}</td>
                                    <td className="border  whitespace-no-wrap"><img className="h-[75px] w-[75px] rounded-full mx-auto mt-5" src={item.image} alt="Placeholder" /></td>
                                    <td className="border  whitespace-no-wrap">{item.name}</td>
                                    <td className="border  whitespace-no-wrap">${item.price}</td>
                                    <td className="border  whitespace-no-wrap"><button className="btn btn-outline btn-error" onClick={() => handleDeleteItem(item._id)}><FaTrashCan /></button></td>
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

export default Cart;