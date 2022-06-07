function LoginModal() {
    return (
        <div className="absolute top-0 bg-gray-700 bg-opacity-50 bg-repeat w-screen h-screen">
            <div className="sticky ml-auto mr-auto left-0 right-0 top-1/4 text-center bg-blue-300 w-3/12 h-2/6 drop-shadow-xl flex flex-col">
                <button className="bg-red-500 border-2 rounded w-8 h-8 drop-shadow-md self-end">X</button>
                <h3 className="font-bold mt-2">Login</h3>
                <form>
                    <div className="flex flex-row justify-center mt-2">
                        <label className="block w-20 text-left">Name: </label>
                        <input className="border-2 rounded w-40" /><br></br>
                    </div>
                    <div className="flex flex-row justify-center mt-2">
                        <label className="block w-20 text-left">Password: </label>
                        <input className="border-2 rounded w-40" />
                    </div>
                    <button type="submit" className="border-2 rounded w-60 mt-5 bg-green-500">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginModal;
