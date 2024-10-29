import { FaUserGraduate, FaTools, FaTasks, FaBook, FaUtensils, FaQuestionCircle, FaCalendarAlt, FaTrophy } from "react-icons/fa";

export const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-100 border-r p-4  h-screen">
            <h2 className="text-xl font-bold text-blue-700 mb-6">دانشور</h2>
            <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                    <FaUserGraduate className="text-gray-500" />
                    <span>پروفایل دانش آموز</span>
                </li>
                <li className="flex items-center space-x-3">
                    <FaTools className="text-gray-500" />
                    <span>درخواست لوازم تحریر</span>
                </li>
                <li className="flex items-center space-x-3">
                    <FaTasks className="text-gray-500" />
                    <span>سامانه تکالیف</span>
                </li>
                <li className="flex items-center space-x-3">
                    <FaBook className="text-gray-500" />
                    <span>مدیریت آزمون</span>
                </li>
                <li className="flex items-center space-x-3">
                    <FaUtensils className="text-gray-500" />
                    <span>سامانه غذا</span>
                </li>
                <li className="flex items-center space-x-3">
                    <FaQuestionCircle className="text-gray-500" />
                    <span>سامانه تیکتینگ</span>
                </li>
                <li className="flex items-center space-x-3">
                    <FaCalendarAlt className="text-gray-500" />
                    <span>سامانه حضور غیاب</span>
                </li>
                <li className="flex items-center space-x-3">
                    <FaTrophy className="text-gray-500" />
                    <span>سامانه جایزه دهی</span>
                </li>
            </ul>
        </aside>
    );
};
