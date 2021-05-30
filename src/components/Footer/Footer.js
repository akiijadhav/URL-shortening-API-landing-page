import React from 'react';
import FacebookIcon from '../../images/icon-facebook.svg';
import TwitterIcon from '../../images/icon-twitter.svg';
import PinterestIcon from '../../images/icon-pinterest.svg';
import InstagramIcon from '../../images/icon-instagram.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="site__name">
            Shortly
            </div>
    
            <div className="site__features">
                <p className="headers">Features</p>
                <ul className="features__list">
                    <li className="features__item">
                        <a href="#1" className="features__link">Link Shortening</a>
                    </li>
                    <li className="features__item">
                        <a href="#2" className="features__link">Branded Links</a>
                    </li>
                    <li className="features__item">
                        <a href="#3" className="features__link">Analytics</a>
                    </li>
                </ul>
            </div>
    
            <div className="site__resources">
                <p className="headers">Resources</p>
                <ul className="resources__list">
                    <li className="resources__item">
                        <a href="#4" className="resources__link">Blog</a>
                    </li>
                    <li className="resources__item">
                        <a href="#5" className="resources__link">Developers</a>
                    </li>
                    <li className="resources__item">
                        <a href="#6" className="resources__link">Support</a>
                    </li>
                </ul>
            </div>
    
            <div className="site__pages">
                <p className="headers">Company</p>
                <ul className="pages__list">
                    <li className="pages__item">
                        <a href="#7" className="pages__link">About</a>
                    </li>
                    <li className="pages__item">
                        <a href="#8" className="pages__link">Our Team</a>
                    </li>
                    <li className="pages__item">
                        <a href="#9" className="pages__link">Carers</a>
                    </li>
                    <li className="pages__item">
                        <a href="#10" className="pages__link">Contact</a>
                    </li>
                </ul>
            </div>
    
        <div className="site__socials">
          <img src={FacebookIcon} alt="Facebook" className="site__social-media" />
          <img src={TwitterIcon} alt="Twitter" className="site__social-media" />
          <img src={PinterestIcon} alt="Pinterest" className="site__social-media" />
          <img src={InstagramIcon} alt="Instagram" className="site__social-media" />
        </div>
    
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. Coded by <a href="https://standardresume.co/r/akii" rel="noreferrer" target="_blank">Akhilesh Jadhav</a>.
        </div>
    
      </div>
    )
}

export default Footer;