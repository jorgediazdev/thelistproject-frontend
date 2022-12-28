import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

const Header = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <nav className="flex justify-between px-4 h-[7%] bg-neutral-800 items-center">
            <Link to="/" className="text-white" >WishList</Link>
            <div className="flex">
                {
                    user ? <button onClick={handleLogout} className="text-white">Logout</button> : <Link to="/login" className="text-white">Login</Link>
                }
                {
                    user && <div className="ml-4 text-white">{user.name}</div>
                }
            </div>
        </nav>
    );
}

export default Header;