import { Helmet } from 'react-helmet';
import loginImg from '../../assets/others/Illustration.svg';
import './Login.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa6";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    const captchaRef = useRef();

    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    let captcha = false;

    // Handle Captcha
    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value) === true) {
            return captcha = true;
        }
        else {
            return captcha = false;
        }
    }

    // Handle Login
    const handleLogin = (event) => {
        event.preventDefault();
        if (captcha === true) {
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            signIn(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    Swal.fire({
                        title: 'You have successfully logged in.',
                        showClass: {
                            popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                            popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        }
                    });
                })
        }
        else {
            Swal.fire({
                title: 'Please carefully put the captcha',
                showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
            });
        }
        

    }

    return (
        <>
            <Helmet><title>Bistro-Boss | Login</title></Helmet>
            <div className="hero min-h-screen" id='login-container'>
                <div className='w-4/5 shadow-lg shadow-slate-500 h-4/5 max-md:shadow-none max-md:w-full max-md:h-[100vh]'>
                    <div className="hero-content flex max-md:flex-col justify-between mt-5 max-md:mt-0">
                        <div className="text-center lg:text-left ml-20 w-1/3 max-md:w-full max-md:m-0">
                            <img src={loginImg} alt="" className='bg-transparent' />
                        </div>
                        <div className="card shrink-0 w-full max-w-md  bg-transparent mr-20 max-md:m-0 max-md:w-full">
                            <h3 className="text-2xl text-black text-center font-bold">Login</h3>
                            <form onSubmit={handleLogin} className="">
                                <div className="form-control">
                                    <label className="">
                                        <span className="text-black">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered bg-white text-black my-2" required />
                                </div>
                                <div className="form-control">
                                    <label className="">
                                        <span className="text-black">Password</span>
                                    </label>
                                    <input name="password" type="password" placeholder="password" className="input input-bordered bg-white text-black my-2" required />
                                </div>

                                {/* Captcha */}
                                <div className="form-control">
                                    <div className='text-sm'>
                                        <LoadCanvasTemplate />
                                    </div>
                                    <input onBlur={handleValidateCaptcha} name="captcha" type="text" ref={captchaRef} placeholder="Type the captcha given above" className="input input-bordered bg-white text-black my-2" required />
                                </div>

                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign In" className="btn" id='login-register-btn' />
                                </div>
                                <label className="text-center block mt-5">
                                    <Link to='/signup' className="label-text-alt link link-hover text-black mt-2" style={{ color: '#D1A054' }}> <p id='already-done'>New here?Create an account</p> </Link>
                                    <p className='text-xs text-black mt-2'>Or sign in with</p>
                                </label>
                                <div className="flex justify-center mt-5 text-slate-600 text-xl">
                                    <a href="#" className='border-solid border-2 border-slate-500 w-[40px] h-[40px] flex justify-center items-center rounded-full social-link'>
                                        <div><FaFacebookF /></div>
                                    </a>
                                    <a href="#" className='border-solid border-2 border-slate-500 w-[40px] h-[40px] flex justify-center items-center rounded-full mx-5 social-link'>
                                        <div><FaGoogle /></div>
                                    </a>
                                    <a href="#" className='border-solid border-2 border-slate-500 w-[40px] h-[40px] flex justify-center items-center rounded-full social-link'>
                                        <div><FaGithub /></div>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;


/*  */