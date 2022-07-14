import { Form, Button, ToggleButton } from "react-bootstrap";

import { remove } from "../../services/UserService";

function ConfirmDeleteModal(props) {
    function deleteUser() {
        remove(props.userID)
            .then(() => {
                return props.updateUserState();
            })
            .then(() => {
                return props.closeConfirmDeleteModal();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    console.log(props);
    return (
        <div
            id="grayAreaUserModal"
            className={`absolute top-0 bg-gray-700 bg-opacity-50 bg-repeat w-screen h-screen`}
        >
            <div className="sticky ml-auto mr-auto left-0 right-0 top-1/4 w-96 bg-white rounded drop-shadow-xl">
                <h3>{`Are you sure you want to delete ${props.userID}?`}</h3>
                <Button
                    id="DeleteUserCancel"
                    variant="outline-danger"
                    onClick={props.closeConfirmDeleteModal}
                >
                    Cancel
                </Button>
                <Button
                    id="DeleteUserConfirm"
                    variant="outline-danger"
                    onClick={deleteUser}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
}

export default ConfirmDeleteModal;
