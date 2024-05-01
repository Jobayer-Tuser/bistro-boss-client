import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";




const FoodCard = ({ item }) => {
    const { image, name, recipe, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = (food) => {
        if (user && user.email) {
            // Send cart item to database.
            console.log('Hello');
            const cartItem = {
                menuId: _id,
                email: user.email,
                name: food.name,
                image: food.image,
                price: food.price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} successfully added to your cart`,
                            showConfirmButton: false,
                            timer: 3000
                        });
                        // Refetch the cart to update the cart items count
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "Please login first",
                text: "Wanna go to login page?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, I want!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   Send the user to the login page.
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }
    return (
        <>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                    <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                    {price && <p className="absolute right-0 mr-4 mt-4 px-2 py-1 rounded-md bg-slate-900 text-white">${price}</p>}
                    <div className="card-body">
                        <h2 className="text-2xl text-center">{name}</h2>
                        <p className="text-center my-2">{recipe}</p>
                        <div className="card-actions justify-end mx-auto">
                            <button onClick={() => handleAddToCart(item)} className="btn text-yellow-200 font-medium" id="card-btn">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodCard;