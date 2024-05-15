import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Review.css';
import { IoRocket } from "react-icons/io5";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
    const [rating, setRating] = useState(0);
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const handleStarClick = (starValue) => {
        setRating(starValue);
    };

    const { handleSubmit, register, reset } = useForm();

    const handleReview = async (data) => {
        const reviewData = {
            name: data.name,
            itemName: data.itemName,
            suggestion: data.suggestion,
            details: data.detailReview,
            rating: rating,
            email: user.email
        }
        const res = await axiosPublic.post('/reviews', reviewData);
        if (res.data.insertedId) {
            reset();
            setRating(0);
            Swal.fire("Thanks for your constructive review.");
            console.log('Hurrah done.');
        }
    }
    return (
        <div className="bg-white pb-8 max-md:bg-slate-300">
            <SectionTitle subHeading={'Sharing is Caring!!!'} heading={'give a review'}></SectionTitle>
            <div className="w-4/5 mx-auto bg-slate-300 px-20 py-10 text-center my-20 max-md:w-full max-md:px-5">
                <h2 className="uppercase text-3xl text-black" id="rateUs">rate us!</h2>
                <div className="my-5">
                    <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={star <= rating ? 'star filled' : 'star'}
                                onClick={() => handleStarClick(star)}
                            >
                                <span className="text-5xl">★</span>
                            </span>
                        ))}
                    </div>
                </div>
                <div className="text-center text-black">
                    <form onSubmit={handleSubmit(handleReview)}>
                        <label className="form-control w-full mb-8">
                            <div className="label">
                                <span className="label-text text-black text-md">Your name</span>
                            </div>
                            <input type="text" placeholder="Your name" className="input input-bordered w-full bg-slate-200" {...register('name')} />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-black text-md">Which recipe you liked most?</span>
                            </div>
                            <input type="text" placeholder="Recipe you liked most" className="input input-bordered w-full bg-slate-200" {...register('itemName')} />
                        </label>
                        <label className="form-control w-full my-8">
                            <div className="label">
                                <span className="label-text text-black text-md">Do you have any suggestion for us?</span>
                            </div>
                            <input type="text" placeholder="Suggestion" className="input input-bordered w-full bg-slate-200" {...register('suggestion')} />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-black text-md">Please kindly express your care in a short way</span>
                            </div>
                            <textarea type="text" placeholder="Review in detail" className="textarea input-bordered w-full bg-slate-200" {...register('detailReview')} />
                        </label>
                        <button type="submit" className="btn btn-primary mt-5">Send Review <IoRocket /></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;