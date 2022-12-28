import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Main = () => {
    return (
        <div className="dark flex flex-col h-full">
			<Header />
			<div className="h-[93%] p-4">
				<Outlet />
			</div>
		</div>
    );
}

export default Main;