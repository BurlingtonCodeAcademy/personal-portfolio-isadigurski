import React from 'react';
import '../Style/contact.css';
import { Link } from 'react-router-dom';
import Clock from '../Components/Clock';
import AddressIcon from '../Icons/address.png';
import PhoneNumberIcon from '../Icons/phone.png';
import EmailIcon from '../Icons/email.png';
import FaceIcon from '../Icons/facebook.png';
import InstaIcon from '../Icons/instagram.png';
import TwitterIcon from '../Icons/twitter.png';
import DribbleIcon from '../Icons/dribble.png'

function Contact(props) {
    return (
        <div className="Contact">
            <div className="mainContactContainer">

                <div className="titleContainer">
                    <div id="titleContainerGroup">
                        <p className="logo">
                            <Link to={'/'}>LOGO</Link>
                        </p>
                        <Clock />
                    </div>
                </div>

                <section id="footer-container">
                    <p className='footer-title'> QUESTIONS OR COMMENTS? <strong>GET IN TOUCH:</strong></p>
                    <div id='footer-content'>
                        <div id='footer-input-contact'>
                            <div id='input'>
                                <div id='name-email'>
                                    <input id='name' className='info-input' type='text' placeholder='name' />
                                    <input id='email' className='info-input' type='text' placeholder='email' />
                                </div>
                                <div id='message-container'>
                                    <textarea id='message' className='info-input' placeholder='message'></textarea>
                                </div>
                                <button type="button" id="footer-input-button">Send Message</button>
                            </div>
                            <div id='footer-info-message'>
                                <p id='footer-text'>
                                    Whether you want discuss ideas how to achieve your business goals or are ready to start a project.
                                </p>
                                <div id='footer-icons'>
                                    <div id='footer-info-block-one'>
                                        <div className='icon'>
                                            <img className='logo-blip' src={AddressIcon} alt="address" />
                                            <p className='icon-text1'>548 River Road Stowe, VT 05467</p>
                                        </div>
                                        <div className='icon'>
                                            <img className='logo-blip' src={PhoneNumberIcon} alt="phonenumber" />
                                            <p className='icon-text'>(802) 735-3416</p>
                                        </div>
                                        <div className='icon'>
                                            <img className='logo-blip' src={EmailIcon} alt="email" />
                                            <p className='icon-text'>isadigurski@gmail.com</p>
                                        </div>
                                    </div>
                                    <div id='footer-info-block-two'>
                                        <div className='icon'>
                                            <a href="https://www.twitter.com/">
                                                <img className='logo-blip' src={TwitterIcon} alt="twitter" /></a>
                                                <p className='icon-text'>Twitter.com</p>
                                        </div>
                                        <div className='icon'>
                                            <a href="https://www.instagram.com/">
                                                <img className='logo-blip' src={InstaIcon} alt="instagram" /></a>
                                                <p className='icon-text'>Instagram.com</p>
                                        </div>
                                        <div className='icon'>
                                            <a href="https://dribbble.com/">
                                                <img className='logo-blip' src={DribbleIcon} alt="dribbble" /></a>
                                                <p className='icon-text'>Dribbble.com</p>
                                        </div>
                                        <div className='icon'>
                                            <a href="https://www.facebook.com/">
                                                <img className='logo-blip' src={FaceIcon} alt="facebook" /></a>
                                                <p className='icon-text'>Facebook.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="navbar-common">
                    <div id="links-common">
                        <Link to={'/'}>
                            <div className="linkTitle-common">Home</div>
                        </Link>
                        <Link to={'/About'}>
                            <div className="linkTitle-common">About</div>
                        </Link>
                        <Link to={'/Portfolio'}>
                            <div className="linkTitle-common">Portfolio</div>
                        </Link>
                        <Link to={'/Interest'}>
                            <div className="linkTitle-common">Hobbies & Interest</div>
                        </Link>
                        <Link to={'/Random'}>
                            <div className="linkTitle-common">Random</div>
                        </Link>
                    </div>
                </div>


            </div >
        </div >
    )
}

export default Contact;