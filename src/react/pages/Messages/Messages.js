import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectToken } from "../Users/userSlice";
import { get, getByThreadID } from "../../services/ForumMessageService";
import MessageModal from "./MessageModal";
import ConfirmDeleteModal from "./MessageConfirmDeleteModal";
import TopMenu from "../../components/TopMenu";
import Footer from "../../components/Footer";
import { remember, selectThreadID } from "./messageSlice";

function Messages() {
    const [messageModalOpen, setMessageModalOpen] = useState(false);
    const [messageModalData, setMessageModalData] = useState(undefined);
    const [confirmDeleteModalData, setConfirmDeleteModalData] =
        useState(undefined);
    const [messages, setMessages] = useState([]);
    const bearerToken = useSelector(selectToken);
    const threadID = useSelector(selectThreadID);

    function closeModal() {
        setMessageModalOpen(false);
        setMessageModalData(undefined);
    }

    function openModal() {
        setMessageModalOpen(true);
    }

    function closeConfirmDeleteModal() {
        setConfirmDeleteModalData(undefined);
    }

    function extractMessageId(inputString, unwantedSubString) {
        const extractedMessageID = inputString.replace(unwantedSubString, "");
        return extractedMessageID;
    }

    function onEditClicked(e) {
        const messageID = extractMessageId(
            e.target.id,
            "EditForumMessageButton"
        );
        get(bearerToken, messageID)
            .then((res) => {
                const messageData = res.data;
                setMessageModalData(messageData);
                openModal();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function onDeleteClicked(e) {
        const messageID = extractMessageId(
            e.target.id,
            "DeleteForumMessageButton"
        );
        console.log(messageID);
        setConfirmDeleteModalData(messageID);
    }

    function updateMessageState() {
        console.log(threadID);
        getByThreadID(bearerToken, threadID)
            .then((result) => {
                return new Promise((resolve) => {
                    resolve(setMessages(result.data));
                    console.log(result.data);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        updateMessageState();
    }, []);

    function renderMessages() {
        return (
            <ul className="flex flex-wrap pl-0 justify-center w-full pb-16">
                {messages.map((message, index) => {
                    const id = "ForumMessage" + message._id;
                    return (
                        <div
                            id={id}
                            key={`${message._id}`}
                            className="bg-gray-100 w-80 h-64 m-2 forumMessage"
                        >
                            <Card.Title className="pt-5">
                                {message.userName}
                            </Card.Title>
                            <Card.Text>Message ID: {message._id}</Card.Text>
                            <Card.Text>Owner ID: {message.authorID}</Card.Text>
                            <Card.Text>Message Title: {message.title}</Card.Text>
                            <Card.Text>Text: {message.text}</Card.Text>
                            <div>
                                <Button
                                    className="warning mr-1"
                                    id={`EditForumMessageButton${message._id}`}
                                    onClick={onEditClicked}
                                >
                                    Edit
                                </Button>
                                <Button
                                    className="ml-1"
                                    id={`DeleteForumMessageButton${message._id}`}
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
            <TopMenu />
            {confirmDeleteModalData ? (
                <ConfirmDeleteModal
                    messageID={confirmDeleteModalData}
                    closeConfirmDeleteModal={closeConfirmDeleteModal}
                    updateMessageState={updateMessageState}
                />
            ) : null}
            {/* open modal in post mode */}
            {messageModalOpen && !messageModalData ? (
                <MessageModal
                    title="Add new message"
                    closeModal={closeModal}
                    openModal={openModal}
                    updateMessageState={updateMessageState}
                    rerenderMessages={renderMessages}
                />
            ) : null}
            {/* open modal in edit mode */}
            {messageModalOpen && messageModalData ? (
                <MessageModal
                    title="Edit message"
                    modalData={messageModalData}
                    closeModal={closeModal}
                    openModal={openModal}
                    updateMessageState={updateMessageState}
                    rerenderMessages={renderMessages}
                />
            ) : null}
            <Button
                id="OpenCreateForumMessageDialogButton"
                className="primary mt-10"
                onClick={openModal}
            >
                add message
            </Button>
            {renderMessages()}
            <Footer />
        </div>
    );
}

export default Messages;
