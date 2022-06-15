import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectStatus } from "./LoginModal/loginSlice";
import LoginModal from "./LoginModal/LoginModal";
import Navigation from "./Navigation";
import { Button } from 'react-bootstrap';

function TopMenu() {
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
        <div className="mb-5 sticky top-0 ">
            <Navigation closeModalAndLogout={closeModalAndLogout} openModal={openModal}/>
            {modalOpen ? (
                <LoginModal
                    modalOpen={modalOpen}
                    closeModal={closeModal}
                ></LoginModal>
            ) : null}
        </div>
    );
}

export default TopMenu;
