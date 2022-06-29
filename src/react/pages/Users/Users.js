import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../components/LoginModal/userSlice";
import { get, getAll, remove } from "../../services/UserService";
import { Card, Button } from "react-bootstrap";
import UserModal from "./UserModal";

function Users() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setmodalData] = useState(undefined)
    const [users, setUsers] = useState([]);
    const bearerToken = useSelector(selectToken);

    function closeModal() {
        setModalOpen(false);
    }

    function openModal() {
        if(modalData){
            get(bearerToken, modalData.userID)
                .then(user => {
                    setModalOpen(true); //open modal in PUT-mode
                    setmodalData(user);
                })
        } else{
            setModalOpen(true); //open modal in POST-mode
        }
    }

    function extractUserId(inputString, unwantedSubString){
        const extractedUserID = inputString.replace(unwantedSubString, "");
        return extractedUserID;
    }

    function onEditClicked(e){
        const userID = extractUserId(e.target.id, "EditButton")
        get(userID)
    }

    function onDeleteClicked(e){
        const userID = extractUserId(e.target.id, "DeleteButton")
        
        remove(userID)
            .then(() => {
                return updateUserState();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function renderUsers(){
        return (
            <ul className="flex flex-col justify-center pl-0">
                {users.map((user, index) => {
                    return (
                        <div key={user.userID} className="bg-gray-100 w-80 h-64 m-2">
                            <Card.Title className="pt-5">{user.userName}</Card.Title>
                            <Card.Text>ID: {user.userID}</Card.Text>
                            <Card.Text>Administrator: {user.isAdministrator}</Card.Text>
                            <div>
                                <Button className="warning mr-1" id={`EditButton${user.userID}`} onClick={onEditClicked}>Edit</Button>
                                <Button className="ml-1" id={`DeleteButton${user.userID}`} onClick={onDeleteClicked}>Delete</Button>
                            </div>
                        </div>
                    );
                })}
            </ul>
        )
    }

    function updateUserState(){
        getAll(bearerToken)
            .then((result) => {
                return new Promise(resolve => {
                    resolve(setUsers(result.data));
                    console.log(users);
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        updateUserState()
    }, []);

    return (
        <div id="Container" className="text-center">
            {/* open modal in post mode */}
            {modalOpen && !modalData ? (
                <UserModal
                    title="Add new user"
                    closeModal={closeModal}
                    openModal={openModal}
                    updateUserState={updateUserState}
                    rerenderUsers={renderUsers}
                />
            ) : null}
            {/* open modal in edit mode */}
            {modalOpen && modalData ? (
                <UserModal
                    title="Edit user"
                    modalData={modalData}
                    closeModal={closeModal}
                    openModal={openModal}
                    updateUserState={updateUserState}
                    rerenderUsers={renderUsers}
                />
            ) : null}
            <Button className="primary" onClick={openModal}>
                add User
            </Button>
            {renderUsers()}
        </div>
    );
}

export default Users;
