import Adress from "../components/Adress";
import Form from "../components/Form";
import Footer from "../components/Footer";
import TopMenu from "../components/TopMenu";

function Contact() {
    return (
        <div>
            <TopMenu />
            <h1 className="text-5xl font-bold mb-5 text-center">Contact</h1>
            <p className="w-96 ml-auto mr-auto mb-4">
                Having concerns or ideas for this website? Please feel free to
                Leave us a message and we will get right back at you!
            </p>
            <Form></Form>
            <Footer />
        </div>
    );
}

export default Contact;
