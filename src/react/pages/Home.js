import image from "../../img/landingpage-background.jpg";

function PublicHome(props) {
    return (
        // Content depending on whether the user is logged in or not
        <div>
            <h1 className="text-5xl font-bold text-center">Welcome</h1>
            <section className="mr-auto ml-auto w-150 block mt-10">
                <h2 className="mr-auto ml-auto mt-10 text-3xl font-bold">Latest News</h2>
                <p>7.6.2020 - A toggable login-module has been implemented</p>
                <p>7.6.2020 - A toggable login-module has been implemented</p>
                <p>7.6.2020 - A toggable login-module has been implemented</p>
                <p>7.6.2020 - A toggable login-module has been implemented</p>
                <p>7.6.2020 - A toggable login-module has been implemented</p>
                <p>7.6.2020 - A toggable login-module has been implemented</p>
                <p>7.6.2020 - A toggable login-module has been implemented</p>
                <p>7.6.2020 - A toggable login-module has been implemented</p>
                <p>7.6.2020 - A toggable login-module has been implemented</p>
                <p>7.6.2020 - A toggable login-module has been implemented</p>
                <p>7.6.2020 - A toggable login-module has been implemented</p>
                <p>7.6.2020 - A toggable login-module has been implemented</p>
                <p>7.6.2020 - A toggable login-module has been implemented</p>
                <p>13.6.2020 - Logout has been implemented and works as expected.</p>
                <p>12.6.2020 - Login now works with redux and hides the login dialog when credentials are correct.</p>
                <p>7.6.2020 - A toggable login-module has been implemented. Improvement of design. Navigation is now sticky.</p>
            </section>
            <section className="mr-auto ml-auto w-150 block mt-10">
                <h2 className="mr-auto ml-auto mt-10 text-3xl font-bold">Who are we?</h2>
                <p>This is a forum for all kinds of topics, so feel free to open a new forum and post your messages!</p>
                <p>In case you would like to open an account. Please message our admin directly for now.</p>
                <p>A registration service is planned and will be available soon.</p>
            </section>
        </div>
    );
}

export default PublicHome;
