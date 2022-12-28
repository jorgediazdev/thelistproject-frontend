import { deleteItem } from "../features/itemsSlice";
import { useDispatch } from "react-redux";

const Item = ({ item, index }) => {
    const dispatch = useDispatch();

    const handleOnDelete = (id) => {
        dispatch(deleteItem(id));
    }

    return (
        <>
            <div className="px-1 flex items-center h-10 border-b shrink-0">
                {/* <span>{index + 1}.</span> */}
                <div className="w-2/4">{item.title}</div>
                <div className="flex w-2/4 justify-center">
                    <button onClick={() => handleOnDelete(item._id)} className="mr-5">Delete</button>
                    <button>Edit</button>
                </div>
            </div>
        </>
    );
}

export default Item;