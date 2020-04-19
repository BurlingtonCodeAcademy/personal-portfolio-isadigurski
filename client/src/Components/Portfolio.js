import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/portfolio.css';
import Clock from '../Components/Clock';
import Header from '../Components/Header';

function Portfolio(props) {
    return (
        <div className="Portfolio">
            <div className="mainPortfolioContainer">

                <div className="titlePortfolioContainer">
                    <div id="titleContainerGroup">
                        <p className="logo">
                            <Link to={'/'}>LOGO</Link>
                        </p>
                        <Clock />
                    </div>
                </div>

                <div className="bodyPortfolioContainer">
                        <Header />
                </div>

                <div className="navbar-common">
                    <div id="links-common">
                        <Link to={'/'}>
                            <div className="linkTitle-common">Home</div>
                        </Link>
                        <Link to={'/About'}>
                            <div className="linkTitle-common">About</div>
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

export default Portfolio;