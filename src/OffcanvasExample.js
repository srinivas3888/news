import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';


function OffcanvasExample() {
    
    return (
    <>
    <div className="sticky-top" style={{color:'white'}}>
        {[ 'md' ].map((expand) => (
        <Navbar id="nav" key={expand} expand={expand} className="mb-3 p-1 navbar" style={{color:'white'}}>
            <Container fluid>
            <Navbar.Brand as={Link} to='/' style={{color:'white'}}> Headlines Hub</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{color:'white', backgroundColor:'skyblue'}} />
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                style={{color:'white'}}
            >
                <Offcanvas.Header closeButton style={{color:"white"}}>
                <Nav.Link as={Link} to='/'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{color:'red'}}>
                    <h3>Headlines Hub</h3>
                    <p className="fs-6" style={{color:"black"}}>Close this offcanvas-bar, to see updates.</p>
                </Offcanvas.Title>
                </Nav.Link>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-2">
                    <Nav.Link as={Link} to='/' className="mx-2 my-1 text-bg-primary rounded-2 py-2 text-center">Home</Nav.Link>

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
                <p style={{color:"black", marginTop:'5.5rem'}}>
                <div style={{height:'15rem', bottom:'0px'}}>
            <h3 className="fs-6 d-flex justify-content-center" style={{color:'gray'}} ><span className="fs-5 m-1 p-1" style={{color:'green'}}> Headlines Hub </span> © 2024 Company, Inc</h3>
            <h5 className="fs-6 d-flex justify-content-center" style={{color:'crimson'}}>Created by - Srinivas Batthula</h5>
            <p className="fs-6 d-flex justify-content-center flex-row" style={{color:'black'}}>Contact me at :- 
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/srinivas-batthula?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <i className="bi bi-linkedin fs-4 m-2 p-2" style={{color:'blue'}}></i> </a>
                <a rel="noreferrer" target="_blank" href="https://www.instagram.com/"> <i className="bi bi-instagram fs-4 m-2 p-2" style={{color:'red'}}></i> </a>
            </p>
            <div className="d-flex justify-content-center">
            <h6 >News you can TRUST & Stories you will REMEMBER</h6>
            <p >Stay tuned to Headlines Hub,, Stay updated</p>
            </div>
            </div>
                </p>
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