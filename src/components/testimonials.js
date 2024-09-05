import React, { useEffect, useRef } from "react";
import '../App.css';
import husban from './images/img4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper.min.css'; // For Swiper styles
import '../../node_modules/swiper/modules/pagination.min.css';
import { Navigation, Pagination } from 'swiper/modules';
import usermale from './images/userpng.jpg';
import usermale1 from './images/pnguser.png';
import userfemale from './images/userfemale.png';
import userfemale1 from './images/userfemale1.png';
import usermale2 from './images/usermale2.png';


const Testimonials = () => {


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




     <div className="skill__head" style={{marginTop:"14rem"}}>
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
        
            </>
    )

  
}

export default Testimonials;