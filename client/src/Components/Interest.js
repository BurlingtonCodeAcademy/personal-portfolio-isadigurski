import React from 'react';
import '../Style/interest.css';
import { Link } from 'react-router-dom';
import Clock from '../Components/Clock';


function Interest(props) {
    return (
        <div className="Interest">
            <div className="mainInterestContainer">

                <div className="titleContainer">
                    <div id="titleContainerGroup">
                        <p className="logo">
                            <Link to={'/'}>LOGO</Link>
                        </p>
                        <Clock />
                    </div>
                </div>

                <div className="bodyContainer">
                    <p>
                        Interest Section
                    </p>
                </div>

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

export default Interest;