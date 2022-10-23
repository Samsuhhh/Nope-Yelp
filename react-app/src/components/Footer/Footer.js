import React from 'react';
import './Footer.css';
// import css from '../../assets/icons/CSS.svg';
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
                        <ul>GitHubs</ul>
                        <a href="https://github.com/Samsuhhh/Nope-Yelp" target="_blank">
                            <li>Project Repo</li>
                        </a>

                        <a href="https://github.com/Aldam55" target="_blank">
                            <li>Alex Dam</li>
                        </a>

                        <a href="https://github.com/Samsuhhh" target="_blank">
                            <li>Sam Suh</li>
                        </a>

                        <a href="https://github.com/jakezmat" target="_blank">
                            <li>Jake Matillano</li>
                        </a>

                        <a href="https://github.com/garydsong" target="_blank">
                            <li>Gary Song</li>
                        </a>

                    </div>
                    <div className='footer-grid-comp'>
                        <ul>Resources</ul>

                        <a href="https://www.apa.org/topics/anger/control" target="_blank">
                            <li>American Psychological Assoc.</li>
                        </a>

                        <a href="https://www.helpguide.org/articles/stress/quick-stress-relief.htm" target="_blank">
                            <li>Quick Stress Relief</li>
                        </a>

                        <a href="https://www.colorado.edu/law/25-quick-ways-reduce-stress" target="_blank">
                            <li>UC:Boulder Reduce Stress</li>
                        </a>

                        <a href="https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/tips-to-reduce-stress/" target="_blank">
                            <li>10 Stress Busters</li>
                        </a>

                        <a href="https://www.mayoclinic.org/tests-procedures/stress-management/about/pac-20384898" target="_blank">
                            <li>Mayo Clinic</li>
                        </a>

                        <a href="https://www.webmd.com/mental-health/anger-management" target="_blank">
                            <li>WebMD</li>
                        </a>



                    </div>
                    <div className='footer-grid-comp'>
                        <ul>Technologies Used</ul>
                        <li><img alt='tech icon' src={py} />Python</li>
                        <li><img alt='tech icon' src={flask} />Flask</li>
                        <li><img alt='tech icon' src={js} />JavaScript</li>
                        <li><img alt='tech icon' src={rct} />React</li>
                        <li><img alt='tech icon' src={rdx} />Redux</li>
                        <li><img alt='tech icon' src={postg} />Postgres</li>
                        <li><img alt='tech icon' src={sql} />SQLite</li>
                        <li><img alt='tech icon' src={docker} />Docker</li>
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
                    <img id="footer-logo" src={nope} alt='foot logo' />
                    ,
                    <img id="footer-logo" src={logo16} alt='foot logo' />
                    , and related marks are registered trademarks of Nope.
                </div>
            </div>
        </div>
    )
}

export default Footer
