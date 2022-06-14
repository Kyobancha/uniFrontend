import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectStatus } from "./LoginModal/loginSlice";
import LoginModal from "./LoginModal/LoginModal";
import Navigation from "./Navigation";

function TopBar() {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const loginStatus = useSelector(selectStatus);
    const loginToken = useSelector(selectStatus);

    function closeModalAndLogout(){
        closeModal();
        dispatch(logout());
    }

    function closeModal() {
        setModalOpen(false);
    }

    function openModal() {
        setModalOpen(true);
    }

    return (
        <div className="mb-5 sticky top-0">
            <div className="flex space-between justify-between">
                <h3>uni Frontend Forum</h3>
                {loginStatus === "loggedIn" ? 
                    <button to="/login" id="LogoutButton" onClick={closeModalAndLogout}>Logout</button> :
                    <button to="/login" id="OpenLoginDialogButton" onClick={openModal}>Login</button>
                }
            </div>
            <Navigation />
            {modalOpen ? (
                <LoginModal
                    modalOpen={modalOpen}
                    closeModal={closeModal}
                ></LoginModal>
            ) : null}
        </div>
    );
}

export default TopBar;
