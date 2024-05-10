import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Reservation.css';
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const Reservation = () => {
    const {register, handleSubmit} = useForm();
    const axiosPublic = useAxiosPublic();

    const handleBooking = async (data) => {
        const res = await axiosPublic.post('/bookings', data);
        if(res.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your booking is confirmed.",
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    return (
        <>
            <SectionTitle subHeading={'Reservation'} heading={'book a table'}></SectionTitle>
            <form onSubmit={handleSubmit(handleBooking)}>
                <div className="flex gap-4 justify-between">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black">Date</span>
                        </div>
                        <input type="date" placeholder="mm/dd/yyyy" className="input input-bordered w-full max-w-xs text-black bg-slate-400" {...register("date")}/>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black">Time</span>
                        </div>
                        <input type="time" placeholder="__ / __ __" className="input input-bordered w-full max-w-xs text-black bg-slate-400" {...register("time")}/>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black">Guest</span>
                        </div>
                        <select
                            className="block appearance-none w-full bg-slate-400 input hover:border-gray-500  rounded shadow leading-tight text-black" {...register("person")}>
                            <option value="1 person" defaultValue={'1 person'} className="text-black">1 Person</option>
                            <option value="2 person">2 Person</option>
                            <option value="3 person">3 Person</option>
                            <option value="4 person">4 Person</option>
                            <option value="5 person">5 Person</option>
                            <option value="6 person">6 Person</option>
                        </select>
                    </label>
                </div>
                <div className="flex gap-4 justify-between mt-10">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black">Name</span>
                        </div>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs text-black bg-slate-400 custom-placeholder" {...register("name")}/>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black">Phone</span>
                        </div>
                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs text-black bg-slate-400 custom-placeholder" {...register("phone")}/>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black">Email</span>
                        </div>
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs text-black bg-slate-400 custom-placeholder" {...register("email")}/>
                    </label>
                </div>
                <div className="text-center"><button className="btn btn-primary mt-10">Book A Table</button></div>
            </form>

            <SectionTitle subHeading={'Visit Us'} heading={'our location'}></SectionTitle>

            {/* Reservation Footer */}
            <div className="flex gap-2 items-center">
                <div className="bg-slate-600 text-white w-full py-3 text-xl">
                    <FaPhoneVolume className="mx-auto"/>
                </div>
                <div className="bg-slate-600 text-white w-full py-3 text-xl">
                    <FaLocationDot className="mx-auto"/>
                </div>
                <div className="bg-slate-600 text-white w-full py-3 text-xl">
                    <FaClock className="mx-auto"/>
                </div>
            </div>
            <div className="bg-slate-300 flex justify-between text-center w-full py-10">
                <div className=" mx-auto">
                    <h2 className="uppercase mb-1">phone</h2>
                    <p className="text-xs">+380123456789</p>
                </div>
                <div className=" mx-auto">
                    <h2 className="uppercase mb-1">address</h2>
                    <p className="text-xs">28, 22 Greater Rd, Rajshahi 6000</p>
                </div>
                <div className=" mx-auto">
                    <h2 className="uppercase mb-1">working hours</h2>
                    <p className="text-xs mt-1">Mon-Fri 08:00-22:00</p>
                    <p className="text-xs">Sat-Sun 10:00-23:00</p>
                </div>
            </div>
        </>
    );
};

export default Reservation;