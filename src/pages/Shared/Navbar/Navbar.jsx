import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><button className="btn btn-ghost"><Link to='/'>Home</Link></button></li>
        <li><button className="btn btn-ghost"><Link to='/menu'>Our-Menu</Link></button></li>
        <li><button className="btn btn-ghost"><Link to='/order'>Order-Food</Link></button></li>
        <li><button className="btn btn-ghost"><Link to='/login'>Login</Link></button></li>
        {
            user ? <li><button className="btn btn-ghost" onClick={handleLogOut}>Logout</button></li> : <li><button className="btn btn-ghost"><Link to='/login'>Login</Link></button></li>
        }
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-light">Bistro Boss <br /> R E S T A U R A N T</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><button className="btn btn-ghost"><Link to='/'>Home</Link></button></li>
                        <li><button className="btn btn-ghost"><Link to='/menu'>Our-Menu</Link></button></li>
                        <li><button className="btn btn-ghost"><Link to='/order'>Order-Food</Link></button></li>
                        {
                            user ? <li><button className="btn btn-ghost" onClick={handleLogOut}>Logout</button></li> : <li><button className="btn btn-ghost"><Link to='/login'>Login</Link></button></li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;