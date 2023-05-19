import React from 'react'
import footerLogo from "../assets/images/footerlogo.png"

const Footer = () => {
    return (
        <>
            <footer>

                <div className="footer-grid">

                    <div className="grid-item">

                        <div className="footer-logo">
                            <img src={footerLogo} alt="educator logo white" />
                        </div>

                        <p className="footer-text">
                            At GeekStacks, we believe in the power of technology, and we want to share our passion and knowledge with
                            you. Join us
                            and let us help you achieve your goals in the tech industry.
                        </p>

                        <div className="social-link">
                            <a href="#">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                            <a href="#">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                            <a href="#">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                            <a href="#">
                                <ion-icon name="logo-youtube"></ion-icon>
                            </a>
                        </div>

                    </div>

                    <ul className="grid-item">

                        <h4 className="item-heading">Our Link</h4>

                        <li className="list-item">
                            <a href="#home">Home</a>
                        </li>

                        <li className="list-item">
                            <a href="#about">About Us</a>
                        </li>

                        <li className="list-item">
                            <a href="training.html">Summer training</a>
                        </li>

                        <li className="list-item">
                            <a href="internship.html">Internship</a>
                        </li>

                        <li className="list-item">
                            <a href="https://certificates.geekstacks.com">Certificate</a>
                        </li>

                    </ul>

                    <ul className="grid-item">

                        <h4 className="item-heading">Other Link</h4>

                        <li className="list-item">
                            <a href="#">Instructor</a>
                        </li>

                        <li className="list-item">
                            <a href="#">FAQ</a>
                        </li>

                        <li className="list-item">
                            <a href="#">Event</a>
                        </li>

                        <li className="list-item">
                            <a href="#">Privacy Policy</a>
                        </li>

                        <li className="list-item">
                            <a href="#">Term & Condition</a>
                        </li>

                    </ul>

                    <div className="grid-item">

                        <h4 className="item-heading">Subscribe Now</h4>

                        <div className="wrapper">
                            <input type="text" name="subscribe" placeholder="Email Address" />

                            <button className="send-btn">
                                <ion-icon name="paper-plane"></ion-icon>
                            </button>
                        </div>

                    </div>

                </div>

                <p className="copyright">
                    Copyright © 2022 <a href="#">GeekStacks</a>. All rights reserved.
                </p>

            </footer>

        </>
    )
}

export default Footer