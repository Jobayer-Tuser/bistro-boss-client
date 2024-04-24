import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <div>
            <div className="bg-slate-700 grid md:grid-cols-2 gap-4 text-center">
                <div className="py-10 text-white">
                    <h5 className="uppercase text-xl mb-4">contact us</h5>
                    <div className="text-sm leading-6">
                        <address className="">123 ABS Street Uni 21, Bangladesh</address>
                        <p>+88 123456789</p>
                        <p>Mon-Fri: 08:00-22:00</p>
                        <p>Sat-Sun: 10:00-23:00</p>
                    </div>
                </div>
                <div className="bg-slate-900 py-10 text-white">
                    <h5 className="text-xl mb-4">Follow US</h5>
                    <p className="text-xs">Join us on social media</p>
                    <div className="flex justify-center">
                        <a href="https://www.facebook.com/" target="blank" className="mt-5 text-2xl"><FaFacebookF /></a>
                        <a href="#" className="mt-5 text-2xl mx-5"><FaInstagram /></a>
                        <a href="#" className="mt-5 text-2xl"><FaTwitter /></a>
                    </div>
                </div>
            </div>
            <div className="footer-center p-4 bg-base-300 text-base-content">
                <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
            </div>
        </div>
    );
};

export default Footer;

/* 
<footer className="footer p-10 bg-neutral text-center">
                <div className="text-center inline-block">
                    sdfasdf
                </div>
                <nav>
                    sdfasdf
                </nav>
            </footer>
*/