import { ImSpoonKnife } from "react-icons/im";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"
import './AddItems.css';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // Now send the data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
            //     // Show success message
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
            }
        }
        console.log('with image url', res.data);
    }
    return (
        <div className="h-screen">
            <div>
                <SectionTitle subHeading={"What's new?"} heading={"add an item"}></SectionTitle>
            </div>
            <div className="w-3/5 mx-auto max-md:w-11/12 bg-slate-100 p-10 max-md:px-5 max-md:py-0 text-black" id="add-item-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-black">Recipe name*</span>
                        </div>
                        <input {...register("name")} type="text" placeholder="Recipe name" className="input input-bordered w-full" required id="name-input" />
                    </label>

                    {/* Category & Price */}
                    <div className="flex mt-6">
                        {/* Category */}
                        <label className="form-control w-full mr-5">
                            <div className="label">
                                <span className="label-text text-black">Category*</span>
                            </div>
                            <select {...register("category")} className="select select-bordered" required>
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
                            <input {...register("price")} type="number" placeholder="Price" className="input input-bordered w-full" required />
                        </label>
                    </div>

                    {/* Recipe Details */}
                    <label className="form-control mt-6">
                        <div className="label">
                            <span className="label-text text-black">Recipe Details</span>
                        </div>
                        <textarea {...register("recipe")} className="textarea textarea-bordered h-24  " placeholder="Describe the full recipe"></textarea>
                    </label>

                    {/* Image Input */}
                    <input {...register("image")} type="file" className="file-input file-input-bordered file-input-primary w-full bg-gray-400 mt-6" required /> <br />

                    <button type="submit" className="btn border-0 text-black mt-6">
                        Add Item <ImSpoonKnife></ImSpoonKnife>
                    </button>
                    {/* <input type="submit" /> */}
                </form>
            </div>
        </div>
    );
};

export default AddItems;