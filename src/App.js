
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Users from "./react/pages/Users/Users";
import Threads from "./react/pages/Threads/Threads";
import Messages from "./react/pages/Messages/Messages";
import Imprint from "./react/pages/Imprint";
import Privacy from "./react/pages/Privacy";
import Contact from "./react/pages/Contact";
import PublicHome from "./react/pages/landingPage/PublicHome";
import PrivateHome from "./react/pages/landingPage/PrivateHome";
import { useSelector } from "react-redux";
import { selectStatus } from "./react/components/LoginModal/userSlice";

function App() {
    const loginStatus = useSelector(selectStatus);
    if (loginStatus === "loggedIn") {
        return (
            <BrowserRouter>
                <Routes>
                    <Route
                        index
                        id="OpenPrivatePageButton"
                        element={<PrivateHome />}
                    />
                    <Route
                        path="/users"
                        id="OpenUserManagementButton"
                        element={<Users />}
                    />
                    <Route path="/threads" element={<Threads />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/imprint" element={<Imprint />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        );
    } else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route index element={<PublicHome />} />
                    <Route path="/threads" element={<Threads />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/imprint" element={<Imprint />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;