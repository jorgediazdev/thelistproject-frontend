import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends, reset } from "../features/apiSlice";

const ListSelector = ({ setShowListSelector }) => {
    const dispatch = useDispatch();
    const { friends } = useSelector((state) => state.api);

    useEffect(() => {
        dispatch(getFriends());

        return(() => {
            dispatch(reset());
        });
    }, []);

    const handleOnClick = (event) => {
        console.log(event);
    }

    return (
        <>
            <div onClick={() => setShowListSelector(false)} className="absolute w-full h-full top-0 left-0 bg-black z-10 opacity-50"></div>
            <div onClick={(event) => event.stopPropagation()} className=" bg-white z-10 opacity-100 w-11/12 md:w-1/3 h-2/4 rounded shadow-md shadow-black absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                {friends.map((friend) => <div onClick={handleOnClick} id={friend._id} key={friend._id}>{friend.name}</div>)}
            </div>
        </>
    );
}

export default ListSelector;