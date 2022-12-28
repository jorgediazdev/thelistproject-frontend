import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getItems, reset } from "../features/itemsSlice";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import ItemList from "../components/ItemList";
import ListSelector from "../components/ListSelector";

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	const { items, isError, errorMessage } = useSelector((state) => state.items);
	const [showItemForm, setShowItemForm] = useState(false);
	const [showListSelector, setShowListSelector] = useState(false);

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}
	}, [user]);

	const handleAddItemOnClick = () => {
		setShowItemForm(!showItemForm);
	}

	return (
		<div className="flex flex-col items-center h-full">
			{showListSelector && <ListSelector setShowListSelector={setShowListSelector} />}

			<div onClick={() => setShowListSelector(!showListSelector)} className="flex mt-10 hover:cursor-pointer">
				<h1 className="font-extrabold text-3xl">Your WishList</h1>
				{/* place-self-start by default, but want to be explicit */}
				<AiFillEdit className="ml-1 place-self-start" />
			</div>

			<div onClick={handleAddItemOnClick} className="flex items-center mt-5 hover:cursor-pointer">
				<button className="mr-1">Add Item</button>
				<AiOutlinePlus />
			</div>

			<ItemList showItemForm={showItemForm} setShowItemForm={setShowItemForm} />
		</div>
	);
};

export default Home;
