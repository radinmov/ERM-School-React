import HeaderCurve from "../../Componets/HeaderCurve/HeaderCurve"
import ProfileImage from "../../Componets/ProfileImage/ProfileImage"
import useTitle from "../../Componets/Hook/useTitle"
import LoginForm from "../../Componets/LoginForm/LoginForm"


export const Login = () => {
    useTitle("Login")
    return (
        <div>
            <HeaderCurve />
            <ProfileImage />
            <LoginForm />
        </div>
    )
}

