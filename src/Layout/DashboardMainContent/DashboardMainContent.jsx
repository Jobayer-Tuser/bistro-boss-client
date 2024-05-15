import { Outlet } from "react-router-dom";


const DashboardMainContent = () => {
    return (
        <div className="ml-0 md:ml-64 h-full bg-white md:h-[100vh] max-md:h-[100vh]">
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardMainContent;