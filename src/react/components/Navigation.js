import { Link, NavLink } from "react-router-dom"
import LoginModal from "./LoginModal"
import { useState } from "react"



function Navigation() {
    const [modalOpen, setModalOpen] = useState(false)

    function toggleModal(){
        console.log("go")
        setModalOpen(!modalOpen)
    }

    return (
        <div className="mb-5">
            <div className="flex space-between justify-between">
                <h3>Cool Forum</h3>
                <button to="/login" onClick={toggleModal}>Login</button>
            </div>
            <nav>
                <ul className="flex space-between justify-between align-center">
                    <NavLink to="/">Home</NavLink> |{" "}
                    <NavLink to="/users">Users</NavLink> |{" "}
                    <NavLink to="/threads">Threads</NavLink> |{" "}
                    <NavLink to="/messages">Messages</NavLink>
                </ul>
            </nav>
            {modalOpen ? <LoginModal toggleModal={toggleModal}></LoginModal> : null}
        </div>
    )
}

export default Navigation