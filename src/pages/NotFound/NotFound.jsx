import { Link } from "react-router-dom";
// import notFondImg from 'https://i.ibb.co/SfjGMcG/404-copy.gif';


const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
            <div className="max-w-2xl mx-auto px-4 text-center">
                <img src="https://i.ibb.co/SfjGMcG/404-copy.gif" alt="404 Not Found" className="mx-auto mb-8" />
                <Link href="/" className="text-blue-600 hover:underline"><button className="btn btn-success">Go back to Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;