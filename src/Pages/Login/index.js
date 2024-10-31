import HeaderCurve from "../../Componets/HeaderCurve/HeaderCurve";
import ProfileImage from "../../Componets/ProfileImage/ProfileImage";
import useTitle from "../../Componets/Hook/useTitle";
import LoginForm from "../../Componets/LoginForm/LoginForm";

import DesktopLogin from "../../Componets/DesktopLogin/DesktopLogin";
import WellcomeSquare from "../../Componets/WellcomeSquare/WellcomeSquare";

export const Login = () => {
    useTitle("Login");

    return (
        <div className="h-screen">
          
          {/* Mobile View */}
          <div className="block md:hidden ">
            <HeaderCurve />
            <ProfileImage />
            <LoginForm />
          </div>
       



        {/* Desktop View */}
       <div className="hidden md:block">
            <DesktopLogin />
       </div>

    


           
        </div>
    );
};

