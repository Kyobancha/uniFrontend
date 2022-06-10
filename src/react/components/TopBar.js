import { useState } from "react";
import LoginModal from "./LoginModal";
import Navigation from "./Navigation";

function TopBar() {
    const [modalOpen, setModalOpen] = useState(false)

    //Login HTTP call über eigenes Modul laufen lassen
    //ServiceModul AuthenticationService von dem ich die Call machen kann


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
                <button to="/login" onClick={openModal}>Login</button>
            </div>
            <Navigation />
            {modalOpen ? <LoginModal modalOpen={modalOpen} closeModal={closeModal}></LoginModal> : null}
        </div>
    )
}

export default TopBar;