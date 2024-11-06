import HeaderCurve from "../../Componets/Login/HeaderCurve/HeaderCurve";
import ProfileImage from "../../Componets/ProfileImage/ProfileImage";
import useTitle from "../../Componets/Hook/useTitle";
import LoginForm from "../../Componets/Login/LoginForm/LoginForm";
import DesktopLogin from "../../Componets/Login/DesktopLogin/DesktopLogin";




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

