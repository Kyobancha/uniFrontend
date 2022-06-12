import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, loginAsync, selectStatus, selectToken } from "./loginSlice";

function LoginModal(props) {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const loginStatus = useSelector(selectStatus);
    const loginToken = useSelector(selectToken);
    const dispatch = useDispatch();

    //needed since react doesn't allow us to call our submit-function within JSX. Only referencing is possible.
    function handleOnChange(e) {
        const { name, value } = e.target;
        if (name === "userName") {
            setUserName(value);
        } else {
            setUserPassword(value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        let userData = {name: userName, password: userPassword}
        dispatch(loginAsync(userData))
            .then((res) => {
                // console.log(res)
                // setLoggedIn(true);
            })
            .catch((err) => {
                // console.log(err)
                // setLoggedIn(false);
            });
    }

    return (
        <div className={`absolute top-0 bg-gray-700 bg-opacity-50 bg-repeat w-screen h-screen ${loginStatus === "loggedIn" ? "hidden" : ""}`}>
            <div className="sticky ml-auto mr-auto left-0 right-0 top-1/4 text-center bg-blue-300 w-3/12 h-2/6 drop-shadow-xl flex flex-col">
                <button
                    onClick={props.closeModal}
                    className="bg-red-500 border-2 rounded w-8 h-8 drop-shadow-md self-end"
                >
                    X
                </button>
                <h3 className="font-bold mt-2">Login</h3>
                <form>
                    <div className="flex flex-row justify-center mt-2">
                        <label
                            htmlFor="userName"
                            className="block w-20 text-left"
                        >
                            Name:{" "}
                        </label>
                        {/* name and value property are used for key-value pairs*/}
                        <input
                            onChange={handleOnChange}
                            value={userName}
                            name="userName"
                            id="userName"
                            className="border-2 rounded w-40"
                        />
                        <br></br>
                    </div>
                    <div className="flex flex-row justify-center mt-2">
                        <label
                            htmlFor="userPassword"
                            className="block w-20 text-left"
                        >
                            Password:{" "}
                        </label>
                        <input
                            type="password"
                            onChange={handleOnChange}
                            value={userPassword}
                            name="userPassword"
                            id="userPassword"
                            className="border-2 rounded w-40"
                        />
                    </div>
                    <p
                        className={`inline-block w-60 mt-2 text-red-600 ${
                            loginStatus === "failed" ? "" : "hidden"
                        }`}
                    >
                        Login failed.
                    </p>
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="border-2 rounded w-60 mt-5 bg-green-500"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginModal;
