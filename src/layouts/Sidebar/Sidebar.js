import { FaUserGraduate, FaTools, FaTasks, FaBook, FaUtensils, FaQuestionCircle, FaCalendarAlt, FaTrophy } from "react-icons/fa";

export const Sidebar = () => {
    return (
        <aside className="w-64 bg-white shadow-md border-r p-4">
            <ul className="space-y-4">
                <li className="flex justify-center gap-8 items-center space-x-3">
                    <span>پروفایل دانش آموز</span>
                    <FaUserGraduate className="text-gray-500" />
                </li>
                <li className="flex justify-center gap-8 items-center space-x-3">
                    <span>درخواست لوازم تحریر</span>
                    <FaTools className="text-gray-500" />
                </li>
                <li className="flex justify-center gap-8 items-center space-x-3">
                    <span>سامانه تکالیف</span>
                    <FaTasks className="text-gray-500" />
                </li>
                <li className="flex justify-center gap-8 items-center space-x-3">
                    <span>مدیریت آزمون</span>
                    <FaBook className="text-gray-500" />
                </li>
                <li className="flex justify-center gap-8 items-center space-x-3">
                    <span>سامانه غذا</span>
                    <FaUtensils className="text-gray-500" />
                </li>
                <li className="flex justify-center gap-8 items-center space-x-3">
                    <span>سامانه تیکتینگ</span>
                    <FaQuestionCircle className="text-gray-500" />
                </li>
                <li className="flex justify-center gap-8 items-center space-x-3">
                    <span>سامانه حضور غیاب</span>
                    <FaCalendarAlt className="text-gray-500" />
                </li>
                <li className="flex justify-center gap-8 items-center space-x-3">
                    <span>سامانه جایزه دهی</span>
                    <FaTrophy className="text-gray-500" />
                </li>
            </ul>
        </aside>
    );
};
