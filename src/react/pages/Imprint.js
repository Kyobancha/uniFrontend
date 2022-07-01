import Adress from "../components/Adress";
import Footer from "../components/Footer";
import TopMenu from "../components/TopMenu";

function Imprint() {
    return (
        <div>
            <TopMenu />
            <h1 className="text-5xl font-bold text-center mb-10">Imprint</h1>
            <Adress></Adress>
            <Footer />
        </div>
    );
}

export default Imprint;
