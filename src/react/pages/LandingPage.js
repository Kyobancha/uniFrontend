import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";
import PublicHome from "./Home";

function LandingPage(){
    return(
        <div id="LandingPage" className="h-100% bg-gradient-to-r from-cyan-100 to-blue-100">
            <TopBar />
            <Outlet>
                <h1>test</h1>
                <PublicHome>Hello world</PublicHome>
            </Outlet>
            <Footer />
        </div>
    )
}

export default LandingPage;