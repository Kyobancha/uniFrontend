import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import TopMenu from "../components/TopBar";
import PublicHome from "./Home";

function LandingPage() {
    return (
        <div id="LandingPage" className="h-100%">
            <TopMenu />
            <Outlet>
                <h1>test</h1>
                <PublicHome>Hello world</PublicHome>
            </Outlet>
            <Footer />
        </div>
    );
}

export default LandingPage;
