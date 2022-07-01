import TopMenu from "../components/TopMenu";
import Footer from "../components/Footer";

function Privacy() {
    return (
        <div>
            <TopMenu />
            <h1 className="text-5xl font-bold text-center">Data Privacy</h1>
            <div className="flex justify-center">
                <div className="text-left mt-10">
                    <p>Any data you provide will be kept in our database.</p>
                    <p>
                        Other than that we do not analyze nor process any of
                        your data.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Privacy;
