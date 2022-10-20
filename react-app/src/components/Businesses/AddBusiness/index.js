import React from "react";
import nope from '../../../assets/nope.png'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import './AddBusiness.css'
import as1 from '../../../assets/addbusiness/add-business-asset-1.png'
import as2 from '../../../assets/addbusiness/add-business-asset-2.png'
import ic1 from '../../../assets/addbusiness/clockicon.svg'
import ic2 from '../../../assets/addbusiness/rocketicon.svg'
import ic3 from '../../../assets/addbusiness/chooseicon.svg'
import chk from '../../../assets/addbusiness/checkmark.svg'

import ficon1 from '../../../assets/addbusiness/featureicons/bar-icon.svg'
import ficon2 from '../../../assets/addbusiness/featureicons/book-icon.svg'
import ficon3 from '../../../assets/addbusiness/featureicons/box-icon.svg'
import ficon4 from '../../../assets/addbusiness/featureicons/camera-icon.svg'
import ficon5 from '../../../assets/addbusiness/featureicons/check-icon.svg'
import ficon6 from '../../../assets/addbusiness/featureicons/clock-icon.svg'
import ficon7 from '../../../assets/addbusiness/featureicons/phone-icon.svg'
import ficon8 from '../../../assets/addbusiness/featureicons/star-icon.svg'
import ficon9 from '../../../assets/addbusiness/featureicons/text-icon.svg'


