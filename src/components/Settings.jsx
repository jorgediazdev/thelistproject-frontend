import { useSelector } from "react-redux";

const Settings = ({ setShowSettings }) => {
    const { user } = useSelector((state) => state.auth);

    return (
        <>
            <div onClick={() => setShowSettings(false)} className="absolute w-full h-full top-0 left-0 bg-black z-10 opacity-50"></div>
            <div onClick={(event) => event.stopPropagation()} className="flex flex-col p-4 bg-white z-10 opacity-100 w-11/12 md:w-1/3 h-2/4 rounded shadow-md shadow-black absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                <div className="flex justify-center mb-5"><h1 className="text-lg underline">Settings</h1></div>

                <p className="mb-1">Name: {user.name}</p>
                <p className="mb-1">Email: {user.email}</p>

                <div className="grow flex flex-col items-center">
                    <p className="mb-1 place-self-start">Friends:</p>
                    <div className="flex items-center mb-1">
                        <span className="mr-1">Add Friend:</span>
                        <input type="text" className="h-10 p-1 rounded border border-black" />
                    </div>
                    <div className="grow self-stretch"></div>
                </div>
            </div>
        </>
    );
}

export default Settings;