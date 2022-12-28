import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Item = () => {
    const { id } = useParams();
    // const { items } = useSelector((state) => state.items.items);

    // const item = items.filter((item) => item.id === id);

    // console.log(item);

    return (
        <div>Item Page {id}</div>
    );
}

export default Item;