import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset, setIsError } from "../features/authSlice";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const { isError, errorMessage } = useSelector((state) => state.auth);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        return () => {
            dispatch(reset());
        }
    }, []);

    const handleRegister = () => {
        if (!name) {
            dispatch(setIsError("Name is required."));
        } else if (!email) {
            dispatch(setIsError("Email is required."));
        } else if (!password) {
            dispatch(setIsError("Password is required."));
        } else {
            dispatch(register({ name, email, password }));
        }
    }

    return (
        <div className="w-full md:w-1/3 mt-10 flex flex-col justify-center rounded">
            {isError && <div className="text-red-500 mb-5 self-center">{errorMessage}</div>}

            <div className="flex flex-col w-full justify-center mb-5">
                <input className="h-10 p-1 rounded border border-black" type="text" placeholder="Enter Name" onChange={(event) => setName(event.target.value)} value={name} />
            </div>
            <div className="flex flex-col w-full justify-center mb-5">
                <input className="h-10 p-1 rounded border border-black" type="text" placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)} value={email} />
            </div>
            <div className="flex flex-col w-full justify-center mb-10">
                <input className="h-10 p-1 rounded border border-black" type="password" placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)} value={password} />
            </div>
            {/* <div className="flex flex-col w-full justify-center">
                <div className="flex flex-col w-full justify-center">
                    <input className="h-10 p-1 rounded border border-black" type="password" placeholder="Confirm Password" onChange={(event) => setPassword(event.target.value)} value={password} />
                </div>
            </div> */}
            <button onClick={handleRegister} className="mb-5 bg-black rounded h-10 text-lg text-white">Submit</button>
            <div className="w-full flex justify-end">
                <Link to="/login" className="text-blue-700 hover:text-blue-300 hover:cursor-pointer">Already have an account? Login.</Link>
            </div>
        </div>
    );
}

export default RegisterForm;