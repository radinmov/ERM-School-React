import HeaderCurve from "../../Componets/HeaderCurve/HeaderCurve"
import ProfileImage from "../../Componets/ProfileImage/ProfileImage"
import useTitle from "../../Componets/Hook/useTitle"
import LoginForm from "../../Componets/LoginForm/LoginForm"
import MobileLogin from "../../Componets/MobileLogin/MobileLogin"


export const Login = () => {
    useTitle("Login")
    return (
        <div>
            <MobileLogin  />
            <LoginForm />
        </div>
    )
}

