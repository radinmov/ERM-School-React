import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Sidebar from '../../layouts/Sidebar/Sidebar';

export const PresentUser = () => {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-4 md:p-8 bg-gray-100">
        <header className="flex  justify-center w-full p-4 rounded-md">
          <div className="flex flex-col items-center space-x-4">
          <FaUserCircle size={100} className="text-blue-500" />
            <div>
              <h1 className="text-lg font-bold">نام خانوادگی دانش آموز: مهدی مهدی زاده</h1>
              <p className="text-sm text-gray-500">امروز</p>
            </div>
          </div>

        </header>

        {/* Content Area */}
        <section className="mt-6">
          <div className="rounded-md p-4">
            <h2 className="text-xl font-bold mb-4">سامانه حضور و غیاب</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Dynamic attendance checkboxes */}
              {[
                "ثبت حضور در مدرسه",
                "ثبت حضور کلاس اول",
                "ثبت حضور کلاس دوم",
                "ثبت حضور کلاس سوم",
                "ثبت حضور کلاس چهارم",
              ].map((label, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    id={`attendance-${index}`}
                    className="w-5 h-5"
                  />
                  <label
                    htmlFor={`attendance-${index}`}
                    className="text-md font-medium"
                  >
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
