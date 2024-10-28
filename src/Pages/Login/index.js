import HeaderCurve from "../../Componets/HeaderCurve/HeaderCurve"
import ProfileImage from "../../Componets/ProfileImage/ProfileImage"
import useTitle from "../../Componets/Hook/useTitle"
import LoginForm from "../../Componets/LoginForm/LoginForm"
import MobileLogin from "../../Componets/MobileLogin/MobileLogin"
import DesktopLogin from "../../Componets/DesktopLogin/DesktopLogin"


export const Login = () => {
    useTitle("Login")
    return (
        <div className="h-lvh">
            {/* <MobileLogin className='md:block lg:hidden' /> */}
            <DesktopLogin className='lg:block md:hidden'/>
        </div>
    )
}

