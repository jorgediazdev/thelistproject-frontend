import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { FaUserCircle } from "react-icons/fa";

const Register = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    });

    return (
        <div className="flex flex-col items-center justify-center">
            <FaUserCircle className="mt-10 mb-1" size={50} />
            <h1 className="text-3xl font-bold">Please Register</h1>
            <RegisterForm />
        </div>
    );
}

export default Register;