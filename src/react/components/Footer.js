import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"; //replaces NavLink and is useful for designing with bootstrap


function Footer(props) {
    return (
        <Navbar bg="dark" variant="dark" expand="sm" fixed="bottom">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/imprint">
                            <Nav.Link>Imprint</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/privacy">
                            <Nav.Link>Data Privacy</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <footer className={props.className}>
        //     <nav>
        //         <ul className="flex space-between justify-between">
        //             <NavLink to="/imprint">Imprint</NavLink> |{" "}
        //             <NavLink to="/privacy">Data Privacy</NavLink> |{" "}
        //             <NavLink to="/contact">Contact</NavLink>
        //         </ul>
        //     </nav>
        // </footer>
    );
}

export default Footer;
