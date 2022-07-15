import { useState } from "react";
import { Form, Button, ToggleButton } from "react-bootstrap";
import { useSelector } from "react-redux";

import { selectUser } from "../Users/userSlice";
import { selectThreadID } from "./messageSlice";
import { create, update } from "../../services/ForumMessageService";


function MessageModal(props) {
    const [messageID] = useState(props.modalData?._id ?? "");
    const forumThreadID = useSelector(selectThreadID);
    const authorID = useSelector(selectUser).authorID;
    const [title, setTitle] = useState(props.modalData?.title ?? "");
    const [text, setText] = useState(props.modalData?.text ?? "");

    // console.log(name);
    function onCloseButtonClick(e) {
        props.closeModal();
    }

    //needed since react doesn't allow us to call our submit-function within JSX. Only referencing is possible.
    //ids are maintained by MongoDB. It is not intended to change them
    function handleOnChange(e) {
        const { name, value } = e.target;
        switch (name) {
            case "title":
                setTitle(value);
                break;
            case "text":
                setText(value);
                break;
            default:
                console.log("Unexpected behaviour in UserModal");
        }
    }

    function updateMessage(message) {
        update(messageID, message)
            .then(() => {
                props.updateMessageState();
                return props.rerenderMessages(props.bearerToken);
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
        let message = {
            forumThreadID: forumThreadID,
            authorID: authorID,
            title: title,
            text: text,
        };
        if (props.modalData) {
            updateMessage(message);
        } else {
            create(message)
                .then(() => {
                    props.updateMessageState();
                    return props.rerenderMessages(props.bearerToken);
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
                        id={props.modalData ? "CancelEditForumMessageButton" : "CancelCreateForumMessageButton"}
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
                            id="ForumMessageNameInput"
                            type="text"
                            placeholder="Enter Title"
                            name="title"
                            value={title}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Text</Form.Label>
                        <Form.Control
                            id="ForumMessageDescriptionInput"
                            type="text"
                            placeholder="Enter text"
                            name="text"
                            value={text}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        id={
                            props.modalData
                                ? "SaveForumMessageButton"
                                : "CreateForumMessageButton"
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

export default MessageModal;
