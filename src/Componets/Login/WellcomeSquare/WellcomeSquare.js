import React from 'react';
import ProfileImage from '../../ProfileImage/ProfileImage';


const WellcomeSquare = () => {
  return (
    <div className="w-2/5 h-5/6 flex flex-col items-center justify-center bg-blue-600  text-white text-center py-6 rounded-xl shadow-lg shadow-indigo-500/40">
      <h1 className="[text-shadow:_2px_4px_8px_#00000] text-[#ffffff] text-3xl md:text-4xl font-extrabold my-4">
        خوش آمدید
      </h1>
      <p className="text-lg py-3 drop-shadow-xl font-bold mb-3 px-3">
        پنل دانش آموزی مدرسه هوشمند مشکاه
      </p>

      <ProfileImage width="w-60" height="h-60"/>
    </div>
  );
};

export default WellcomeSquare;
