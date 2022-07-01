import Background from "../../components/Background";
import TopMenu from "../../components/TopMenu";
import Footer from "../../components/Footer";

function PublicHome(props) {
    return (
        // Content depending on whether the user is logged in or not
        <div id="LandingPage">
            {/* <Background /> */}
            <TopMenu />
            <section className="mr-auto ml-auto w-150 block mt-10">
                <h2>Latest News</h2>
                <p>16.6.2020 - First defined milestone has been reached.</p>
                <p>
                    14.6.2020 - Login-Modal has been replaced with a
                    react-bootstrap component.
                </p>
                <p>
                    13.6.2020 - Logout has been implemented and works as
                    expected.
                </p>
                <p>
                    12.6.2020 - Login now works with redux and hides the login
                    dialog when credentials are correct.
                </p>
                <p>
                    7.6.2020 - A toggable login-module has been implemented.
                    Improvement of design. Navigation is now sticky.
                </p>
            </section>
            <section className="mr-auto ml-auto w-150 block mt-10">
                <h2>Who are we?</h2>
                <p>
                    This is a forum for all kinds of topics, so feel free to
                    open a new forum and post your messages!
                </p>
                <p>
                    In case you would like to open an account. Please message
                    our admin directly for now.
                </p>
                <p>
                    A registration service is planned and will be available
                    soon.
                </p>
            </section>
            <Footer />
        </div>
    );
}

export default PublicHome;
