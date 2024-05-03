import { ImSpoonKnife } from "react-icons/im";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"
import './AddItems.css';
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = UseAxiosPublic();
    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgbb and then get an url
        const imageFile = {image: data.image[0]};
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers:{
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data);
    }
    return (
        <div className="h-screen">
            <div>
                <SectionTitle subHeading={"What's new?"} heading={"add an item"}></SectionTitle>
            </div>
            <div className="w-4/5 mx-auto" id="add-item-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-black">Recipe name*</span>
                        </div>
                        <input {...register("name")} type="text" placeholder="Recipe name" className="input input-bordered w-full" required id="name-input"/>
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
                    <input {...register("image")} type="file" className="file-input file-input-bordered file-input-primary w-full bg-gray-400 mt-6" required/> <br />

                    {/* <label>First Name</label>
                    <input {...register("firstName")} /> */}

                    {/* <label>Gender Selection</label>
                    <select {...register("gender")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select> */}
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