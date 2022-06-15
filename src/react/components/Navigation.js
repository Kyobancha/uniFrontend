import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectStatus } from "./LoginModal/loginSlice";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"; //replaces NavLink and is useful for designing with bootstrap

function Navigation(props) {
    const loginStatus = useSelector(selectStatus);

    return loginStatus !== "loggedIn" ? (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>uni Frontend Forum</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/threads">
                            <Nav.Link>Threads</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/messages">
                            <Nav.Link>Messages</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                <Button to="/login" id="OpenLoginDialogButton" onClick={props.openModal}>Login</Button>
            </Container>
        </Navbar>
    ) : (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>uni Frontend Forum</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/users">
                            <Nav.Link>Users</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/threads">
                            <Nav.Link>Threads</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/messages">
                            <Nav.Link>Messages</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                <Button to="/login" id="LogoutButton" className="" onClick={props.closeModalAndLogout}>Logout</Button>
            </Container>
        </Navbar>
    );
}

export default Navigation;
