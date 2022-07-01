import { useState } from "react";
import { Form, Button, ToggleButton } from "react-bootstrap";

import { create, update } from "../../services/UserService";

function UserModal(props) {
    const [userID, setUserID] = useState(props.modalData?.userID ?? "");
    const [userName, setUserName] = useState(props.modalData?.userName ?? "");
    const [userPassword, setUserPassword] = useState(""); //password is not provided by the backend API due to security risk.
    const [isAdmin, setIsAdmin] = useState(
        props.modalData?.isAdministrator ?? false
    );

    console.log(props.modalData);
    function onCloseButtonClick(e) {
        props.closeModal();
    }

    //needed since react doesn't allow us to call our submit-function within JSX. Only referencing is possible.
    function handleOnChange(e) {
        const { name, value } = e.target;
        switch (name) {
            case "userID":
                setUserID(value);
                break;
            case "userName":
                setUserName(value);
                break;
            case "userPassword":
                setUserPassword(value);
                break;
            case "userIsAdmin":
                setIsAdmin(value);
                break;
            default:
                console.log("Unexpected behaviour in UserModal");
        }
    }

    function updateUser(user) {
        update(props.modalData.userID, user)
            .then(() => {
                props.updateUserState();
                return props.rerenderUsers(props.bearerToken);
            })
            .then(() => {
                props.closeModal();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleSubmit(e) {
        e.preventDefault();
        let user = {
            userID: userID,
            userName: userName,
            password: userPassword,
            isAdministrator: isAdmin,
        };
        if (props.modalData) {
            updateUser(user);
        } else {
            create(user)
                .then(() => {
                    props.updateUserState();
                    return props.rerenderUsers(props.bearerToken);
                })
                .then(() => {
                    props.closeModal();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <div
            id="grayAreaUserModal"
            className={`absolute top-0 bg-gray-700 bg-opacity-50 bg-repeat w-screen h-screen`}
        >
            <div className="sticky ml-auto mr-auto left-0 right-0 top-1/4 w-96 bg-white rounded drop-shadow-xl">
                <div className="flex justify-end">
                    <Button
                        id={props.modalData ? "CancelEditUserButton" : ""}
                        variant="danger"
                        onClick={onCloseButtonClick}
                        className="absolute"
                    >
                        X
                    </Button>
                </div>
                <Form className="flex flex-col p-8">
                    <h3 className="text-center pt-3">{props.title}</h3>
                    <Form.Group className="mb-3">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control
                            id="UserIDInput"
                            type="text"
                            placeholder="Enter user ID"
                            name="userID"
                            value={userID}
                            onChange={handleOnChange}
                            readOnly={props.modalData ? true : false}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            id="UserNameInput"
                            type="text"
                            placeholder="Enter user name"
                            name="userName"
                            value={userName}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            id="PasswordInput"
                            type="password"
                            placeholder="Enter password"
                            name="userPassword"
                            value={userPassword}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    <ToggleButton
                        className="mb-3"
                        id="IsAdministratorInput"
                        name="isAdmin"
                        value={isAdmin}
                        type="checkbox"
                        variant="outline-danger"
                        checked={isAdmin}
                        onChange={(e) => setIsAdmin(e.currentTarget.checked)}
                    >
                        Is Administrator
                    </ToggleButton>
                    <Button
                        variant="primary"
                        type="submit"
                        id={
                            props.modalData
                                ? "SaveUserButton"
                                : "CreateUserButton"
                        }
                        onClick={handleSubmit}
                        className="mt-3"
                    >
                        Save
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default UserModal;
