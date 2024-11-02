import { FaBell, FaEnvelope, FaUserCircle, FaCalendarAlt } from "react-icons/fa";

export const Header = () => {
    return (
        <header className=" flex items-center justify-between bg-white p-4 shadow-md max-md:hidden">
            <div className="flex items-center space-x-4">
                <FaCalendarAlt className="text-blue-600 text-3xl" />
                <h1 className="text-2xl font-bold text-gray-700">High School DXD</h1>
            </div>
            <div className="flex items-center space-x-6">
                <FaEnvelope className="text-gray-500 text-2xl cursor-pointer" />
                <FaBell className="text-gray-500 text-2xl cursor-pointer" />
                <FaUserCircle className="text-gray-500 text-2xl cursor-pointer" />
                <button className="px-4 py-2 text-black rounded-md">
                    ممد ایلانی 
                </button>
            </div>
        </header>
    );
};
