import { useState } from "react";
import DashboardSidebar from "./DashboardSidebar/DashboardSidebar";
import DashboardMainContent from "./DashboardMainContent/DashboardMainContent";
import { FaArrowRightArrowLeft } from "react-icons/fa6";



const Dashboard = () => {

    // Toggle sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="">
                <button className="md:hidden fixed top-0 left-0 z-30 max-md:bg-slate-800" onClick={toggleSidebar}>
                    <svg className="h-8 w-8 fill-current text-white " viewBox="0 0 24 24">
                        {/* <path d="M4 6h16M4 12h16M4 18h16"></path> */}
                        <FaArrowRightArrowLeft />
                    </svg>
                </button>
                <DashboardSidebar isOpen={isSidebarOpen} />
                <DashboardMainContent />
            </div>
        </>
    );
};

export default Dashboard;

