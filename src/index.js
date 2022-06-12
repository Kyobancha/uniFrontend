import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./react/pages/Home";
import Users from "./react/pages/Users";
import Threads from "./react/pages/Threads";
import Messages from "./react/pages/Messages";
import Imprint from "./react/pages/Imprint";
import Privacy from "./react/pages/Privacy";
import Contact from "./react/pages/Contact";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                {/* Here the tree of possible routes is defined */}
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
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
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
