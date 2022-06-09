import Home from "./react/pages/Home";
import "./App.css";
import Navigation from "./react/components/Navigation";
import Footer from "./react/components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import LoginModal from "./react/components/LoginModal";

function App() {
    const [modalOpen, setModalOpen] = useState(false)

    function closeModal(){
        setModalOpen(false)
    }

    function openModal(){
        setModalOpen(true)
    }

    return (
        <div className="h-100% bg-gradient-to-r from-cyan-400 to-blue-500">
            <div className="flex space-between justify-between">
                <h3>uni Frontend Forum</h3>
                <button to="/login" onClick={openModal}>Login</button>
            </div>
            <Navigation/>
            {modalOpen ? <LoginModal modalOpen={modalOpen} closeModal={closeModal}></LoginModal> : null}
            <Outlet>
                <h1>test</h1>
                <Home>Hello world</Home>
                
            </Outlet>
            <Footer />
            
        </div>
    );
}

export default App;
