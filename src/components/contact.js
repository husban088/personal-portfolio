import React from "react";
import { Navbar, Offcanvas, Nav, Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {

    return (
        <>
            <div className="contact__section" style={{ marginTop: "14rem" }}>
                <div className="skill__head contact__head">
                    <h1 className="skill__text">Talk to Us</h1>
                    <p className="contact__para">Feel free to send us your queries and details.</p>
                </div>
                <div className="contact__details">
                    <p className="ph__text phn__text"><i className='bx bx-phone' style={{ fontSize: "3rem" }}></i> <span className="cl__text"><p>Phone number</p>03000000000</span></p>
                    <p className="ph__text env__text"><i className='bx bx-envelope' style={{ fontSize: "3rem" }}></i> <span className="cl__text"><p>Our gmail</p>husbanahmad088@gmail.com</span></p>
                    <p className="ph__text loc__text"><i className='bx bx-location-plus' style={{ fontSize: "3rem" }}></i> <span className="cl__text"><p>Our location</p> Pakistan, Faisalabad</span></p>
                </div>
                <div className="contact__container">

                    <div className="row">
                        <div className="col-1-of-2">
                            <div className="contact__image">
                                <img className="contact__img" src="./assets/contactimg.png" />
                            </div>
                        </div>
                        <div className="col-1-of-2">
                            <div className="form__groups">
                                <form className="contact__form">
                                    <div className="inputbox">
                                   
                                        <input type="text" required />
                                        <span>Name</span>
                                        <i></i>                                  
                                    </div>                                 
                                 
                                    <div className="inputbox">
                                        <input type="email" required/>
                                        <span>Email</span>
                                        <i></i>                                   
                                    </div>
                               
                                    <div className="text__area">
                                        <textarea cols={10} rows={10} placeholder="Message" className="input__area"></textarea>
                                    </div>
                                   
                                    <div className="contact__button">
                                        <button className="contact__btn proj__buttons-btn"><a className="contact__button" href="mailto:088@gmail.com">CONTACT ME</a></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Contact;