function AddBusiness() {

    return (
        <>
            <div className="add-business-nav-bar">
                <div className="add-business-nav-bar-content-wrapper">
                    <img id="add-business-nav-bar-logo" src={nope} />
                    <Link to="/">
                        <div className="add-business-nav-bar-back-to-nope">Back to nope</div></Link>
                </div>
            </div>

            <div className="add-business-top-page-container">
                <div className="create-business-ad-card-wrapper">
                    <div className="create-business-ad-card">
                        <div className="create-business-ad-card-tagline">
                            Show up and stand out where it counts
                        </div>
                        <div className="create-business-ad-card-paragraph">
                            Explore free page features to connect with more customers
                        </div>
                        <div className="create-business-ad-card-create-button">Manage my free listing</div>
                    </div>
                    <img src={as1} />
                </div>

                <div className="create-business-trio-card-wrapper">
                    <div className="create-business-trio-card 1">
                        <img id="svg-trio-card" src={ic1} />
                        <div className="svg-trio-card-title">Get 24/7 presence in 5 mins</div>
                        <div className="svg-trio-card-paragraph">Be present 24/7 with your always-on free page so customers can always find you.</div>
                    </div>
                    <div className="create-business-trio-card 2">
                        <img id="svg-trio-card" src={ic2} />
                        <div className="svg-trio-card-title">Get found & grow</div>
                        <div className="svg-trio-card-paragraph">Your page gets you in front of ready-to-spend customers both on and beyond Nope.</div>
                    </div>
                    <div className="create-business-trio-card 3">
                        <img id="svg-trio-card" src={ic3} />
                        <div className="svg-trio-card-title">Help them choose you</div>
                        <div className="svg-trio-card-paragraph">Add your worst photos, fill out your page with business specialties, and more.</div>
                    </div>
                </div>


                <div className="add-business-mid-page-container">
                    <div className="add-business-mid-info-wrapper">
                        <img src={as2} />
                        <div className="add-business-mid-info">
                            <div className="add-business-mid-page">
                                BUSINESS PAGE
                            </div>
                            <div className="add-business-mid-title">
                                Help people get to know you
                            </div>
                            <div className="add-business-mid-paragraph">
                                Having a strong presence on Nope helps you completely diminish trust with potential customers. Manage your page for free or upgrade to stand out from the competition.
                            </div>
                            <div className="add-business-mid-checklist">
                                <div>
                                    <img id="chk" src={chk} />
                                    Update your business info so people can find you
                                </div>
                                <div>
                                    <img id="chk" src={chk} />
                                    Cry at your reviews and messages as soon as they come in
                                </div>
                                <div>
                                    <img id="chk" src={chk} />
                                    Add photos to showcase the worst of your business
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="add-business-mid-features-wrapper">
                        <div className="add-business-mid-features-title">Be present and get found</div>
                        <div className="add-business-mid-features-trio">
                            <div className="add-business-mid-features-trio-item">
                                <div className="add-business-mid-features-trio-item-title">
                                    <img id="f-icons" src={ficon5} />
                                    Listing
                                </div>
                                <div className="item-unordered-list">
                                    <br/>• 3 business tags
                                    <br/>• Listing on Nope
                                    <br/>• Search for listing
                                </div>
                            </div>
                            <div className="add-business-mid-features-trio-item">
                                <div className="add-business-mid-features-trio-item-title">
                                    <img id="f-icons" src={ficon7} />
                                    Contact
                                </div>
                                <div className="item-unordered-list">
                                    <br/>• Phone number
                                    <br/>• Address
                                    <br/>• Map & directions
                                </div>
                            </div>
                            <div className="add-business-mid-features-trio-item">
                                <div className="add-business-mid-features-trio-item-title">
                                    <img id="f-icons" src={ficon6} />
                                    Availability
                                </div>
                                <div className="item-unordered-list">
                                    <br/>• Address
                                    <br/>• About your business
                                    <br/>• Service area
                                </div>
                            </div>
                        </div>
                        <div className="add-business-mid-features-title">Tell your story your way</div>
                        <div className="add-business-mid-features-trio">
                            <div className="add-business-mid-features-trio-item">
                                <div className="add-business-mid-features-trio-item-title">
                                    <img id="f-icons" src={ficon2} />
                                    Offerings
                                </div>
                                <div className="item-unordered-list">
                                    <br/>• Services
                                    <br/>• Website link
                                    <br/>• Menu link
                                </div>
                            </div>
                            <div className="add-business-mid-features-trio-item">
                                <div className="add-business-mid-features-trio-item-title">
                                    <img id="f-icons" src={ficon3} />
                                    Personal
                                </div>
                                <div className="item-unordered-list">
                                    <br/>• History section
                                    <br/>• About section
                                    <br/>• Specialties
                                </div>
                            </div>
                            <div className="add-business-mid-features-trio-item">
                                <div className="add-business-mid-features-trio-item-title">
                                    <img id="f-icons" src={ficon4} />
                                    Attract
                                </div>
                                <div className="item-unordered-list">
                                    <br/>• Unlimited photos with captions
                                    <br/>• Deals & certificates
                                    <br/>• Tags
                                </div>
                            </div>
                        </div>
                        <div className="add-business-mid-features-title">Connect with new, ready-to-spend customers</div>
                        <div className="add-business-mid-features-trio">
                            <div className="add-business-mid-features-trio-item">
                                <div className="add-business-mid-features-trio-item-title">
                                    <img id="f-icons" src={ficon9} />
                                    Connect
                                </div>
                                <div className="item-unordered-list">
                                    <br/>• Phone calls
                                    <br/>• Review messages
                                    <br/>• Page visits & more
                                </div>
                            </div>
                            <div className="add-business-mid-features-trio-item">
                                <div className="add-business-mid-features-trio-item-title">
                                    <img id="f-icons" src={ficon8} />
                                    Interactions
                                </div>
                                <div className="item-unordered-list">
                                    <br/>• Receive customer reviews
                                    <br/>• Respond to reviews
                                    <br/>• Recent reviews
                                </div>
                            </div>
                            <div className="add-business-mid-features-trio-item">
                                <div className="add-business-mid-features-trio-item-title">
                                    <img id="f-icons" src={ficon1} />
                                    Performance
                                </div>
                                <div className="item-unordered-list">
                                    <br/>• Track page leads & more
                                    <br/>• Tips, news, & trends
                                    <br/>• Audience insights
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="whitespace"></div>
            <Footer />

        </>

    )
}

export default AddBusiness
