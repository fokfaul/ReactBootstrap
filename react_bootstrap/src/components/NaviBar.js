import React, {useState} from "react";
import {Button, Container, Modal, Nav, Navbar, Form} from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav, .nav-link {
        color: #adb1b8;
        &:hover {
            color: white
        }
    }
`

export default function NaviBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (<>
        <Styles>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>WebDev Blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/users">Users</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            <Button variant="primary" className="me-2" onClick={handleShow}>Log in</Button>
                            <Button variant="primary" onClick={handleShow}>Sign out</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Log in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="fromBasicEmail">
                        <Form.Label>Email Adress</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="fromBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group controlId="fromBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me?"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    </>);
}