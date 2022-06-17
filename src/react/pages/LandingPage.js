import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import TopMenu from "../components/TopBar";
import PublicHome from "./PublicHome";

function LandingPage() {
    return (
        <div className="h-100%">
            <TopMenu />
            <Outlet>
                <PublicHome>Hello world</PublicHome>
            </Outlet>
            <Footer />
        </div>
    );
}

export default LandingPage;
