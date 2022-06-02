import image from "../../img/landingpage-background.jpg";

function LandingPage(props) {
    return (
        <div>
            <h1>{props.children}</h1>
            {/* <div style={background-image: url(${image})}  /> */}
        </div>
    );
}

export default LandingPage;
