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
                axios.delete(`https://bistro-boss-server-two-alpha.vercel.app/carts/${id}`)
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
        <div className="bg-gray-200 text-black">
            <div>
                <SectionTitle heading={'Manage All Items'} subHeading={'Hurry Up'}></SectionTitle>
            </div>
            <div className="w-4/5 mx-auto max-md:w-full">
                <div className="grid grid-cols-3 gap-4 text-center uppercase text-black">
                    <div className=""><h4 className='text-2xl font-medium mb-8 mt-2 max-md:text-xl max-sm:text-xs max-md:mb-2'>Total Orders: {cart.length}</h4></div>
                    <div className=""><h4 className='text-2xl font-medium mb-8 mt-2 max-md:text-xl max-sm:text-xs max-md:mb-2'>Total Price: ${totalPrice}</h4></div>
                    <div className=" max-md:text-xl max-sm:text-xs max-md:mb-2">
                        {
                            cart.length ? <Link to='/dashboard/payment'>
                                <button className='btn btn-success'>Pay Now</button>
                            </Link> : <button disabled className='btn text-slate-600' id='disabled-btn'>Pay Now</button>
                        }
                    </div>
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
                                <th className="font-normal">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                cart.map((item, index) => (
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
                                        <td className=""><button className="btn btn-outline btn-error" onClick={() => handleDeleteItem(item._id)}><FaTrashCan /></button></td>
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

export default Cart;


/* 

<div className='w-4/5 mx-auto bg-white'>
            <SectionTitle heading={'wanna add more'} subHeading={'My Cart'}></SectionTitle>
            <div className="grid grid-cols-3 gap-4 text-center uppercase text-black">
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
                            <th className="  bg-gray-200 text-left text-xs leading-4 font-medium uppercase tracking-wider text-center bg-slate-600 py-5 px-2 text-white">#</th>
                            <th className="bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider text-center bg-slate-600 text-white">Image</th>
                            <th className=" bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider text-center bg-slate-600 text-white">Item Name</th>
                            <th className=" bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider text-center bg-slate-600 text-white">Price</th>
                            <th className=" bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider text-center bg-slate-600 text-white">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-transparent mt-10 text-black">
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
                        </tbody>
                        </table>
                    </div>
                </div>


*/