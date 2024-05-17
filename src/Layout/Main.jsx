import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
// import Home from "../pages/Home/Home/Home";

const Main = () => {
    // const location = useLocation();
    // const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            {/* {noHeaderFooter || <Navbar></Navbar>} */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            {/* {noHeaderFooter || <Footer></Footer>} */}
        </div>
    );
};

export default Main;