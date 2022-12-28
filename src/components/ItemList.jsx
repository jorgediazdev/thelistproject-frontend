import Item from "../components/Item";
import ItemForm from "../components/ItemForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getItems, clearItems } from "../features/itemsSlice";

const ItemList = ({ setShowItemForm, showItemForm }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { items } = useSelector((state) => state.items);

    useEffect(() => {
        dispatch(getItems());

        return () => {
            dispatch(clearItems());
        }
    }, []);

    return (
        <>
            {showItemForm && <ItemForm setShowItemForm={setShowItemForm} />}

            <div className="mt-5 flex flex-col w-full md:w-2/4 grow rounded overflow-auto rounded">
                {items && items.map((item, index) => {
                    return <Item key={item._id} item={item} index={index} />
                })}
            </div>
        </>
    );
}

export default ItemList;