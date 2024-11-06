import React from 'react';
import LoginForm from '../Login/LoginForm/LoginForm';
import WellcomeSquare from '../WellcomeSquare/WellcomeSquare';

const DesktopLogin = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">    
      <div className="relative w-4/5 max-w-5xl flex transform -right-1/4 -translate-x-1/2 h-5/6   items-center">
        {/* بخش خوش‌آمد */}
        <WellcomeSquare />
      </div> 
        {/* بخش فرم ورود */}
        <div className="absolute top-1/2 max-w-5xl transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto p-8 border border-gray-200 rounded-xl shadow-lg bg-white z-10">
          <LoginForm />
        </div>
              
    </div>
  );
}

export default DesktopLogin;


