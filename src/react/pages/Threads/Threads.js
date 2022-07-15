import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectToken } from "../Users/userSlice";
import { get, getAll } from "../../services/ForumThreadService";
import ThreadModal from "./ThreadModal";
import ConfirmDeleteModal from "./ThreadConfirmDeleteModal";
import TopMenu from "../../components/TopMenu";
import Footer from "../../components/Footer";
import { LinkContainer } from "react-router-bootstrap";
import { openThread } from "../Messages/messageSlice";

function Threads() {
    const [threadModalOpen, setThreadModalOpen] = useState(false);
    const [threadModalData, setThreadModalData] = useState(undefined);
    const [confirmDeleteModalData, setConfirmDeleteModalData] =
        useState(undefined);
    const [threads, setThreads] = useState([]);
    const bearerToken = useSelector(selectToken);
    const dispatch = useDispatch();

    function closeModal() {
        setThreadModalOpen(false);
        setThreadModalData(undefined);
    }

    function openModal() {
        setThreadModalOpen(true);
    }

    function closeConfirmDeleteModal() {
        setConfirmDeleteModalData(undefined);
    }

    function extractThreadId(inputString, unwantedSubString) {
        const extractedThreadID = inputString.replace(unwantedSubString, "");
        return extractedThreadID;
    }

    function onOpenClicked(e){
        const threadID = extractThreadId(e.target.id, "ViewForumThreadButton");
        dispatch(openThread(threadID));
    }

    function onEditClicked(e) {
        const threadID = extractThreadId(e.target.id, "EditForumThreadButton");
        get(bearerToken, threadID)
            .then((res) => {
                const threadData = res.data;
                setThreadModalData(threadData);
                openModal();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function onDeleteClicked(e) {
        const threadID = extractThreadId(e.target.id, "DeleteForumThreadButton");
        console.log(threadID);
        setConfirmDeleteModalData(threadID);
    }

    function updateThreadState() {
        getAll(bearerToken)
            .then((result) => {
                return new Promise((resolve) => {
                    resolve(setThreads(result.data));
                    console.log(result.data);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        updateThreadState();
    }, []);

    function renderThreads() {
        return (
            <ul className="flex flex-wrap pl-0 justify-center w-full pb-16">
                {threads.map((thread, index) => {
                    const id = "ForumThread" + thread._id;
                    return (
                        <div
                            id={id}
                            key={`${thread._id}`}
                            className="bg-gray-100 w-80 h-64 m-2 forumThread"
                        >
                            <Card.Title className="pt-5">
                                {thread.userName}
                            </Card.Title>
                            <Card.Text>Thread ID: {thread._id}</Card.Text>
                            <Card.Text>Owner ID: {thread.ownerID}</Card.Text>
                            <Card.Text>Thread Name: {thread.name}</Card.Text>
                            <Card.Text>
                                Description: {thread.description}
                            </Card.Text>
                            <div>
                                <LinkContainer to="/messages">
                                    <Button
                                        className="warning mr-1"
                                        id={`ViewForumThreadButton${thread._id}`}
                                        onClick={onOpenClicked}
                                    >
                                        Open
                                    </Button>
                                </LinkContainer>
                                <Button
                                    className="warning mr-1"
                                    id={`EditForumThreadButton${thread._id}`}
                                    onClick={onEditClicked}
                                >
                                    Edit
                                </Button>
                                <Button
                                    className="ml-1"
                                    id={`DeleteForumThreadButton${thread._id}`}
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
                    threadID={confirmDeleteModalData}
                    closeConfirmDeleteModal={closeConfirmDeleteModal}
                    updateThreadState={updateThreadState}
                />
            ) : null}
            {/* open modal in post mode */}
            {threadModalOpen && !threadModalData ? (
                <ThreadModal
                    title="Add new thread"
                    closeModal={closeModal}
                    openModal={openModal}
                    updateThreadState={updateThreadState}
                    rerenderThreads={renderThreads}
                />
            ) : null}
            {/* open modal in edit mode */}
            {threadModalOpen && threadModalData ? (
                <ThreadModal
                    title="Edit thread"
                    modalData={threadModalData}
                    closeModal={closeModal}
                    openModal={openModal}
                    updateThreadState={updateThreadState}
                    rerenderThreads={renderThreads}
                />
            ) : null}
            <Button
                id="OpenCreateForumThreadDialogButton"
                className="primary mt-10"
                onClick={openModal}
            >
                add thread
            </Button>
            {renderThreads()}
            <Footer />
        </div>
    );
}

export default Threads;
