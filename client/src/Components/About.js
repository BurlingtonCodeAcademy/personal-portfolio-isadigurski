import React from 'react';
import '../Style/about.css';
import { Link } from 'react-router-dom';
import Clock from '../Components/Clock';

function About(props) {
    return (
        <div className="About">
            <div className="mainAboutContainer">

                <div className="titleContainer">
                    <div id="titleContainerGroup">
                        <p className="logo">
                            <Link to={'/'}>LOGO</Link>
                        </p>
                        <Clock />
                    </div>
                </div>

                <div className="bodyContainer">
                    <div id="aboutParagraph">
                        Home is where the heart is, Vermont will always be home.  Home has shaped my identity and influenced my life's course. Traveling the world has definitely led me to appreciate Vermont more and more over time.  Now you may find me walking my weimaraner, training for a marathon, or planning my next travel adventure with my partner. 
                    </div>
                </div>

                <div className="navbar-common">
                    <div id="links-common">
                        <Link to={'/'}>
                            <div className="linkTitle-common">Home</div>
                        </Link>
                        <Link to={'/Portfolio'}>
                            <div className="linkTitle-common">Portfolio</div>
                        </Link>
                        <Link to={'/Interest'}>
                            <div className="linkTitle-common">Hobbies & Interest</div>
                        </Link>
                        <Link to={'/Contact'}>
                            <div className="linkTitle-common">Contact</div>
                        </Link>
                        <Link to={'/Random'}>
                            <div className="linkTitle-common">Random</div>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About;