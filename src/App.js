import Home from "./react/pages/Home";
import "./App.css";
import Navigation from "./react/components/Navigation";
import Footer from "./react/components/Footer";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="h-100% bg-gradient-to-r from-cyan-400 to-blue-500">
            <Navigation />
            <Outlet>
                <h1>test</h1>
                <Home>Hello world</Home>
            </Outlet>
            <Footer />
        </div>
    );
}

export default App;
