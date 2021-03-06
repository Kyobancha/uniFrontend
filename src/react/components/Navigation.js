import { useSelector } from "react-redux";
import { selectStatus, selectUser } from "../pages/Users/userSlice";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"; //replaces NavLink and is useful for designing with bootstrap

function Navigation(props) {
    const loginStatus = useSelector(selectStatus);
    const user = useSelector(selectUser);

    return loginStatus !== "loggedIn" ? (
        <Navbar bg="dark" variant="dark" expand="sm">
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
                        <LinkContainer to="/threads" id="OpenForumThreadOverviewButton">
                            <Nav.Link>Threads</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                <Button
                    to="/login"
                    id="OpenLoginDialogButton"
                    onClick={props.openModal}
                >
                    Login
                </Button>
            </Container>
        </Navbar>
    ) : (
        <Navbar bg="dark" variant="dark" expand="sm">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>uni Frontend Forum</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/" id="OpenPrivatePageButton">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        {user?.isAdministrator ? (
                            <LinkContainer
                                to="/users"
                                id="OpenUserManagementButton"
                            >
                                <Nav.Link>Users</Nav.Link>
                            </LinkContainer>
                        ) : null}
                        <LinkContainer to="/threads" id="OpenForumThreadOverviewButton">
                            <Nav.Link>Threads</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                <Button
                    to="/login"
                    id="LogoutButton"
                    className=""
                    onClick={props.closeModalAndLogout}
                >
                    Logout
                </Button>
            </Container>
        </Navbar>
    );
}

export default Navigation;
