import React from 'react';
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/esm/Nav';
import { Link } from "react-router-dom";

const MainNavbar = () => {
    return <div className="mb-4">
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">CoteriesLab</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
                <Nav.Link as={Link} to="/users">Users</Nav.Link>
            </Nav>
        </Navbar>
    </div>;
};


export default MainNavbar;
