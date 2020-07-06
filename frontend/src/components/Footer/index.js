import React from "react";

import {FooterContainer} from "./style.js";
import {UpperWrapper} from "./style.js";
import {FooterLinks} from "./style.js";
import {FooterSocialIcons} from "./style.js";
import {LowerWrapper} from "./style.js";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import GooglePlus from "../../assets/googleplus.svg";
import Twitter from "../../assets/twitter.svg";

const Footer = () => {
    return (
        <FooterContainer>
            <UpperWrapper>
                <FooterLinks>
                    <a href="#">About Us</a>
                    <a href="#">Press</a>
                    <a href="#">Blog</a>
                    <a href="#">iOS</a>
                    <a href="#">Android</a>
                </FooterLinks>
                <FooterSocialIcons>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/">
                                <img src={Facebook} alt="Facebook Logo"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/">
                                <img src={Instagram} alt="Instagram Logo"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://google.com/">
                                <img src={GooglePlus} alt="GooglePlus Logo"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/">
                                <img src={Twitter} alt="Twitter Logo"/>
                            </a>
                        </li>
                    </ul>
                </FooterSocialIcons>
            </UpperWrapper>
            <LowerWrapper>
                <p>© Copyright Luna 2020</p>
            </LowerWrapper>
        </FooterContainer>
    );
};

export default Footer;
