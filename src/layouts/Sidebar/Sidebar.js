// import { FaUserGraduate, FaTools, FaTasks, FaBook, FaUtensils, FaQuestionCircle, FaCalendarAlt, FaTrophy } from "react-icons/fa";

// export const Sidebar = () => {
//     return (
//         <aside className="w-64 bg-white shadow-md border-r p-4">
//             <ul className="space-y-4">
//                 <li className="flex justify-center gap-8 items-center space-x-3">
//                     <span>پروفایل دانش آموز</span>
//                     <FaUserGraduate className="text-gray-500" />
//                 </li>
//                 <li className="flex justify-center gap-8 items-center space-x-3">
//                     <span>درخواست لوازم تحریر</span>
//                     <FaTools className="text-gray-500" />
//                 </li>
//                 <li className="flex justify-center gap-8 items-center space-x-3">
//                     <span>سامانه تکالیف</span>
//                     <FaTasks className="text-gray-500" />
//                 </li>
//                 <li className="flex justify-center gap-8 items-center space-x-3">
//                     <span>مدیریت آزمون</span>
//                     <FaBook className="text-gray-500" />
//                 </li>
//                 <li className="flex justify-center gap-8 items-center space-x-3">
//                     <span>سامانه غذا</span>
//                     <FaUtensils className="text-gray-500" />
//                 </li>
//                 <li className="flex justify-center gap-8 items-center space-x-3">
//                     <span>سامانه تیکتینگ</span>
//                     <FaQuestionCircle className="text-gray-500" />
//                 </li>
//                 <li className="flex justify-center gap-8 items-center space-x-3">
//                     <span>سامانه حضور غیاب</span>
//                     <FaCalendarAlt className="text-gray-500" />
//                 </li>
//                 <li className="flex justify-center gap-8 items-center space-x-3">
//                     <span>سامانه جایزه دهی</span>
//                     <FaTrophy className="text-gray-500" />
//                 </li>
//             </ul>
//         </aside>
//     );
// };

import React from 'react';
import {
  FaUserGraduate,
  FaClipboardList,
  FaEdit,
  FaUtensils,
  FaQuestionCircle,
  FaGift,
  FaIdBadge,
  FaArrowLeft,
  FaCommentDots,
  FaBell,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaUsers
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center p-2 space-y-1 bg-gray-100 h-screen">
      {/* بخش آیکون‌های بالا */}
      <div className="flex space-x-4 mt-2 mb-4 md:hidden">
        <button className="p-2  bg-blue-700 rounded-full text-white ml-4">
          <FaCalendarAlt size={24} />
        </button> 
      
        <button className="p-2 bg-blue-500 rounded-full text-white">
          <FaBell size={24} />
        </button>
         
        <button className="p-2 bg-green-500 rounded-full text-white">
          <FaCommentDots size={24} />
        </button>
        <button className="p-2 bg-red-500 rounded-full text-white">
          <FaArrowLeft size={24} />
        </button>
      </div>

      {/* بخش دکمه‌های اصلی داشبورد */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-4  md:gap-2 w-full max-w-lg md:max-w-3xl">
        <DashboardButton icon={<FaUserGraduate size={40} />} label="پروفایل دانش‌آموز" />
        <DashboardButton icon={<FaClipboardList size={40} />} label="سامانه تکالیف" />
        <DashboardButton icon={<FaEdit size={40} />} label="درخواست لوازم تحریر" />
        <DashboardButton icon={<FaIdBadge size={40} />} label="نمرات" />
        <DashboardButton icon={<FaUtensils size={40} />} label="سامانه غذا" />
        <DashboardButton icon={<FaQuestionCircle size={40} />} label="سامانه تکنیک" />
        <DashboardButton icon={<FaIdBadge size={40} />} label="سامانه حضور و غیاب" />
        <DashboardButton icon={<FaGift size={40} />} label="سامانه امتیاز" />
        <DashboardButton icon={<FaUsers size={40} />} label="مدیریت کاربران" />
        <DashboardButton icon={<FaChalkboardTeacher size={40} />} label="مدیریت کلاس" />
      </div>
    </div>
  );
};

const DashboardButton = ({ icon, label }) => (
  <div className=" flex flex-col md:flex-row md:justify-start items-center justify-center w-full h-32 md:h-14 mb-1 bg-blue-600 md:text-gray-500 md:bg-white md:shadow-md md:border-r p-4 text-white rounded-lg shadow-lg ">
    {icon}
    <p className="mt-2 px-3 text-md font-bold">{label}</p>
  </div>
);

export default Sidebar;

