import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectStatus } from "./LoginModal/loginSlice";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"; //replaces NavLink and is useful for designing with bootstrap

function Navigation(props) {
    const loginStatus = useSelector(selectStatus);

    

    return loginStatus === "loggedOut" ? (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">uni Frontend Forum</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>
                            Home
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/threads">
                        <Nav.Link >
                            Threads
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/messages">
                        <Nav.Link >
                            Messages
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    ) : (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">uni Frontend Forum</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <LinkContainer to="/">
                        <Nav.Link>
                            Home
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/users">
                        <Nav.Link >
                            Threads
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/threads">
                        <Nav.Link >
                            Threads
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/messages">
                        <Nav.Link >
                            Messages
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Navigation;
