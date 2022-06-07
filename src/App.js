import Home from "./react/pages/Home";
import "./App.css";
import Navigation from "./react/components/Navigation";
import Footer from "./react/components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import LoginModal from "./react/components/LoginModal";

function App() {
    const [modalOpen, setModalOpen] = useState(false)

    function toggleModal(){
        setModalOpen(!modalOpen)
    }

    return (
        <div className="h-100% bg-gradient-to-r from-cyan-400 to-blue-500">
            <div className="flex space-between justify-between">
                <h3>Cool Forum</h3>
                <button to="/login" onClick={toggleModal}>Login</button>
            </div>
            <Navigation/>
            {modalOpen ? <LoginModal toggleModal={toggleModal}></LoginModal> : null}
            <Outlet>
                <h1>test</h1>
                <Home>Hello world</Home>
                
            </Outlet>
            <Footer />
            
        </div>
    );
}

export default App;
