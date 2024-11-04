
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
      <div className="flex space-x-4 mt-2 mb-4 md:hidden flex-row ">
        <button className="p-2  bg-blue-700 rounded-full shadow-[0_3px_18px_0px_rgba(0,0,0,0.3)] text-white ml-4">
          <FaCalendarAlt  size={24} />
        </button> 
      
        <button className="p-2 bg-blue-500 rounded-full text-white  shadow-[0_3px_18px_0px_rgba(0,0,0,0.3)]">
          <FaBell size={24} />
        </button>
         
        <button className="p-2 bg-green-500 rounded-full text-white  shadow-[0_3px_18px_0px_rgba(0,0,0,0.3)]">
          <FaCommentDots size={24} />
        </button>
        <button className="p-2 bg-red-500 rounded-full text-white  shadow-[0_3px_18px_0px_rgba(0,0,0,0.3)]">
          <FaArrowLeft size={24} />
        </button>
      </div>

      {/* بخش دکمه‌های اصلی داشبورد */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-2  md:gap-2 w-full max-w-lg md:max-w-3xl ">
        <DashboardButton  icon={<FaUserGraduate  size={50} />} label="پروفایل دانش‌آموز" />
        <DashboardButton icon={<FaClipboardList size={50} />} label="سامانه تکالیف" />
        <DashboardButton icon={<FaEdit size={50} />} label="درخواست لوازم تحریر" />
        <DashboardButton icon={<FaIdBadge size={50} />} label="نمرات" />
        <DashboardButton icon={<FaUtensils size={50} />} label="سامانه غذا" />
        <DashboardButton icon={<FaQuestionCircle size={50} />} label="سامانه تکنیک" />
        <DashboardButton icon={<FaIdBadge size={50} />} label="سامانه حضور و غیاب" />
        <DashboardButton icon={<FaGift size={50} />} label="سامانه امتیاز" />
        <DashboardButton icon={<FaUsers size={50} />} label="مدیریت کاربران" />
        <DashboardButton icon={<FaChalkboardTeacher size={50} />} label="مدیریت کلاس" />
      </div>
    </div>
  );
};

const DashboardButton = ({ icon, label }) => (
  <div className=" flex flex-col md:flex-row md:justify-start items-center justify-center w-full h-40 md:h-14 mb-1 bg-blue-600 md:text-gray-500 md:bg-white md:shadow-md md:border-r md:p-4 p-0 text-white rounded-lg  shadow-[0_3px_18px_0px_rgba(0,0,0,0.3)] ">
    {icon}
    <p className="mt-2 px-3 text-sm font-bold text-center">{label}</p>
  </div>
);

export default Sidebar;

