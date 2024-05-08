import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/reviews')
            .then(res => setReviews(res.data))
    }, [])

    return (
        <section>
            <SectionTitle
                subHeading={'What our client say'}
                heading={'testimonials'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-20 text-center">
                {reviews.map(review => <SwiperSlide key={review._id}>
                    <div className="w-3/4 mx-auto flex flex-col items-center">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                        <FaQuoteLeft className="text-7xl my-1"/>
                        <p className="my-3">{review.details}</p>
                        <h5 className="text-yellow-400 text-2xl">{review.name}</h5>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </section>
    );
};

export default Testimonials;