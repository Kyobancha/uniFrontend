import { useState } from "react";
import { useSelector } from "react-redux";
import { selectStatus } from "./LoginModal/loginSlice";
import LoginModal from "./LoginModal/LoginModal";
import Navigation from "./Navigation";

function TopBar() {
    const [modalOpen, setModalOpen] = useState(false)

    const loginStatus = useSelector(selectStatus)
    
    function closeModal() {
        setModalOpen(false)
    }

    function openModal() {
        setModalOpen(true)
    }

    return (
        <div className="mb-5 sticky top-0">
            <div className="flex space-between justify-between">
                <h3>uni Frontend Forum</h3>
                <button to="/login" onClick={openModal}>{`${loginStatus === "loggedIn" ? "Logout" : "Login"}`}</button>
            </div>
            <Navigation />
            {modalOpen ? <LoginModal modalOpen={modalOpen} closeModal={closeModal}></LoginModal> : null}
        </div>
    )
}

export default TopBar;