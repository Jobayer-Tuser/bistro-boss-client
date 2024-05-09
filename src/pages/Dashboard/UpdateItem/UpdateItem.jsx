import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateItem = () => {
    const { name, category, price, recipe, _id } = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const updatedInfo = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe
        }
        const updateRes = await axiosSecure.patch(`/updateItem/${_id}`, updatedInfo);
        if (updateRes.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} has been updated.`,
                showConfirmButton: false,
                timer: 1500
            });
            reset();
        }
    }

    return (
        <div>
            <h2 className="text-3xl text-center uppercase">update item</h2>
            <div className="w-4/5 mx-auto" id="add-item-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-black">Recipe name*</span>
                        </div>
                        <input {...register("name")} type="text" placeholder="Recipe name" className="input input-bordered w-full" id="name-input" defaultValue={name} required />
                    </label>

                    {/* Category & Price */}
                    <div className="flex mt-6">
                        {/* Category */}
                        <label className="form-control w-full mr-5">
                            <div className="label">
                                <span className="label-text text-black">Category*</span>
                            </div>
                            <select {...register("category")} className="select select-bordered" defaultValue={category} required>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>
                        {/* Price */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-black">Price*</span>
                            </div>
                            <input {...register("price")} type="number" placeholder="Price" className="input input-bordered w-full" defaultValue={price} required />
                        </label>
                    </div>

                    {/* Recipe Details */}
                    <label className="form-control mt-6">
                        <div className="label">
                            <span className="label-text text-black">Recipe Details</span>
                        </div>
                        <textarea {...register("recipe")} className="textarea textarea-bordered h-24  " placeholder="Describe the full recipe" defaultValue={recipe} required></textarea>
                    </label>

                    <button type="submit" className="btn border-0 text-black mt-6">
                        Update Item <ImSpoonKnife></ImSpoonKnife>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;