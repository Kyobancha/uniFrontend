import image from "../../img/landingpage-background.jpg";

function HomePage(props) {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Welcome</h1>
            <div className="mr-auto ml-auto w-150 block">
                <p>This is a forum for all kinds of topics.</p>
                <p>Feel free to open a new forum and post messages!</p>
                <p>In case you would like to open an account. Please message our admin directly.</p>
                <p>A registration service will be available soon</p>
            </div>
        </div>
    );
}

export default HomePage;
