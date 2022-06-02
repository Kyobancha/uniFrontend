import HomePage from "./react/pages/HomePage";
import "./App.css";
import Navigation from "./react/components/Navigation";
import Footer from "./react/components/Footer";

function App() {
    return (
        <div className="h-100% bg-gradient-to-r from-cyan-400 to-blue-500 text-center">
            <Navigation />
            <HomePage>Hello world</HomePage>
            <Footer />
        </div>
    );
}

export default App;
