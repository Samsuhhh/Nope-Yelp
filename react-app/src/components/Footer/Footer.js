import React from 'react';
import './Footer.css';
import css from '../../assets/icons/CSS.svg';
import py from '../../assets/icons/Python.svg';
import docker from '../../assets/icons/Docker.svg';
import flask from '../../assets/icons/Flask.svg';
import js from '../../assets/icons/JavaScript.svg';
import rct from '../../assets/icons/React.svg';
import rdx from '../../assets/icons/Redux.svg';
import postg from '../../assets/icons/PostgreSQL.svg';
import sql from '../../assets/icons/SQLite.svg';

import logo16 from '../../assets/icons/logo16.png';
import nope from '../../assets/nope.png';


function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className='footer-content'>
                <div className='footer-grid'>
                    <div className='footer-grid-comp'>
                        <ul>About</ul>
                        <li>About Yelp</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Investor Relations</li>
                        <li>Trust & Safety</li>
                        <li>Content Guidelines</li>
                        <li>Accessibility Statement</li>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Ad Choices</li>
                        <li>Manage Cookies</li>
                    </div>
                    <div className='footer-grid-comp'>
                        <ul>Discover</ul>
                        <li>Nope Project Cost Guides</li>
                        <li>Collections</li>
                        <li>Talk</li>
                        <li>Events</li>
                        <li>Nope Blog</li>
                        <li>Support</li>
                        <li>Yelp Mobile</li>
                        <li>Developers</li>
                        <li>RSS</li>
                    </div>
                    <div className='footer-grid-comp'>
                        <ul>Technologies Used</ul>
                        <li><img src={py}/>Python</li>
                        <li><img src={flask}/>Flask</li>
                        <li><img src={js}/>JavaScript</li>
                        <li><img src={rct}/>React</li>
                        <li><img src={rdx}/>Redux</li>
                        <li><img src={postg}/>Postgres</li>
                        <li><img src={sql}/>SQLite</li>
                        <li><img src={docker}/>Docker</li>
                    </div>
                    <div className='footer-grid-comp'>
                    <ul>Languages</ul>
                    <li>English</li>
                    <ul>Countries</ul>
                    <li>United States</li>
                    </div>
                </div>
                <div className='footer-copyright'>
                Copyright © 2004-2022 Nope Inc. Nope,
                <img id="footer-logo" src={nope}/>
                ,
                <img id="footer-logo" src={logo16}/>
                , and related marks are registered trademarks of Nope.
                </div>
            </div>
        </div>
    )
}

export default Footer
