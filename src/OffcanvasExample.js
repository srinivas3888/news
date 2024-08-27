import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function OffcanvasExample() {
    
    return (
    <>
    <div className="sticky-top">
        {[ 'md' ].map((expand) => (
        <Navbar id="nav" key={expand} expand={expand} className="mb-3 p-1 navbar">
            <Container fluid>
            <Navbar.Brand as={Link} to='/news' style={{color:'white'}}><FontAwesomeIcon icon="fa-solid fa-rss" style={{fontSize:'2rem', color:'greenyellow'}} />Headlines Hub</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
            >
                <Offcanvas.Header closeButton>
                <Nav.Link as={Link} to='/news'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Headlines Hub
                </Offcanvas.Title>
                </Nav.Link>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-2">
                    <Nav.Link as={Link} to='/news' className="mx-2 my-1 text-bg-primary rounded-2 py-2 text-center">Home</Nav.Link>

                <div className="d-flex justify-content-center ">
                <Dropdown className="mx-2 my-1 border-white">
                    <Dropdown.Toggle id="dropdown-autoclose-true" className="bg-blue text-white py-2 text-center">
                    News-Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/sports' className="my-2 text-center">Sports</Dropdown.Item>
                    <Dropdown.Item as={Link} to='/health' className="my-2 text-center">Health</Dropdown.Item>
                    <Dropdown.Item as={Link} to='/business' className="my-2 text-center">Business</Dropdown.Item>
                    <Dropdown.Item as={Link} to='/technology' className="my-2 text-center">Technology</Dropdown.Item>
                    <Dropdown.Item as={Link} to='/entertainment' className="my-2 text-center">Entertainment</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </div>

                <Nav.Link as={Link} to='/ai-news' className="mx-2 my-1 text-bg-primary rounded-2 py-2 text-center">AI-assist.</Nav.Link>
                <Nav.Link as={Link} to='/subscribe' className="ms-2 me-1 my-1 text-bg-primary rounded-2 py-2 text-center">Subscribe</Nav.Link>
                </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Container>
        </Navbar>
        ))}
    </div>
    </>
    );
}


export {OffcanvasExample};