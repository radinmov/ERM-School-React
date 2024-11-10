import React from 'react';
import Sidebar from '../../layouts/Sidebar/Sidebar';

export const HomeWork = () => {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <main className="p-4 md:p-8">
        <h1 className="text-2xl font-bold mb-6">سامانه تکالیف</h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col items-center justify-center w-40 h-40 bg-white rounded-full shadow-md">
            <div className="text-blue-500 text-5xl mb-2">⬇️</div>
            <p className="text-center font-bold">تکالیف جدید</p>
            <p className="text-center text-gray-500">تمرین اسکات</p>
          </div>

          <div className="flex flex-col items-center justify-center w-40 h-40 bg-green-500 rounded-full shadow-md text-white">
            <div className="text-5xl mb-2">✅</div>
            <p className="text-center font-bold">تکالیف تایید شده</p>
            <p className="text-center">تمرین درس 1 ریاضی</p>
          </div>

          <div className="flex flex-col items-center justify-center w-40 h-40 bg-red-500 rounded-full shadow-md text-white">
            <div className="text-5xl mb-2">❌</div>
            <p className="text-center font-bold">تکالیف رد شده</p>
            <p className="text-center">تمرین درس 2 ریاضی</p>
          </div>

          <div className="flex flex-col items-center justify-center w-40 h-40 bg-white rounded-full shadow-md">
            <div className="text-5xl mb-2">📊</div>
            <p className="text-center font-bold">مشاهده نمودار نمرات</p>
          </div>
        </div>
      </main>
    </div>
  );
};
