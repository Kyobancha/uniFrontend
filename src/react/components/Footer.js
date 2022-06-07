import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-red my-5">
            <nav>
                <ul className="flex space-between justify-between">
                    <NavLink to="/imprint">Imprint</NavLink>
                    <NavLink to="/privacy">Data Privacy</NavLink> |{" "}
                    <NavLink to="/contact">Contact</NavLink>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
