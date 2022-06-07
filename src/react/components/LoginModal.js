function LoginModal() {
    return (
        <div className="absolute bg-gray-700 bg-opacity-50 w-screen h-screen">
            <div className="absolute ml-auto mr-auto left-0 right-0 top-0 text-center top-1/4 bg-blue-300 w-3/12 h-2/6">
                <h3>Login</h3>
                <form>
                    <label>Name: </label>
                    <input></input><br></br>
                    <label>Password: </label>
                    <input></input>
                </form>
            </div>
        </div>
    );
}

export default LoginModal;
