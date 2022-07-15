import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";

import { loginAsync, selectStatus, selectToken } from "../../pages/Users/userSlice";

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
        let userData = { name: userName, password: userPassword };
        dispatch(loginAsync(userData));
    }

    function handleGrayAreaClick(e) {
        const grayArea = document.getElementById("grayArea");
        if (e.target === grayArea) {
            props.closeModal();
        }
    }

    return (
        <div
            id="grayArea"
            className={`absolute top-0 bg-gray-700 bg-opacity-50 bg-repeat w-screen h-screen ${
                loginStatus === "loggedIn" ? "hidden" : ""
            }`}
            onClick={handleGrayAreaClick}
        >
            <div className="sticky ml-auto mr-auto left-0 right-0 top-1/4 w-96 bg-white rounded drop-shadow-xl">
                <Form className="flex flex-col p-6">
                    <h3 className="text-center">Login</h3>
                    <Form.Group className="mb-3">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control
                            id="LoginUserIDInput"
                            type="text"
                            placeholder="Enter user ID"
                            name="userName"
                            value={userName}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            id="LoginPasswordInput"
                            type="password"
                            placeholder="Enter password"
                            name="userPassword"
                            value={userPassword}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Form.Text
                        className={`text-muted ${
                            loginStatus === "failed" ? "" : "hidden"
                        }`}
                    >
                        Wrong user ID or password.
                    </Form.Text>
                    <Form.Text
                        className={`text-muted ${
                            loginStatus === "pending" ? "" : "hidden"
                        }`}
                    >
                        Loading...
                    </Form.Text>
                    <Button
                        className="mt-3"
                        variant="primary"
                        type="submit"
                        id="LoginButton"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default LoginModal;
