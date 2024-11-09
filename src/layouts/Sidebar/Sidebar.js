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
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center p-2 space-y-1 bg-gray-100 h-screen">
      {/* Top Icon Section */}
      <div className="flex space-x-4 mt-2 mb-4 md:hidden flex-row items-start">
        <button className="p-2 bg-blue-700 rounded-full shadow-lg text-white ml-4">
          <FaCalendarAlt size={24} />
        </button>
        <button className="p-2 bg-blue-500 rounded-full text-white shadow-lg">
          <FaBell size={24} />
        </button>
        <button className="p-2 bg-green-500 rounded-full text-white shadow-lg">
          <FaCommentDots size={24} />
        </button>
        <button className="p-2 bg-red-500 rounded-full text-white shadow-lg">
          <FaArrowLeft size={24} />
        </button>
      </div>

      {/* Dashboard Main Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-2 w-full max-w-lg md:max-w-3xl">
        <DashboardButton icon={<FaUserGraduate size={45} />} label="پروفایل دانش‌آموز" onClick={() => handleNavigation('/UserProfile')} />
        <DashboardButton icon={<FaClipboardList size={45} />} label="سامانه تکالیف" onClick={() => handleNavigation('/HomeWork')} />
        <DashboardButton icon={<FaEdit size={45} />} label="درخواست لوازم تحریر" onClick={() => handleNavigation('/Stationary')} />
        <DashboardButton icon={<FaIdBadge size={45} />} label="نمرات" onClick={() => handleNavigation('/Score')} />
        <DashboardButton icon={<FaUtensils size={45} />} label="سامانه غذا" onClick={() => handleNavigation('/Food')} />
        <DashboardButton icon={<FaQuestionCircle size={45} />} label="سامانه تکنیک" onClick={() => handleNavigation('/Ticketing')} />
        <DashboardButton icon={<FaIdBadge size={45} />} label="سامانه حضور و غیاب" onClick={() => handleNavigation('/PresentUser')} />
        <DashboardButton icon={<FaGift size={45} />} label="سامانه امتیاز" onClick={() => handleNavigation('/Score')} />
        <DashboardButton icon={<FaUsers size={45} />} label="مدیریت کاربران" onClick={() => handleNavigation('/UsersManegment')} />
        <DashboardButton icon={<FaChalkboardTeacher size={45} />} label="مدیریت کلاس" onClick={() => handleNavigation('/ClassManegment')} />
      </div>
    </div>
  );
};

const DashboardButton = ({ icon, label, onClick }) => (
  <div onClick={onClick} className="cursor-pointer flex flex-col md:flex-row md:justify-start items-center justify-center w-full h-40 md:h-14 mb-1 bg-blue-600 md:text-gray-500 md:bg-white md:shadow-md md:border-r md:p-4 p-0 text-white rounded-lg shadow-lg">
    {icon}
    <p className="mt-2 px-3 md:text-md text-sm font-bold text-center">{label}</p>
  </div>
);

export default Sidebar;

