import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Offcanvas, Nav, Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbarx = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            

                 {/* =================== NAVBAR ======================= */}

                 <Navbar expand="lg" className="custom-navbar">
                <Container fluid>

                    <Navbar.Brand className="custom-brand"><Link className="nav__brand" to={'/'} style={{ textDecoration: "none", color: "#fff" }}>Husban ahmad</Link></Navbar.Brand>


                    <Nav className="ms-auto d-none d-lg-flex custom-nav">
                        <Nav.Link onClick={handleClose}><Link to={'/'} style={{ textDecoration: "none", color: "#fff" }}>Home</Link></Nav.Link>
                        <Nav.Link onClick={handleClose}><Link to={'/projects'} style={{ textDecoration: "none", color: "#fff" }}>Projects</Link></Nav.Link>
                        <Nav.Link onClick={handleClose}><Link to={'/skills'} style={{ textDecoration: "none", color: "#fff" }}>Skills</Link></Nav.Link>
                        <Nav.Link onClick={handleClose}><Link to={'/testimonials'} style={{ textDecoration: "none", color: "#fff" }}>Testimonials</Link></Nav.Link>
                        <Nav.Link onClick={handleClose}><Link to={'/contact'} style={{ textDecoration: "none", color: "#fff" }}>Contact</Link></Nav.Link>
                    </Nav>


                    <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={()=> setShow(!show)} className="ms-auto d-lg-none navside__btn"/>
                </Container>
            </Navbar>


            <Offcanvas show={show} onHide={handleClose} placement="start" backdrop={true} className='navside__bar'>
                <Offcanvas.Header closeButton className="navside__close">
                    <Offcanvas.Title><Link to={'/'} style={{ textDecoration: "none", color:"#000" }} onClick={handleClose} className="custom-brand">Husban ahmad</Link></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column navside__nav">
                       <Link onClick={handleClose} to={'/'} style={{ textDecoration: "none" }} className="navside__links">Home</Link>

                       <Link onClick={handleClose} to={'/projects'} style={{ textDecoration: "none" }} className="navside__links">Projects</Link>

    
                   <Link onClick={handleClose} to={'/skills'} style={{ textDecoration: "none"}} className="navside__links">Skills</Link>
                       <Link onClick={handleClose} to={'/testimonials'} style={{ textDecoration: "none" }} className="navside__links">Testimonials</Link>
                       <Link onClick={handleClose} to={'/contact'} style={{ textDecoration: "none" }} className="navside__links">Contact</Link>


                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>




        </>
    )
}

export default Navbarx;