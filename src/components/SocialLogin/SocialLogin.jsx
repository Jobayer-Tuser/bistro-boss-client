import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn, setUser} = useAuth();
    const axiosPublic = UseAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            setUser(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className="flex justify-center mt-5 text-slate-600 text-xl">
            <a href="#" className='border-solid border-2 border-slate-500 w-[40px] h-[40px] flex justify-center items-center rounded-full social-link'>
                <div><FaFacebookF /></div>
            </a>
            <button onClick={handleGoogleSignIn} className='border-solid border-2 border-slate-500 w-[40px] h-[40px] flex justify-center items-center rounded-full mx-5 social-link'>
                <div><FaGoogle /></div>
            </button>
            <a href="#" className='border-solid border-2 border-slate-500 w-[40px] h-[40px] flex justify-center items-center rounded-full social-link'>
                <div><FaGithub /></div>
            </a>
        </div>
    );
};

export default SocialLogin;