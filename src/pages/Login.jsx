import LoginForm from "../components/LoginForm";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Login = () => {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user])

    return (
        <div className="flex flex-col items-center justify-center">
            <FaUserCircle className="mt-10 mb-1" size={50} />
            <h1 className="text-3xl font-bold">Please Login</h1>
            <LoginForm />
        </div>
    );
}

export default Login;