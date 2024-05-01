import { Link } from 'react-router-dom';
import signUpImage from '../../assets/others/authentication2.png';
import './SignUp.css';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import UseAxiosPublic from '../../hooks/UseAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';


const SignUp = () => {

    const axiosPublic = UseAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // Create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "You have successfully created an user",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="flex flex-col sm:flex-row items-center justify-center h-screen" id='signUp-container'>
                <div className="w-10/12 h-[80vh] mx-auto shadow-lg shadow-slate-500 bg-transparent flex max-md:block max-md:shadow-none max-md:h-[100vh] px-10 max-md:px-0">
                    <div className="w-full sm:w-1/2 px-4 py-8 sm:py-0 order-2 sm:order-1 mt-7 max-md:mt-10 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
                            <h2 className="text-2xl font-semibold mb-4 text-center text-black">Sign Up</h2>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                                <input type="name" id="name" {...register("name")} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-white text-black" placeholder='Enter your name' required />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Photo URL</label>
                                <input type="text" id="photoURL" {...register("photoURL")} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-white text-black" placeholder='Enter photo url' required />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input type="email" id="email" {...register("email")} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-white text-black" placeholder='Enter your email' required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Password</label>
                                <input type="password" id="password" {...register("password")} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-white text-black" placeholder='Type your password' required {...register("password", { minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/ })} />

                                {/* Password validation error messages. */}
                                {errors.password?.type === "minLength" && <span className='text-red-600 text-xs'>Password should be at least 6 charecters.</span>}
                                {errors.password?.type === "maxLength" && <span className='text-red-600 text-xs'>Password must be less than 20 characters.</span>}
                                {errors.password?.type === "pattern" && (
                                    <span className='text-red-600 text-xs'>Password must contain at least one uppercase, one lowercase, one number and one special charecter.</span>
                                )}

                            </div>
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300" id='login-register-btn'>Sign Up</button>

                            <Link to='/login' className='label-text-alt link link-hover text-center' style={{ color: '#D1A054' }}><p id='already-done' className='mt-2'>Already registered? Go to login</p></Link>
                            <p className='text-xs text-black mt-2 text-center'>Or sign up with</p>

                            {/* Social login buttons */}
                            <SocialLogin></SocialLogin>

                        </form>
                    </div>
                    <div className="w-full sm:w-1/3 flex items-center justify-center order-1 sm:order-2 max-md:hidden">
                        <img src={signUpImage} alt="Sign Up" className="w-full max-w-xs" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;