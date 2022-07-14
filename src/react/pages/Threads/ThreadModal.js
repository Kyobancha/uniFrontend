import { useState } from "react";
import { Form, Button, ToggleButton } from "react-bootstrap";
import { useSelector } from "react-redux";

import { selectUser } from "../../components/LoginModal/userSlice";
import { create, update } from "../../services/ForumThreadService";

function ThreadModal(props) {
    const [threadID, setThreadID] = useState(props.modalData?._id ?? "");
    const ownerID = useSelector(selectUser).ownerID;
    const [name, setName] = useState(props.modalData?.name ?? "");
    const [description, setDescription] = useState(props.modalData?.description ?? "");

    // console.log(name);
    function onCloseButtonClick(e) {
        props.closeModal();
    }

    //needed since react doesn't allow us to call our submit-function within JSX. Only referencing is possible.
    //ids are maintained by MongoDB. It is not intended to change them
    function handleOnChange(e) {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "description":
                setDescription(value);
                break;
            default:
                console.log("Unexpected behaviour in UserModal");
        }
    }

    function updateThread(thread) {
        update(threadID, thread)
            .then(() => {
                props.updateThreadState();
                return props.rerenderThreads(props.bearerToken);
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
        let thread = {
            threadID: threadID,
            ownerID: ownerID,
            name: name,
            description: description,
        };
        if (props.modalData) {
            updateThread(thread);
        } else {
            create(thread)
                .then(() => {
                    props.updateThreadState();
                    return props.rerenderThreads(props.bearerToken);
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
                        id={props.modalData ? "CancelEditForumThreadButton" : "CancelCreateForumThreadButton"}
                        variant="danger"
                        onClick={onCloseButtonClick}
                        className="absolute"
                    >
                        X
                    </Button>
                </div>
                <Form className="flex flex-col p-8">
                    <h3 className="text-center pt-3">{props.title}</h3>
                    <Form.Group className="mb-4">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            id="ForumThreadNameInput"
                            type="text"
                            placeholder="Enter Title"
                            name="name"
                            value={name}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            id="ForumThreadDescriptionInput"
                            type="text"
                            placeholder="Enter Description"
                            name="description"
                            value={description}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        id={
                            props.modalData
                                ? "SaveForumThreadButton"
                                : "CreateForumThreadButton"
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

export default ThreadModal;
