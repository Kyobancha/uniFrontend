import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicHome from "./react/pages/PublicHome";
import Users from "./react/pages/Users";
import Threads from "./react/pages/Threads";
import Messages from "./react/pages/Messages";
import Imprint from "./react/pages/Imprint";
import Privacy from "./react/pages/Privacy";
import Contact from "./react/pages/Contact";
import LandingPage from "./react/pages/LandingPage";
import { useSelector } from "react-redux";
import { selectStatus } from "./react/components/LoginModal/loginSlice";
import PrivateHome from "./react/pages/PrivateHome";

function App() {
    const loginStatus = useSelector(selectStatus);
    if(loginStatus === "loggedIn"){
        return (
            <BrowserRouter>
                {/* Here the tree of possible routes is defined */}
                <Routes>
                    <Route path="/" element={<LandingPage />}>
                        <Route index element={<PrivateHome />} />
                        <Route path="users" element={<Users />} />
                        <Route path="threads" element={<Threads />} />
                        <Route path="messages" element={<Messages />} />
                        <Route path="imprint" element={<Imprint />} />
                        <Route path="privacy" element={<Privacy />} />
                        <Route path="contact" element={<Contact />} />
                        <Route
                            path="*"
                            element={
                                <main>
                                    <p>404 Not found</p>
                                </main>
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    } else{
        return (
            <BrowserRouter>
                {/* Here the tree of possible routes is defined */}
                <Routes>
                    <Route path="/" element={<LandingPage />}>
                        <Route index element={<PublicHome />} />
                        <Route path="users" element={<Users />} />
                        <Route path="threads" element={<Threads />} />
                        <Route path="messages" element={<Messages />} />
                        <Route path="imprint" element={<Imprint />} />
                        <Route path="privacy" element={<Privacy />} />
                        <Route path="contact" element={<Contact />} />
                        <Route
                            path="*"
                            element={
                                <main>
                                    <p>404 Not found</p>
                                </main>
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
    
}

export default App;
