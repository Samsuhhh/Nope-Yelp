import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleBusinessThunk, updateBusinessThunk } from '../../../store/business';
import { getAllReviews } from '../../../store/review';
import { useParams, useHistory, Link, NavLink } from 'react-router-dom';
import BusinessReview from '../../Reviews/BusinessReviews'
import React from 'react';
import './BusinessDetails.css'
import { deleteBusinessThunk, addBusinessImage } from '../../../store/business';
import Carousel, { CarouselItem } from './Carousel';
import BusinessNavBar from './Carousel/BusinessNavBar/BusinessNavBar'
import Footer from '../../Footer/Footer'
import { Modal } from '../../../context/Modal';
import { removeReview } from '../../../store/review';
import linkIcon from '../../../assets/icons/external-linkicon.svg'
import phoneIcon from '../../../assets/icons/phoneicon.svg'
import emailIcon from '../../../assets/icons/emailicon.svg'
import editpen from '../../../assets/icons/edit-pen.svg'
import trashcan from '../../../assets/icons/trash-can.svg'

import xicon from '../../../assets/icons/x-icon.svg'

import nopes5 from "../../../assets/nopes/5-nopes.png"
import nopes4 from "../../../assets/nopes/4-nopes.png"
import nopes3 from "../../../assets/nopes/3-nopes.png"
import nopes2 from "../../../assets/nopes/2-nopes.png"
import nopes1 from "../../../assets/nopes/1-nopes.png"
import nope from "../../../assets/nopes/0-nopes.png"
import whiteNope from "../../../assets/nopes/ratingimg.png"
import camera from "../../../assets/addbusiness/featureicons/camera-icon.svg"
import info from "../../../assets/addbusiness/featureicons/info-icon.svg"
import defpp from "../../../assets/businessdetails/defaultprofile.jpg"
import BusinessImages from '../BusinessImages';



