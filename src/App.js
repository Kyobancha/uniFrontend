import HomePage from "./react/pages/HomePage";
import "./App.css";
import Navigation from "./react/components/Navigation";
import Footer from "./react/components/Footer";
import Impressum from "./react/pages/Impressum";
import DataPrivacy from "./react/pages/DataPrivacy";
import Contact from "./react/pages/Contact";

function App() {
    return (
        <div className="h-100% bg-gradient-to-r from-cyan-400 to-blue-500">
            <Navigation />
            <HomePage>Hello world</HomePage>
            <Footer />
            <Contact></Contact>
        </div>
    );
}

export default App;
