import React, { useRef } from "react";
import '../App.css'
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper.min.css'; // For Swiper styles
import '../../node_modules/swiper/modules/pagination.min.css';
import { Navigation, Pagination } from 'swiper/modules';
import html from './images/html.png';
import css from './images/css.png';
import bootstrap from './images/bootstrap.png';
import js from './images/js.png';
import firebase from './images/firebase.png';
import react from './images/react.png';
import tailwind from './images/tailwind.png';
import husban from './images/img4.jpg';
import usermale2 from './images/usermale2.png';
import usermale from './images/userpng.jpg';
import usermale1 from './images/pnguser.png';
import userfemale from './images/userfemale.png';
import userfemale1 from './images/userfemale1.png';
import { Navbar, Offcanvas, Nav, Container, Row, Col, Card, Button } from 'react-bootstrap';


const Home = () => {


    const cards = [
        { title: "HTML", progress: "95%", image: html },
        { title: "CSS", progress: "95%", image: css },
        { title: "JavaScript", progress: "90%", image: js },
        { title: "Bootstrap", progress: "90%", image: bootstrap },
        { title: "Tailwind", progress: "80%", image: tailwind },
        { title: "React", progress: "90%", image: react },
        { title: "Firebase", progress: "90%", image: firebase },
    ];





    const swiperRef = useRef(null);

    const applyBlurEffect = (swiper) => {
        const slides = swiper.slides;
        const activeIndex = swiper.activeIndex;

        slides.forEach((slide, index) => {
            // Reset all slides to default
            slide.style.filter = 'blur(2px)';
            slide.style.opacity = '0.6';

            if (index === activeIndex) {
                slide.style.filter = 'none';
                slide.style.opacity = '1';
            } else if (index === activeIndex - 1 || index === activeIndex + 1) {
                slide.style.filter = 'blur(2px)';
                slide.style.opacity = '0.8';
            }
        });
    };

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiperInstance = swiperRef.current.swiper;
            applyBlurEffect(swiperInstance);

            swiperInstance.on('slideChange', () => applyBlurEffect(swiperInstance));
        }
    }, []);

    return (
        <>


            <div className="home__section">
                <div className='row'>
                    <div className="col-1-of-2">
                        <div className="home__details">
                            <h2 className="head__text"> Hi I,m <span>Husban Ahmad</span></h2>
                            <h2 className="sub__text">And i am <span></span></h2>
                            <p className="home__para">
                            Hey! Are you looking for a Google Firebase Developer, Web developer, React developer or UI/UX Developer? I have two years of experience and working to make your development faster, easier and efficient. Available 24/7 get in touch to discuss details.
                            </p>
                            <div className="home__button">
                                <button class="custom-btn btn-9">Hire me</button>
                            </div>



                            <div className="social-icon twitter-icon">
                                <div className="social-icon-bloom"></div>
                                <div className="social-icon-sparkle">
                                    <div className="social-icon-sparkle-line"></div>
                                    <div className="social-icon-sparkle-line"></div>
                                    <div className="social-icon-sparkle-line"></div>
                                    <div className="social-icon-sparkle-line"></div>
                                    <div className="social-icon-sparkle-line"></div>
                                </div>
                                <svg className="social-icon-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                </svg>
                            </div>


                            <div className="social-icon facebook-icon">
                                <div className="social-icon-bloom"></div>
                                <div className="social-icon-sparkle">
                                    <div className="social-icon-sparkle-line"></div>
                                    <div className="social-icon-sparkle-line"></div>
                                    <div className="social-icon-sparkle-line"></div>
                                    <div className="social-icon-sparkle-line"></div>
                                    <div className="social-icon-sparkle-line"></div>
                                </div>
                                <svg className="social-icon-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                </svg>
                            </div>


                            <div className="social-icon instagram-icon">
                                <div className="social-icon-bloom"></div>
                                <div className="social-icon-sparkle">
                                    <div className="social-icon-sparkle-line"></div>
                                    <div className="social-icon-sparkle-line"></div>
                                    <div className="social-icon-sparkle-line"></div>
                                    <div className="social-icon-sparkle-line"></div>
                                    <div className="social-icon-sparkle-line"></div>
                                </div>
                                <svg className="social-icon-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                </svg>
                            </div>

                            <div className="social-icon snapchat-icon">
                                <div className="social-icon-bloom"></div>
                                <div className="social-icon-sparkle">
                                    <div className="social-icon-sparkle-line"></div>
                                    <div className="social-icon-sparkle-line"></div>
                                    <div className="social-icon-sparkle-line"></div>
                                    <div className="social-icon-sparkle-line"></div>
                                    <div className="social-icon-sparkle-line"></div>
                                </div>
                                <svg className="social-icon-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M510.846 392.673c-5.211 12.157-27.239 21.089-67.36 27.318-2.064 2.786-3.775 14.686-6.507 23.956-1.625 5.566-5.623 8.869-12.128 8.869l-.297-.005c-9.395 0-19.203-4.323-38.852-4.323-26.521 0-35.662 6.043-56.254 20.588-21.832 15.438-42.771 28.764-74.027 27.399-31.646 2.334-58.025-16.908-72.871-27.404-20.714-14.643-29.828-20.582-56.241-20.582-18.864 0-30.736 4.72-38.852 4.72-8.073 0-11.213-4.922-12.422-9.04-2.703-9.189-4.404-21.263-6.523-24.13-20.679-3.209-67.31-11.344-68.498-32.15a10.627 10.627 0 0 1 8.877-11.069c69.583-11.455 100.924-82.901 102.227-85.934.074-.176.155-.344.237-.515 3.713-7.537 4.544-13.849 2.463-18.753-5.05-11.896-26.872-16.164-36.053-19.796-23.715-9.366-27.015-20.128-25.612-27.504 2.437-12.836 21.725-20.735 33.002-15.453 8.919 4.181 16.843 6.297 23.547 6.297 5.022 0 8.212-1.204 9.96-2.171-2.043-35.936-7.101-87.29 5.687-115.969C158.122 21.304 229.705 15.42 250.826 15.42c.944 0 9.141-.089 10.11-.089 52.148 0 102.254 26.78 126.723 81.643 12.777 28.65 7.749 79.792 5.695 116.009 1.582.872 4.357 1.942 8.599 2.139 6.397-.286 13.815-2.389 22.069-6.257 6.085-2.846 14.406-2.461 20.48.058l.029.01c9.476 3.385 15.439 10.215 15.589 17.87.184 9.747-8.522 18.165-25.878 25.018-2.118.835-4.694 1.655-7.434 2.525-9.797 3.106-24.6 7.805-28.616 17.271-2.079 4.904-1.256 11.211 2.46 18.748.087.168.166.342.239.515 1.301 3.03 32.615 74.46 102.23 85.934 6.427 1.058 11.163 7.877 7.725 15.859z"></path>
                                </svg>
                            </div>




                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <div className="image__section">
                            <div className="image__box">
                                <img src="./assets/red.jpg" className="home__img" alt="Husban" />
                            </div>
                            <p className="yr__text"><i class='bx bx-desktop' style={{ color: "lightskyblue", fontSize: "3rem" }}></i> <span>35+ projects completed</span></p>
                            <p className="yr__text desk__text"><i class='bx bx-code-alt' style={{ color: "lightskyblue", fontSize: "3rem" }}></i> <span>1+ years of experience</span></p>
                            <div>

                            </div>

                            {/* <div className="home__icons">
                        <img src="./assets/html.png" className="html__img icon__img"/>
                        <img src="./assets/css.png" className="css__img icon__img"/>
                        <img src="./assets/js.png" className="js__img icon__img"/>
                        <img src="./assets/react.png" className="react__img icon__img" />
                    </div> */}

                        </div>

                    </div>
                </div>



                {/* ====================== SKILLS SECTION ============================ */}

                {/* <div className="skills__section">
                    <div className="skill__head">
                        <h1 className="skill__text">MY SKILLS</h1>
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">
                            <div className="skill__cont">
                                <div className="skill__cont__head">
                                    <h1 className="tech__skills">Technical skills</h1>
                                </div>

                                <div className="tech__bars">
                                    <div className="bar"><i class='bx bxl-html5' style={{ color: "#c95d2e" }}></i>

                                        <div className="info">
                                            <span>HTML</span>
                                        </div>

                                        <div className="prog__line html">
                                            <span></span>
                                        </div>
                                    </div>

                                    <div className="bar"><i class='bx bxl-css3' style={{ color: "#147bbc" }}></i>

                                        <div className="info">
                                            <span>CSS</span>
                                        </div>

                                        <div className="prog__line css">
                                            <span></span>
                                        </div>
                                    </div>

                                    <div className="bar"><i class='bx bxl-javascript' style={{ color: "#b0bc1e" }}></i>

                                        <div className="info">
                                            <span>JAVASCRIPT</span>
                                        </div>

                                        <div className="prog__line js">
                                            <span></span>
                                        </div>
                                    </div>

                                    <div className="bar"><i class='bx bxl-bootstrap' style={{ color: "#147bbc" }}></i>

                                        <div className="info">
                                            <span>BOOTSTRAP</span>
                                        </div>

                                        <div className="prog__line bootstrap">
                                            <span></span>
                                        </div>
                                    </div>

                                    <div className="bar"><i class='bx bxl-react' style={{ color: "#69bcbc" }}></i>

                                        <div className="info">
                                            <span>REACT JS</span>
                                        </div>

                                        <div className="prog__line react">
                                            <span></span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-1-of-2">
                            <div className="prof__section">
                                <div className="prof__head">
                                    <h1 className="prof__text">Professional skills</h1>
                                </div>
                                <div className="radial__bars">

                                    <div className="radial__bar radial__bar-one">
                                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                                            <circle className="progress__bar" cx="100" cy="100" r="80"></circle>
                                            <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                                        </svg>
                                        <div className="percentage">90%</div>
                                        <div className="percentage__text">Creativity</div>
                                    </div>

                                    <div className="radial__bar radial__bar-two">
                                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                                            <circle className="progress__bar" cx="100" cy="100" r="80"></circle>
                                            <circle className="path path-2" cx="100" cy="100" r="80"></circle>
                                        </svg>
                                        <div className="percentage">65%</div>
                                        <div className="percentage__text">Comunication</div>
                                    </div>

                                    <div className="radial__bar radial__bar-one">
                                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                                            <circle className="progress__bar" cx="100" cy="100" r="80"></circle>
                                            <circle className="path path-3" cx="100" cy="100" r="80"></circle>
                                        </svg>
                                        <div className="percentage">75%</div>
                                        <div className="percentage__text">Problem solving</div>
                                    </div>

                                    <div className="radial__bar radial__bar-two">
                                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                                            <circle className="progress__bar" cx="100" cy="100" r="80"></circle>
                                            <circle className="path path-4" cx="100" cy="100" r="80"></circle>
                                        </svg>
                                        <div className="percentage">85%</div>
                                        <div className="percentage__text">Team work</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}




             


                <div className="cards__containers">

                <div className="skill__head skill__heads">
                    <h1 className="skill__text">Skills</h1>
                </div>

                <div className="card-container" style={{ marginBottom: "50rem" }}>
                    {cards.map((card, index) => (
                        <div className="card" key={index}>
                            <h3 className="card-title">{card.title} <img src={card.image} width={30} height={30} style={{ objectFit: "cover" }} className="card__image" /></h3>
                            <div className="progress-bar">
                                <div className="progress-line">
                                    <div className="progress-fill"></div>
                                </div>
                                <div className="progress-percentage">{card.progress}</div>
                            </div>
                            <div className="circular-progress">
                                <svg className="circle-svg">
                                    <circle cx="50" cy="50" r="45" className="circle-bg"></circle>
                                    <circle cx="50" cy="50" r="45" className="circle-fg"></circle>
                                </svg>
                                <div className="circular-percentage">{card.progress}</div>
                            </div>
                        </div>
                    ))}
                </div>

                </div>

                



                {/* ====================== TESTIMONIALS SECTION ============================ */}

                <div className="skill__head">
                    <h1 className="skill__text">Testimonials</h1>
                </div>

                <Swiper
                    slidesPerView={3}      
                    spaceBetween={30}         
                    centeredSlides={true}      // Center the active slide
                    loop={true}                // Infinite loop
                    navigation={true}          // Enable navigation buttons
                    pagination={{ clickable: true }} // Enable clickable pagination
                    modules={[Navigation, Pagination]} // Include modules
                    className="customSwiper"  
                    breakpoints={{
                        250: { // for mobile devices
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: { // for tablets
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: { // for desktops
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="testimonial">
                            <div className="testi__details">
                                <i className='bx bxs-quote-left custom-icon '></i>
                                <div className="testi__image">
                                    <img src={husban} width={100} height={100} style={{ objectFit: "cover", borderRadius: "50%" }} className="testi__img" />
                                </div>
                                <i className='bx bxs-quote-right custom-icon '></i>
                            </div>
                            <div className="testi__user">
                                <h2 className="testi__name">Husban Ahmad</h2>
                            </div>
                            <div className="star__icons">
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                            </div>
                            <div className="testi__last">
                                <p className="testi__para">Web Developer</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial">
                            <div className="testi__details">
                                <i className='bx bxs-quote-left custom-icon '></i>
                                <div className="testi__image">
                                    <img src={usermale2} width={100} height={100} style={{ objectFit: "cover", borderRadius: "50%" }} className="testi__img" />
                                </div>
                                <i className='bx bxs-quote-right custom-icon '></i>
                            </div>
                            <div className="testi__user">
                                <h2 className="testi__name">User</h2>
                            </div>
                            <div className="star__icons">
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                            </div>
                            <div className="testi__last">
                                <p className="testi__para">Web Designer</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial">
                            <div className="testi__details">
                                <i className='bx bxs-quote-left custom-icon '></i>
                                <div className="testi__image">
                                    <img src={usermale} width={100} height={100} style={{ objectFit: "cover", borderRadius: "50%" }} className="testi__img" />
                                </div>
                                <i className='bx bxs-quote-right custom-icon '></i>
                            </div>
                            <div className="testi__user">
                                <h2 className="testi__name">User</h2>
                            </div>
                            <div className="star__icons">
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                            </div>
                            <div className="testi__last">
                                <p className="testi__para">Graphic Designer</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial">
                            <div className="testi__details">
                                <i className='bx bxs-quote-left custom-icon '></i>
                                <div className="testi__image">
                                    <img src={usermale1} width={100} height={100} style={{ objectFit: "cover", borderRadius: "50%" }} className="testi__img" />
                                </div>
                                <i className='bx bxs-quote-right custom-icon '></i>
                            </div>
                            <div className="testi__user">
                                <h2 className="testi__name">User</h2>
                            </div>
                            <div className="star__icons">
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                            </div>
                            <div className="testi__last">
                                <p className="testi__para">Digital Marketer</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial">
                            <div className="testi__details">
                                <i className='bx bxs-quote-left custom-icon '></i>
                                <div className="testi__image">
                                    <img src={userfemale} width={100} height={100} style={{ objectFit: "cover", borderRadius: "50%" }} className="testi__img" />
                                </div>
                                <i className='bx bxs-quote-right custom-icon '></i>
                            </div>
                            <div className="testi__user">
                                <h2 className="testi__name">User</h2>
                            </div>
                            <div className="star__icons">
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                            </div>
                            <div className="testi__last">
                                <p className="testi__para">Video Editor</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial">
                            <div className="testi__details">
                                <i className='bx bxs-quote-left custom-icon '></i>
                                <div className="testi__image">
                                    <img src={userfemale1} width={100} height={100} style={{ objectFit: "cover", borderRadius: "50%" }} className="testi__img" />
                                </div>
                                <i className='bx bxs-quote-right custom-icon '></i>
                            </div>
                            <div className="testi__user">
                                <h2 className="testi__name">User</h2>
                            </div>
                            <div className="star__icons">
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                                <i className='bx bxs-star custom-star-icon'></i>
                            </div>
                            <div className="testi__last">
                                <p className="testi__para">Content Writer</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>


                {/* ====================== PROJECTS SECTION ============================ */}

                <div className="project__section">
                    <div className="skill__head">
                        <h1 className="skill__text">MY PROJECTS</h1>
                    </div>

                    <div className="row">
                        <div className="col-1-of-2">
                            <div className="proj__cont proj__con proj__con-one">
                                <div className="proj__details">
                                    <h3 className="proj__name">Linkedin</h3>
                                    <p className="proj__title">This Website application created in HTML & CSS for the company linkedin. It is mobile responsive and consists of more than 5 pages with cool animations</p>
                                </div>
                                <div className="proj__image">
                                    <img src="./assets/linkedin.png" alt="linkedin" className="proj__img" />
                                </div>
                                <div className="proj__button">
                                    <button className="project__btns"><a href="https://husban088.github.io/linkedin/" target="blank" className="proj__btn">View damo</a></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-of-2">
                            <div className="proj__cont proj__con proj__con-two">
                                <div className="proj__details">
                                    <h3 className="proj__name">Facebook</h3>
                                    <p className="proj__title">This Website application created in HTML & CSS for the company Facebook. It is mobile responsive and consists of more than 5 pages with cool animations</p>
                                </div>
                                <div className="proj__image">
                                    <img src="./assets/facebook.png" alt="linkedin" className="proj__img" />
                                </div>
                                <div className="proj__button">
                                    <button className="project__btns"><a href="https://husban088.github.io/facebook/" target="blank" className="proj__btn">View damo</a></button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="project__btn">
                        <Link to={'/projects'} className="custom-btn btn-9 viewproj__btn">View more</Link>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Home;