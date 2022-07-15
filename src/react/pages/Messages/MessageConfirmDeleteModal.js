import { Form, Button, ToggleButton } from "react-bootstrap";

import { remove } from "../../services/ForumMessageService";

function MessageConfirmDeleteModal(props) {
    function deleteMessage() {
        remove(props.messageID)
            .then(() => {
                return props.updateMessageState();
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
                <h3>{`Are you sure you want to delete ${props.messageID}?`}</h3>
                <Button
                    id="DeleteForumMessageCancel"
                    variant="outline-danger"
                    onClick={props.closeConfirmDeleteModal}
                >
                    Cancel
                </Button>
                <Button
                    id="DeleteForumMessageConfirm"
                    variant="outline-danger"
                    onClick={deleteMessage}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
}

export default MessageConfirmDeleteModal;