const BusinessDetails = ({ search, onClose }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const { businessId } = params;
    const business = useSelector(state => state.businesses.singleBusiness);
    const currentUser = useSelector(state => state.session.user);
    const reviewsObj = useSelector(state => state?.reviews.business);
    let existingReview;
    const existingReviews = Object.values(reviewsObj);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showPhotosModal, setShowPhotosModal] = useState(false);

    // const [img, setImg] = useState()
    // console.log('user', currentUser)
    // console.log('busi', business)

    if (!existingReviews.length) {
        existingReview = true
    } else {
        for (let i = 0; i < existingReviews.length; i++) {
            if (existingReviews[i]?.user_id === currentUser?.id) {
                existingReview = false
            } else {
                existingReview = true
            }
        }
    }

    const allReviews = business?.Reviews?.length
    const fiveNopes = business?.Reviews?.filter(review => review.nope === 5).length
    const fourNopes = business?.Reviews?.filter(review => review.nope === 4).length
    const threeNopes = business?.Reviews?.filter(review => review.nope === 3).length
    const twoNopes = business?.Reviews?.filter(review => review.nope === 2).length
    const oneNope = business?.Reviews?.filter(review => review.nope === 1).length

    const dynamicFills = (nopes) => {
        let qmaths = nopes / allReviews
        if (qmaths !== 0) {
            return qmaths * 100
        }
        return qmaths * 100
    }


    const restaurantArray = [
        'https://i.imgur.com/6NCXvwd.png',
        'https://i.imgur.com/OCpfvCF.png',
        'https://i.imgur.com/ndhmitw.png',
        'https://i.imgur.com/YgqGyfY.png',
        'https://i.imgur.com/h5fLvE5.jpg',
        'https://i.imgur.com/ZQG8Rd7.jpg',
        'https://i.imgur.com/WpNfj61.jpg',
        'https://i.imgur.com/vK29O5v.png',
        'https://i.imgur.com/F4tl2wu.png',
        'https://i.imgur.com/Qj7qhTO.png',
        'https://i.imgur.com/cXi292q.jpg',
        'https://i.imgur.com/3nIF2go.png',
        'https://i.imgur.com/pit6hLw.png',
        'https://i.imgur.com/mExiuvL.jpg',
        'https://i.imgur.com/25vA8Fi.png',
        'https://i.imgur.com/MwYw75l.png',
        'https://i.imgur.com/GZxXSN7.png',
        'https://i.imgur.com/dNPX6ul.jpg',
        'https://i.imgur.com/Z3mbjAw.jpg',
        'https://i.imgur.com/BOXFqW4.png',
        'https://i.imgur.com/Xhq4vtH.png',
        'https://i.imgur.com/XGre7Oc.png',
        'https://i.imgur.com/THmjJdy.jpg',
        'https://i.imgur.com/eDvUj0j.jpg',
        'https://i.imgur.com/EjFLLtT.png',
        'https://i.imgur.com/Hjh8Soh.png',
        'https://i.imgur.com/DDWMY35.jpg',
        'https://i.imgur.com/qSbLDEc.png',
        'https://i.imgur.com/yw7i6e9.png',
        'https://i.imgur.com/S5x2Kud.png',
        'https://i.imgur.com/mfgOsMm.jpg',
        'https://i.imgur.com/rOgGckr.png',
        'https://i.imgur.com/mT7Fdrc.png',
        'https://i.imgur.com/FGtBIcX.png',
        'https://i.imgur.com/ZzK4fJf.png'
    ]

    function randomNum() {
        return Math.floor(Math.random() * 35);
    }


    // const [current, setCurrent] = useState(0);

    // let images = Object.keys(business?.businessImages)
    // const length = images.length
    // console.log(length)
    // const nextSlide = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1)
    // };
    // const prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1)
    // }

    const priceSetter = (price) => {
        if (!price) return 'NEW'

        if (price === 4) return '$$$$';
        if (price === 3) return '$$$';
        if (price === 2) return '$$';
        if (price === 1) return '$';
    }

    const nopeImgs = (averageNopes) => {
        if (averageNopes > 4 && averageNopes <= 5) return (nopes5)
        if (averageNopes > 3 && averageNopes <= 4) return (nopes4)
        if (averageNopes > 2 && averageNopes <= 3) return (nopes3)
        if (averageNopes > 1 && averageNopes <= 2) return (nopes2)
        if (averageNopes > 0 && averageNopes <= 1) return (nopes1)
        else return nope
    }

    const phoneStyling = (phone) => {
        let split = phone.split("");
        split.unshift('(')
        split.splice(4, 0, ') ')
        split.splice(8, 0, '-')
        return split.join('')
    }

    const updateRedirect = () => {
        history.push(`/businesses/${business.id}/updatebusiness`)
    }

    const deleteHandler = async () => {
        await dispatch(deleteBusinessThunk(businessId))
        history.push('/')
    }


    let currentUserReview;
    if (currentUser) {
        currentUserReview = Object.values(reviewsObj).filter(review => review.user_id === currentUser.id)
    }

    useEffect(() => {
        dispatch(getSingleBusinessThunk(businessId))
            .then(() => { setIsLoaded(true) })


    }, [dispatch, businessId, existingReviews.length, showPhotosModal, reviewsObj])

    let numReviews = business.reviewCount === 1 ? "Review" : "Reviews"
    let numPhotos = business?.BusinessImages?.length === 1 ? "Photo" : "Photos"

    return isLoaded && (
        <>
            {showPhotosModal && (
                <Modal id='photo-modal' onClose={() => setShowPhotosModal(false)}>
                    <div id="close-modal" onClick={() => setShowPhotosModal(false)}>
                        Close <img id="close-modal-icon" src={xicon} alt='close icon'/>
                    </div>
                    <div>
                        <BusinessImages></BusinessImages>
                    </div>
                </Modal>
            )}

            <div id='business-details-page'>
                <div id='whitespacetop'></div>
                {/* {showPhotosModal && (
                <Modal id='photo-modal' onClose={() => setShowPhotosModal(false)}>
                    <div onClick={() => setShowPhotosModal(false)}>
                        Insert X here
                    </div>
                    <div>
                        <BusinessImages></BusinessImages>
                    </div>
                </Modal>
            )} */}
                {/* <BusinessNavBar /> */}
                <div id='business-details-header-images'>
                    <div id='business-details-images-main'>
                        <Carousel>
                            {business?.BusinessImages?.map((image) =>
                                <CarouselItem>
                                    <div className='carousel-images'>
                                        <img id="caro-img" alt='yes' src={restaurantArray[randomNum()]}></img>
                                        <img id="caro-img" alt='yes' src={image.url}></img>
                                        <img id="caro-img" alt='yes' src={restaurantArray[randomNum()]}></img>
                                    </div>
                                </CarouselItem>
                            )}

                        </Carousel>
                        {/* <div id='carousel-wrapper'>
                        <div id='image-container'>
                            {business.businessImages.map((image) =>
                                <div className='carousel-images'>
                                    <div>{image.id}</div>
                                    <img></img>
                                </div>
                            )}
                        </div>
                    </div> */}
                        {/* <Carousel/> */}
                    </div>
                    <div id='business-details-header-content' >
                        <div id='business-details-header-info-container'>
                            <div id='business-details-info'>
                                <div id='business-details-info-name'>{business.business_name}</div>
                                <div id='business-details-info-review-divs'>
                                    <div id='nopes-container'>
                                        <img id='nopes' alt='nopes' src={nopeImgs(business.reviewAverage)} />
                                    </div>
                                    <div id='review-count-div'>
                                        {business.reviewCount} {numReviews}
                                    </div>
                                </div>
                                <div id='business-details-info-price-tags'>
                                    <div className='info-price-tags'>
                                        <div id='claimed'></div>
                                        {/* Claimed div not done just leaving as a reminder */}
                                        Claimed &bull; {priceSetter(business.price_range)} &bull; {`${business.tags[0].tag}, ${business.tags[1].tag}, ${business.tags[2].tag}`}
                                    </div>
                                </div>
                                <div className='info-price-tags'>
                                    <div> {business.street_address}</div>
                                    <div>{business.city}, {business.state} {business.zipcode}</div>
                                </div>
                            </div>
                            <div id='all-photos-div' onClick={() => setShowPhotosModal(true)}>
                                {/* <NavLink to={`/businesses/${businessId}/images`} id='all-photos-button'> */}
                                <div id='all-photos-button'>
                                    See {business.BusinessImages.length} {numPhotos}
                                </div>
                                {/* </NavLink> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div id='business-details-container'>
                    <div id='details-content'>
                        <div id='business-details-action-buttons-div'>
                            {(currentUser && currentUser.id !== business.Owner.id && existingReview) &&
                                <Link to={`/businesses/${business.id}/writeareview`}>
                                    <button id='write-review-button'>
                                        <div id='write-review-btn-content'>
                                            <img id='white-nope-img' src={whiteNope} alt='white nope' />
                                            <div id='write-review-font-styling'>Write a Review</div>
                                        </div>
                                    </button>
                                </Link>
                            }
                            {currentUser && currentUser.id === business.Owner.id && (
                                <>
                                    <div id='action-buttons-div'>
                                        <NavLink to={`/businesses/${business.id}/images/new`} className='action-buttons'>
                                            <img id="add-photo-icon" src={camera} alt='camera icon'/>
                                            Add photo
                                        </NavLink>
                                    </div>

                                    <div id='auth-action-buttons'>
                                        <button onClick={updateRedirect} className='action-buttons'>Edit Business</button>
                                    </div>
                                    <div id='auth-action-buttons'>
                                        <button onClick={deleteHandler} className='action-buttons'>Delete Business</button>
                                    </div>
                                </>
                            )}
                        </div>
                        <section id='business-details-about-container'>
                            <div id='about-business-h2-div'>
                                <h2>About the Business </h2>
                            </div>
                            <div id='about-owner-content'>
                                <div id='business-details-owner-avatar'>
                                    <img alt='sexy pfp' id='owner-avatar' src={business.Owner.userAvatar} />
                                </div>
                                <div id='owner-name-title-div-column'>
                                    <div id='business-details-owner-name'>
                                        {business.Owner.firstName} {business.Owner.lastName ? business.Owner.lastName.slice(0, 1) + '.' : '$.'}
                                    </div>
                                    <div id='business-details-owner-title'>
                                        Business Owner
                                    </div>
                                </div>
                            </div>
                            <div id='business-details-about'>{business.about}</div>
                        </section>

                        <section id='reviews-business-details-container'>
                            <div id='about-business-h2-div'>
                                <h2>Reviews</h2>

                                <div id="review-trust-banner">
                                    <div id="review-trust-lining"></div>
                                    <img id="info-img" src={info} alt='info img'/>
                                    <div id="review-trust-message">
                                        <b>Your trust is of inconsequential concern,</b> so businesses can pay large amounts to alter or remove their reviews. Thank you for understanding.
                                    </div>
                                    <div id="blankleft"></div>
                                </div>

                            </div>
                            <div id='current-user-review-space-between'>
                                {currentUser && currentUser.id === business.owner_id && (
                                    <div id='left-user-review-info'>
                                        <div id="current-user-review-record">
                                            <img alt='owner avatar' id='owner-avatar' src={currentUser.userAvatar}></img>
                                            <div>
                                                <div id="left-user-name-styling">{currentUser.username}</div>
                                                <div id="left-user-fullname-styling">{currentUser.firstName} {currentUser.lastName}</div>
                                            </div>
                                        </div>

                                        <div id="current-user-review-record">
                                            <div id='right-user-review-info'>
                                                <div><img alt='nopes' id="review-info-nope" src={nope} /></div>
                                                <div>You cannot review your own business, {business.business_name}</div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {currentUser && currentUser.id !== business.owner_id && (
                                    <div id='left-user-review-info'>
                                        <div id="current-user-review-record">
                                            <img alt='owner avatar' id='owner-avatar' src={currentUser.userAvatar}></img>
                                            <div>
                                                <div id="left-user-name-styling">{currentUser.username}</div>
                                                <div id="left-user-fullname-styling">{currentUser.firstName} {currentUser.lastName}</div>
                                            </div>
                                        </div>
                                        <div id="current-user-review-record">
                                            <div id='right-user-review-info'>
                                                <div id="review-actions-container">
                                                    <img id="review-info-nope" src={nopeImgs(currentUserReview[0]?.nope)} alt='nope images' />
                                                    {currentUserReview.length !== 0 && (
                                                        <>
                                                            <NavLink to={`/reviews/${currentUserReview[0]?.id}/edit`}>
                                                                <button className="current-user-review-actions-btn">
                                                                    <img className="current-user-review-actions-img" src={editpen} alt='nope images'></img>
                                                                </button>
                                                            </NavLink>

                                                            <button onClick={() => dispatch(removeReview(currentUserReview[0]?.id))} className="current-user-review-actions-btn">
                                                                <img className="current-user-review-actions-img" src={trashcan} alt='trash can icon'></img>
                                                            </button>

                                                        </>
                                                    )}
                                                </div>
                                                {currentUserReview.length !== 0 && (
                                                    <div>Your current review of {business.business_name}</div>
                                                )}
                                                {currentUserReview.length === 0 && (
                                                    <div>You haven't reviewed {business.business_name}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {!currentUser && (
                                    <div id='left-user-review-info'>
                                        <div id="current-user-review-record">
                                            <img id='owner-avatar' src={defpp} alt='owner avatar'></img>
                                            <div>
                                                <div id="left-user-username-styling">Username</div>
                                                <div id="left-user-name-styling">First name Last name</div>
                                            </div>
                                        </div>
                                        <div id="current-user-review-record">
                                            <div id='right-user-review-info'>
                                                <div><img id="review-info-nope" alt='nope' src={nope} /></div>
                                                <div>You must sign in to review {business.business_name}</div>
                                            </div>
                                        </div>
                                    </div>)}

                            </div>
                            <div id='reviews-analytics-container'>
                                <div id='overall-ratings'>
                                    <div id='overall-ratings-div-font-styling'>Overall rating</div>
                                    <div id='nopes-container'>
                                        <img id='nopes' alt='nopes' src={nopeImgs(business.reviewAverage)} />
                                    </div>
                                    <div id='overall-ratings-big-nopes-review-count'>{business.reviewCount} {numReviews}</div>
                                </div>
                                <div id='dynamic-horizontal-reviews'>
                                    <div className='dynamic-stars'>
                                        <div className='star-tag-div'>5 nopes</div>
                                        <div id='dbar-5' className='dynamic-bar'>
                                            <div className='inner-fill' style={{ width: `${dynamicFills(fiveNopes)}%`, backgroundColor: "red" }}></div>
                                        </div>
                                    </div>
                                    <div className='dynamic-stars'>
                                        <div className='star-tag-div'>4 nopes</div>
                                        <div id='dbar-4' className='dynamic-bar'>
                                            <div className='inner-fill' style={{ width: `${dynamicFills(fourNopes)}%`, backgroundColor: "#f73" }}></div>
                                        </div>
                                    </div>
                                    <div className='dynamic-stars'>
                                        <div className='star-tag-div'>3 nopes</div>
                                        <div id='dbar-3' className='dynamic-bar'>
                                            <div className='inner-fill' style={{ width: `${dynamicFills(threeNopes)}%`, backgroundColor: "#fa2" }}></div>
                                        </div>
                                    </div>
                                    <div className='dynamic-stars'>
                                        <div className='star-tag-div'>2 nopes</div>
                                        <div id='dbar-2' className='dynamic-bar'>
                                            <div className='inner-fill' style={{ width: `${dynamicFills(twoNopes)}%`, backgroundColor: "#d92" }}></div>
                                        </div>
                                    </div>
                                    <div className='dynamic-stars'>
                                        <div className='star-tag-div'>1 nope</div>
                                        <div id='dbar-1' className='dynamic-bar'>
                                            <div className='inner-fill' style={{ width: `${dynamicFills(oneNope)}%`, backgroundColor: "#eb2" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <BusinessReview></BusinessReview>
                            </div>
                        </section>
                    </div>
                    <div id='sticky-sidebar-container'>
                        <div id='sticky-sidebar-content'>
                            <div id='sticky-website-div'>
                                <a href={business.website}>
                                    <p>{business.website}</p>
                                </a>
                                <img className='icon-img-asset' alt='link icon' src={linkIcon} />
                            </div>
                            <div id='sticky-email-div'>
                                <a href={`mailto:${business.email}`}>
                                    <p>{business.email}</p>
                                </a>
                                <img className='icon-img-asset' alt='email icon' src={emailIcon} />
                            </div>
                            <div id='sticky-phone-div'>
                                {phoneStyling(business.phone)}
                                <img className='icon-img-asset' alt='phone icon' src={phoneIcon} />
                            </div>

                        </div>
                    </div>
                </div>
                <div id="whitespacetop"></div>
                <Footer />
            </div>
        </>
    )

}

export default BusinessDetails;
