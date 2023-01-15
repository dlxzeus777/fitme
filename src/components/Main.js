// IMAGES
import heroImage from '../images/hero.svg'
import adidas from '../images/adidas.png'
import nike from '../images/nike.png'
import amazon from '../images/amazon.png'
import apple from '../images/apple.png'
import google from '../images/google.png'
import jordan from '../images/jordan.png'
import trainer from '../images/trainer.svg'
import trainer2 from '../images/trainer2.svg'
import trainer3 from '../images/trainer3.svg'
import cardio from '../images/cardio.png'
import gym from '../images/gym.png'
import yoga from '../images/yoga.png'
import client1 from '../images/client1.png'
import client2 from '../images/client2.png'
import client3 from '../images/client3.png'

// REACT ICONS
import { FaPlayCircle } from 'react-icons/fa'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BiDumbbell } from 'react-icons/bi'
import { FaQuoteLeft } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

// SWIPER JS
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";


const Main = ({billing, onChange}) => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <>
            <section id='home'>
                <div className='wrapper'>
                    <div className='hero-container'>
                        <div className='hero-texts'>
                            <h1 className='hero-header'>Smart <span className='purple'>fitness</span> experience for everyone.</h1>
                            <p className='hero-p'>Fitness is not a destination it’s a lifestyle. With our professional trainers we will help you to build the greatest version of yourself.</p>
                            <div className='buttons'>
                                <button className='get-started-btn'>Get Started</button>
                                <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' target='_blank' rel='noreferrer' className='watch-video-btn'><FaPlayCircle className='video-icon'/>Watch Video</a>
                            </div>
                        </div>
                        <img src={heroImage} alt='hero' className='hero-image' />
                    </div>
                    <p className='trusted'>Trusted by 3000+ brands worldwide</p>
                    <div className='logo-images'>
                        <img src={adidas} alt='adidas logo' className='logo' />
                        <img src={amazon} alt='amazon logo' className='logo' />
                        <img src={nike} alt='nike logo' className='logo' />
                        <img src={jordan} alt='jordan logo' className='logo' />
                        <img src={google} alt='google logo' className='logo' />
                        <img src={apple} alt='apple logo' className='logo' />
                    </div>
                </div>
            </section>
            <section id='trainers'>
                <div className='wrapper'>
                    <h2 className='trainers-header'>Meet Our Certified <span className='purple'>Trainers</span></h2>
                    <div className='trainers-container'>
                        <div className='trainer'>
                            <img src={trainer} alt='trainer' className='trainer-img' />
                            <div className='trainer-name'>
                                <h3 className='name'>Alex Graham</h3>
                                <p className='training-type'>MMA Trainer</p>
                            </div>
                        </div>
                        <div className='trainer'>
                            <img src={trainer2} alt='trainer' className='trainer-img' />
                            <div className='trainer-name'>
                                <h3 className='name'>Sebastian Smith</h3>
                                <p className='training-type'>Gym Trainer</p>
                            </div>
                        </div>
                        <div className='trainer'>
                            <img src={trainer3} alt='trainer' className='trainer-img' />
                            <div className='trainer-name'>
                                <h3 className='name'>Luis Fisher</h3>
                                <p className='training-type'>Yoga Trainer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='programs'>
                <div className='wrapper'>
                    <h2 className='programs-header'>Explore Our <span className='purple'>Programs</span></h2>
                    <div className='programs-container'>
                        <div className='program'>
                            <img src={cardio} alt='program logo' className='program-logo' />
                            <h3 className='program-name'>Cardio & Crossfit</h3>
                            <p className='program-description'>Improve your cardiovascular health, help lower blood pressure, regulate weight, strengthen immune system, aid sleep with our Crossfit Cardio.</p>
                            <button className='program-btn'>Learn More <AiOutlineArrowRight /></button>
                        </div>
                        <div className='program strength'>
                            <img src={gym} alt='program logo' className='program-logo' />
                            <h3 className='program-name white'>Strength Training</h3>
                            <p className='program-description'>Our professional trainers will help you manage or lose weight, increase your metabolism to help you burn more calories, enhance your quality of life.</p>
                            <button className='program-btn middle-btn'>Learn More <AiOutlineArrowRight /></button>
                        </div>
                        <div className='program'>
                            <img src={yoga} alt='program logo' className='program-logo' />
                            <h3 className='program-name'>Yoga & Stretching</h3>
                            <p className='program-description'>Yoga will help you improve strength, balance and flexibility, ease back pain, heart health, sleep better, manage stress.</p>
                            <button className='program-btn'>Learn More <AiOutlineArrowRight /></button>
                        </div>
                    </div>
                </div>
            </section>
            <section id='memberships'>
                <div className='wrapper'>
                    <h2 className='journey-header'>Ready to Start your <span className='purple'>Journey?</span></h2>
                    <div className='bills'>
                        <h3>Bill Monthly</h3>
                        <label class="switch">
                            <input type="checkbox" onChange={onChange}/>
                            <span class="slider round"></span>
                        </label>
                        <h3>Bill Yearly</h3>
                    </div>
                    <div className='plans-container'>
                        <div className='plan'>
                            <h3 className='plan-name'>Weekly Plan</h3>
                            <p className='plan-price'>{!billing ? '$9' : '$90'}</p>
                            <ul className='plan-accessories'>
                                <li className='dumbbell'><BiDumbbell className='dumbbell-icon' />Unlimited gym acess</li>
                                <li className='dumbbell'><BiDumbbell className='dumbbell-icon' />1 Training Program</li>
                                <li className='dumbbell'><BiDumbbell className='dumbbell-icon' />Free Wifi</li>
                            </ul>
                            <button className='plan-btn'>Choose Plan</button>
                        </div>
                        <div className='plan monthly'>
                            <h3 className='plan-name'>Monthly Plan</h3>
                            <p className='plan-price'>{!billing ? '$49' : '$490'}</p>
                            <ul className='plan-accessories'>
                                <li className='dumbbell'><BiDumbbell className='dumbbell-icon' />Unlimited gym acess</li>
                                <li className='dumbbell'><BiDumbbell className='dumbbell-icon' />5 Training Program</li>
                                <li className='dumbbell'><BiDumbbell className='dumbbell-icon' />Adjustable Schedule</li>
                                <li className='dumbbell'><BiDumbbell className='dumbbell-icon' />Free Wifi</li>
                            </ul>
                            <button className='plan-btn'>Choose Plan</button>
                        </div>
                        <div className='plan'>
                            <h3 className='plan-name'>Yearly Plan</h3>
                            <p className='plan-price'>{!billing ? '$99' : '$990'}</p>
                            <ul className='plan-accessories'>
                                <li className='dumbbell'><BiDumbbell className='dumbbell-icon' />Unlimited gym acess</li>
                                <li className='dumbbell'><BiDumbbell className='dumbbell-icon' />All Training Programs</li>
                                <li className='dumbbell'><BiDumbbell className='dumbbell-icon' />Free goodies & Wifi</li>
                            </ul>
                            <button className='plan-btn'>Choose Plan</button>
                        </div>
                    </div>
                </div>
            </section>
            <section id='testimonials'>
                <div className='wrapper'>
                    <h2 className='reviews-header'>Happiest <span className='purple'>Trainee</span> Reviews</h2>
                    <Swiper spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper reviews-container">
                        <SwiperSlide className='review'>
                            <img src={client1} alt='clients' className='clients-image' />
                            <div className='review-texts'>
                                <div className='review-quote'>
                                    <FaQuoteLeft className='quote-icon' />
                                    When I was stuck at home during pandemic I wanted to workout from home one of my friends introduced me to FitMe and man I loved every bit of it. I chose Yearly Plan they have amazing trainers who know what they’re doing.
                                </div>
                                <div className='review-name'>
                                    <h3>Austin Green</h3>
                                    <p className='profession'>Founder, AK Sports</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='review'>
                            <img src={client2} alt='clients' className='clients-image' />
                            <div className='review-texts'>
                                <div className='review-quote'>
                                    <FaQuoteLeft className='quote-icon' />
                                    I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. You have the best community.
                                </div>
                                <div className='review-name'>
                                    <h3>Charles Webb</h3>
                                    <p className='profession'>Athlete</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='review'>
                            <img src={client3} alt='clients' className='clients-image' />
                            <div className='review-texts'>
                                <div className='review-quote'>
                                    <FaQuoteLeft className='quote-icon' />
                                    I built my dream physique just because of you guys. After which I bagged multiple modelling opportunities. You guys rock! I connected with so many beautiful people in the community.
                                </div>
                                <div className='review-name'>
                                    <h3>James Rodriguez</h3>
                                    <p className='profession'>Fitness Model</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <footer>
                <div className='wrapper'>
                    <div className='footer-container'>
                        <div className='footer-left'>
                            <h3 className='footer-logo'><span className='purple'>Fit</span>Me</h3>
                            <p className='footer-p'>Fitness for everyone</p>
                        </div>
                        <div className='footer-right'>
                            <div className='about'>
                                <h4 className='about-header'>ABOUT</h4>
                                <ul>
                                    <li>Home</li>
                                    <li>Trainers</li>
                                    <li>Programs</li>
                                    <li>Memberships</li>
                                    <li>Testimonials</li>
                                </ul>
                            </div>
                            <div className='product'>
                                <h4 className='product-header'>PRODUCT</h4>
                                <ul>
                                    <li>How it works</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms & Conditions</li>
                                    <li>Contact us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='rights-container'>
                        <div className='footer-year'>{year}, FitMe Inc. <br /> All Rights Reserved.</div>
                        <div className='icons'>
                            <AiOutlineTwitter className='social-media-icon' />
                            <BsFacebook className='social-media-icon' />
                            <AiFillYoutube className='social-media-icon' />
                            <AiOutlineMail className='social-media-icon' />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Main