const ListSelector = ({ setShowListSelector }) => {
    return (
        <>
            <div onClick={() => setShowListSelector(false)} className="absolute w-full h-full top-0 left-0 bg-black z-10 opacity-50"></div>
            <div onClick={(event) => event.stopPropagation()} className=" bg-white z-10 opacity-100 w-11/12 h-2/4 rounded shadow-md shadow-black absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                <input type="text" id="title" name="title" placeholder="Enter Item Name" />
                <textarea className="resize-none" name="description" id="description" cols="30" rows="10" placeholder="Enter Item Description"></textarea>
            </div>
        </>
    );
}

export default ListSelector;