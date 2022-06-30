import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../components/LoginModal/userSlice";
import { get, getAll } from "../../services/UserService";
import { Card, Button } from "react-bootstrap";
import UserModal from "./UserModal";
import ConfirmDeleteModal from "../../components/confirmModal/ConfirmDeleteModal";

function Users() {
    const [userModalOpen, setUserModalOpen] = useState(false);
    const [userModalData, setUserModalData] = useState(undefined);
    const [confirmDeleteModalData, setConfirmDeleteModalData] =
        useState(undefined);
    const [users, setUsers] = useState([]);
    const bearerToken = useSelector(selectToken);

    function closeModal() {
        setUserModalOpen(false);
        setUserModalData(undefined);
    }

    function openModal() {
        setUserModalOpen(true);
    }

    function closeConfirmDeleteModal() {
        setConfirmDeleteModalData(undefined);
    }

    function extractUserId(inputString, unwantedSubString) {
        const extractedUserID = inputString.replace(unwantedSubString, "");
        return extractedUserID;
    }

    function onEditClicked(e) {
        const userID = extractUserId(e.target.id, "EditButton");
        get(bearerToken, userID)
            .then((res) => {
                const userData = res.data;
                setUserModalData(userData);
                openModal();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function onDeleteClicked(e) {
        const userID = extractUserId(e.target.id, "DeleteButton");
        console.log(userID);
        setConfirmDeleteModalData(userID);
    }

    function updateUserState() {
        getAll(bearerToken)
            .then((result) => {
                return new Promise((resolve) => {
                    resolve(setUsers(result.data));
                    console.log(result.data);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        updateUserState();
    }, []);

    function renderUsers() {
        return (
            <ul className="flex flex-col justify-center pl-0">
                {users.map((user, index) => {
                    const id = "UserItem" + user.userID;
                    return (
                        <div
                            id={id}
                            key={`UserItem${user.userID}`}
                            className="bg-gray-100 w-80 h-64 m-2"
                        >
                            <Card.Title className="pt-5">
                                {user.userName}
                            </Card.Title>
                            <Card.Text>ID: {user.userID}</Card.Text>
                            <Card.Text>
                                Administrator: {user.isAdministrator}
                            </Card.Text>
                            <div>
                                <Button
                                    className="warning mr-1"
                                    id={`EditButton${user.userID}`}
                                    onClick={onEditClicked}
                                >
                                    Edit
                                </Button>
                                <Button
                                    className="ml-1"
                                    id={`DeleteButton${user.userID}`}
                                    onClick={onDeleteClicked}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </ul>
        );
    }

    return (
        <div id="Container" className="text-center">
            {confirmDeleteModalData ? (
                <ConfirmDeleteModal
                    userID={confirmDeleteModalData}
                    closeConfirmDeleteModal={closeConfirmDeleteModal}
                    updateUserState={updateUserState}
                />
            ) : null}
            {/* open modal in post mode */}
            {userModalOpen && !userModalData ? (
                <UserModal
                    title="Add new user"
                    closeModal={closeModal}
                    openModal={openModal}
                    updateUserState={updateUserState}
                    rerenderUsers={renderUsers}
                />
            ) : null}
            {/* open modal in edit mode */}
            {userModalOpen && userModalData ? (
                <UserModal
                    title="Edit user"
                    modalData={userModalData}
                    closeModal={closeModal}
                    openModal={openModal}
                    updateUserState={updateUserState}
                    rerenderUsers={renderUsers}
                />
            ) : null}
            <Button id="OpenCreateUserDialogButton" className="primary" onClick={openModal}>
                add User
            </Button>
            {renderUsers()}
        </div>
    );
}

export default Users;
