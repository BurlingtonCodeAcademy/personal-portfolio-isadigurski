import React from 'react';
import '../Style/app.css';
import { Link } from 'react-router-dom';
import Clock from '../Components/Clock';
import FaceIcon from '../Icons/facebook.png';
import InstaIcon from '../Icons/instagram.png';
import TwitterIcon from '../Icons/twitter.png';

function App() {
  return (
    <div className="App">
      <div className="mainAppContainer">

        <div className="titleContainer">
          <div id="titleContainerGroup">
            <p className="logo">
              <Link to={'/'}>LOGO</Link>
            </p>
            <Clock />
          </div>
        </div>

        <div className="bodyContainer">
          <div id="links">
            <Link to={'/About'}>
              <div className="linkTitleHome">About</div>
            </Link>
            <Link to={'/Portfolio'}>
              <div className="linkTitleHome">Portfolio</div>
            </Link>
            <Link to={'/Interest'}>
              <div className="linkTitleHome">Hobbies & Interest</div>
            </Link>
            <Link to={'/Contact'}>
              <div className="linkTitleHome">Contact</div>
            </Link>
            <Link to={'/Random'}>
              <div className="linkTitleHome">Random</div>
            </Link>
          </div>
        </div>
        <div id="socialMediaContainer">
          <div className="contact-item">
            <a href="https://www.facebook.com/">
              <img className="icon" src={FaceIcon} alt="facebook" /></a>
          </div>
          <div className="contact-item">
            <a href="https://www.instagram.com/">
              <img className="icon" src={InstaIcon} alt="instagram" /></a>
          </div>
          <div className="contact-item">
            <a href="https://www.twitter.com/">
              <img className="icon" src={TwitterIcon} alt="twitter" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;