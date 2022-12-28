const Settings = ({ setShowSettings }) => {
    return (
        <>
            <div onClick={() => setShowSettings(false)} className="absolute w-full h-full top-0 left-0 bg-black z-10 opacity-50"></div>
            <div onClick={(event) => event.stopPropagation()} className=" bg-white z-10 opacity-100 w-11/12 h-2/4 rounded shadow-md shadow-black absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                <h1>Settings</h1>
            </div>
        </>
    );
}

export default Settings;