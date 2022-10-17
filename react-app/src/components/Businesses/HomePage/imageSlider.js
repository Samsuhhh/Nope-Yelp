import React, { useState } from 'react'
import githubicon from '../../../assets/icons/githubicon.svg'
import linkedinicon from '../../../assets/icons/linkedinicon.svg'
import websiteicon from '../../../assets/icons/websiteicon.svg'
import './imageSlider.css'

const HomeSlider = () => {
    function bgFade1() {
        setTimeout(() => {
            console.log('gary')
            document.querySelector(".img1").style.opacity = 0;
            document.querySelector(".img2").style.opacity = 1;
            document.querySelector(".img3").style.opacity = 1;
            document.querySelector(".img4").style.opacity = 1;
            orderCb(["-4", "-1", "-2", "-3"], () => { bgFade2() }, 1000)
        }, 4000)
    }

    function bgFade2() {
        setTimeout(() => {
            console.log('jake')
            document.querySelector(".img1").style.opacity = 1;
            document.querySelector(".img2").style.opacity = 0;
            document.querySelector(".img3").style.opacity = 1;
            document.querySelector(".img4").style.opacity = 1;
            orderCb(["-3", "-4", "-1", "-2"], () => { bgFade3() }, 1000)
        }, 4000)
    }

    function bgFade3() {
        setTimeout(() => {
            console.log('alex')
            document.querySelector(".img1").style.opacity = 1;
            document.querySelector(".img2").style.opacity = 1;
            document.querySelector(".img3").style.opacity = 0;
            document.querySelector(".img4").style.opacity = 1;
            orderCb(["-2", "-3", "-4", "-1"], () => { bgFade4() }, 1000)
        }, 4000)
    }

    function bgFade4() {
        setTimeout(() => {
            console.log('sam')
            document.querySelector(".img1").style.opacity = 1;
            document.querySelector(".img2").style.opacity = 1;
            document.querySelector(".img3").style.opacity = 1;
            document.querySelector(".img4").style.opacity = 0;
            orderCb(["-1", "-2", "-3", "-4"], () => { bgFade1() }, 1000)
        }, 4000)
    }

    function orderCb(array, cb, time) {
        setTimeout(() => {
            document.querySelector(".img1").style.zIndex = array[0];
            document.querySelector(".img2").style.zIndex = array[1];
            document.querySelector(".img3").style.zIndex = array[2];
            document.querySelector(".img4").style.zIndex = array[3];
            cb();
        }, time)
    }

    bgFade1();

    return (
        <div className="main-home-div">
            <div className="home-img img1">
                <div className="bar-outer-container">
                    <div className="barcontainer">
                        <div className="bar">
                        </div>
                    </div>
                    <div className="barcontainer">
                        <div className="bar">
                        </div>
                    </div>
                    <div className="barcontainer">
                        <div className="bar">
                        </div>
                    </div>
                    <div className="barcontainer">
                        <div onClick={bgFade4} className="bar">
                        </div>
                    </div>
                </div>
                <div className="text-contacts-container">
                    <div className="tagline">
                        In search of a software engineer?
                    </div>
                    <h2>
                        Gary Song
                    </h2>
                    <div className="contact-buttons">
                        <button className="github">
                            <img src={githubicon} id="icon"></img>
                            <span className="contact-text">GitHub</span>
                        </button>

                        <button className="github">
                            <img src={linkedinicon} id="icon"></img>
                            <span className="contact-text">LinkedIn</span>
                        </button>

                        <button className="github">
                            <img src={websiteicon} id="icon"></img>
                            <span className="contact-text">Website</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="home-img img2">
                <div className="bar-outer-container">
                    <div className="barcontainer">
                        <div className="bar">
                        </div>
                    </div>
                    <div className="barcontainer">
                        <div className="bar">
                        </div>
                    </div>
                    <div className="barcontainer">
                        <div className="bar">
                        </div>
                    </div>
                    <div className="barcontainer">
                        <div className="bar">
                        </div>
                    </div>
                </div>
                <div className="text-contacts-container">
                    <div className="tagline">
                        Looking for a master of Flask backends?
                    </div>
                    <h2>
                        Jake Matillano
                    </h2>
                    <div className="contact-buttons">
                        <button className="github">
                            <img src={githubicon} id="icon"></img>
                            <span className="contact-text">GitHub</span>
                        </button>

                        <button className="github">
                            <img src={linkedinicon} id="icon"></img>
                            <span className="contact-text">LinkedIn</span>
                        </button>
                    </div>

                </div>
            </div>

            <div className="home-img img3">
                <div className="bar-outer-container">
                    <div className="barcontainer">
                        <div className="bar">
                        </div>
                    </div>
                    <div className="barcontainer">
                        <div className="bar">
                        </div>
                    </div>
                    <div className="barcontainer">
                        <div className="bar">
                        </div>
                    </div>
                    <div className="barcontainer">
                        <div className="bar">
                        </div>
                    </div>
                </div>
                <div className="text-contacts-container">
                    <div className="tagline">
                        Hire the dev that can take care of your entire database
                    </div>
                    <h2>
                        Alex Dam
                    </h2>
                    <div className="contact-buttons">
                        <button className="github">
                            <img src={githubicon} id="icon"></img>
                            <span className="contact-text">GitHub</span>
                        </button>

                        <button className="github">
                            <img src={linkedinicon} id="icon"></img>
                            <span className="contact-text">LinkedIn</span>
                        </button>
                    </div>

                </div>
            </div>

            <div className="home-img img4">
                <div className="bar-outer-container">
                    <div className="barcontainer">
                        <div className="bar">
                        </div>
                    </div>
                    <div className="barcontainer">
                        <div className="bar">
                        </div>
                    </div>
                    <div className="barcontainer">
                        <div className="bar">
                        </div>
                    </div>
                    <div className="barcontainer">
                        <div className="bar">
                        </div>
                    </div>
                </div>
                <div className="text-contacts-container">
                    <div className="tagline">
                        Learn data structures and algorithms with ease
                    </div>
                    <h2>
                        Sam Suh
                    </h2>
                    <div className="contact-buttons">
                        <button className="github">
                            <img src={githubicon} id="icon"></img>
                            <span className="contact-text">GitHub</span>
                        </button>

                        <button className="github">
                            <img src={linkedinicon} id="icon"></img>
                            <span className="contact-text">LinkedIn</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSlider
