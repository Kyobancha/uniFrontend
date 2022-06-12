import Home from "./react/pages/Home";
import "./App.css";
import Footer from "./react/components/Footer";
import { Outlet } from "react-router-dom";
import TopBar from "./react/components/TopBar";
import { Counter } from "./react/reduxtemp/Counter";

function App() {
    return (
        <div className="h-100% bg-gradient-to-r from-cyan-100 to-blue-100">
            {/* <Counter></Counter> */}
            <TopBar></TopBar>
            <Outlet>
                <h1>test</h1>
                <Home>Hello world</Home>
            </Outlet>
            <Footer />
        </div>
    );
}

export default App;
