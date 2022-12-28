import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createItem } from "../features/itemsSlice";

const ItemForm = ({ setShowItemForm }) => {
    const dispatch = useDispatch();
    const ref = useRef(null);
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        ref.current.focus();
    }, []);

    const handleItemNameChange = (event) => {
        setItemName(event.target.value);
    }

    const handleItemDescriptionChange = (event) => {
        setItemDescription(event.target.value);
    }

    const handleCancelOnClick = () => {
        setShowItemForm(false);
    }

    const handleAddOnClick = () => {
        if (itemName) {
            dispatch(createItem({ title: itemName, description: itemDescription || null }));

            setItemName("");
            setItemDescription("");

            ref.current.focus();
        }
    }

    return (
        <div className="w-full md:w-2/4 flex flex-col items-center p-1 sticky top-0 bg-white rounded">
            <div className="flex flex-col w-full">
                {errorMessage && <small className="text-red-700">{errorMessage}</small>}
                <input ref={ref} className="w-full h-10 p-1 rounded border border-black" type="text" name="name" id="name" placeholder="Item Name" onChange={handleItemNameChange} value={itemName} />
                <textarea className="w-full p-1 border border-black resize-none my-1 h-14 rounded" name="description" id="description" placeholder="Item Description. I.e. size, color, model..." onChange={handleItemDescriptionChange} value={itemDescription}></textarea>
            </div>
            <div className="flex justify-evenly border-black w-full">
                <button onClick={handleAddOnClick} className="h-10 w-2/5 md:w-20 border border-black rounded bg-black text-white">Add</button>
                <button onClick={handleCancelOnClick} className="h-10 w-2/5 md:w-20 border border-black rounded bg-white">Cancel</button>
            </div>
        </div>
    );
}

export default ItemForm;