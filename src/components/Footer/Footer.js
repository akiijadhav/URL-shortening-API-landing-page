import React from 'react';
import FacebookIcon from '../../images/icon-facebook.svg';
import TwitterIcon from '../../images/icon-twitter.svg';
import PinterestIcon from '../../images/icon-pinterest.svg';
import InstagramIcon from '../../images/icon-instagram.svg';
import { 
        FooterContainer,
        SiteName,
        SiteFeatures,
        SiteResources,
        SitePages,
        SiteSocials,
        CategoryHeader,
        BgWrapper,
        Flist,
        Rlist,
        Plist,
        Slist
         } from './Footer.Styled';

const Footer = () => {
    return (
        <BgWrapper>
            <FooterContainer>

                <SiteName>
                    Shortly
                </SiteName>
        
                <SiteFeatures>
                    <CategoryHeader>Features</CategoryHeader>
                    <Flist>
                        <li className="features__item">
                            <a href="#1" className="features__link">Link Shortening</a>
                        </li>
                        <li className="features__item">
                            <a href="#2" className="features__link">Branded Links</a>
                        </li>
                        <li className="features__item">
                            <a href="#3" className="features__link">Analytics</a>
                        </li>
                    </Flist>
                </SiteFeatures>
        
                <SiteResources>
                    <CategoryHeader>Resources</CategoryHeader>
                    <Rlist>
                        <li className="resources__item">
                            <a href="#4" className="resources__link">Blog</a>
                        </li>
                        <li className="resources__item">
                            <a href="#5" className="resources__link">Developers</a>
                        </li>
                        <li className="resources__item">
                            <a href="#6" className="resources__link">Support</a>
                        </li>
                    </Rlist>
                </SiteResources>
        
                <SitePages>
                    <CategoryHeader>Company</CategoryHeader>
                    <Plist>
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
                    </Plist>
                </SitePages>
        
            <SiteSocials>
                <Slist>
                    <li>
                        <img src={FacebookIcon} alt="Facebook" className="site__social-media" />
                    </li>
                    <li>
                        <img src={TwitterIcon} alt="Twitter" className="site__social-media" />
                    </li>
                    <li>
                        <img src={PinterestIcon} alt="Pinterest" className="site__social-media" />
                    </li>
                    <li>
                        <img src={InstagramIcon} alt="Instagram" className="site__social-media" />
                    </li>
                </Slist>
            </SiteSocials>

        </FooterContainer>
      </BgWrapper>
    )
}

export default Footer;