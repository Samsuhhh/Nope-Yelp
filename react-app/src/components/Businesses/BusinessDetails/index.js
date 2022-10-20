import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleBusinessThunk, updateBusinessThunk } from '../../../store/business';
import { getAllReviews } from '../../../store/review';
import { useParams, useHistory, Link } from 'react-router-dom';
import BusinessReview from '../../Reviews/BusinessReviews'
import React from 'react';
import './BusinessDetails.css'
import { deleteBusinessThunk } from '../../../store/business';
import Carousel, { CarouselItem } from './Carousel';

import linkIcon from '../../../assets/icons/external-linkicon.svg'
import phoneIcon from '../../../assets/icons/phoneicon.svg'
import emailIcon from '../../../assets/icons/emailicon.svg'

import nopes5 from "../../../assets/nopes/5-nopes.png"
import nopes4 from "../../../assets/nopes/4-nopes.png"
import nopes3 from "../../../assets/nopes/3-nopes.png"
import nopes2 from "../../../assets/nopes/2-nopes.png"
import nopes1 from "../../../assets/nopes/1-nopes.png"
import nope from "../../../assets/nopes/0-nopes.png"
import whiteNope from "../../../assets/nopes/ratingimg.png"


const BusinessDetails = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const { businessId } = params;
    const business = useSelector(state => state.businesses.singleBusiness);
    const currentUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)
    // const [img, setImg] = useState()

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
        history.push('/update')
    }

    const deleteHandler = async (businessId) => {
        await dispatch(deleteBusinessThunk(businessId))
        history.push('/')
    }


    useEffect(() => {
        dispatch(getSingleBusinessThunk(businessId))
            .then(() => { setIsLoaded(true) })

    }, [dispatch, businessId])



    return isLoaded && (
        <div id='business-details-page'>
            <div id='business-details-header-images'>
                <div id='business-details-images-main'>
                    <Carousel>
                        {business.BusinessImages.map((image) =>
                            <CarouselItem>
                                <div className='carousel-images'>
                                    <img id="caro-img" alt='yes' src={image.url}></img>
                                    <img id="caro-img" alt='yes' src={image.url}></img>
                                    <img id="caro-img" alt='yes' src={image.url}></img>
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
                            <h1>{business.business_name}</h1>
                            <div id='business-details-info-review-divs'>
                                <div id='nopes-container'>
                                    <img id='nopes' alt='nopes' src={nopeImgs(business.reviewAverage)} />
                                </div>
                                <div id='review-count-div'>
                                    {business.reviewCount} reviews
                                </div>
                            </div>
                            <div id='business-details-info-price-tags'>
                                <div className='info-price-tags'>
                                    {priceSetter(business.price_range)} &bull; TAGS
                                </div>
                            </div>
                            <div className='info-price-tags'>
                                <div> {business.street_address}</div>
                                <div>{business.city}, {business.state} {business.zipcode}</div>
                            </div>
                        </div>
                        <div id='all-photos-div'>
                            <button id='all-photos-button'>
                                See {business.BusinessImages.length} photos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id='business-details-container'>
                <div id='details-content'>
                    <div id='business-details-action-buttons-div'>
                        <Link to={`/businesses/${business.id}/writeareview`}>
                            <button id='write-review-button'>
                                <div id='write-review-btn-content'>
                                    <img id='white-nope-img' src={whiteNope} alt='white nope' />
                                    <div id='write-review-font-styling'>Write a Review</div>
                                </div>
                            </button>
                        </Link>
                        <div id='action-buttons-div'>
                            <button className='action-buttons'>Add a photo </button>
                        </div>
                        {currentUser && currentUser.id === business.Owner.id && (
                            <div id='auth-action-buttons'>
                                <button onClick={updateRedirect} className='action-buttons'>Edit your business</button>
                                <button onClick={deleteHandler} className='action-buttons'>Delete your business</button>
                            </div>
                        )}
                    </div>
                    <section id='business-details-amenities-container'>
                        <div>POSSIBLY AMENITIES
                        </div>
                    </section>
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
                        Current User Create Review filler
                        <div id='current-user-review-space-between'>
                            <div id='left-user-review-info'>
                                {/* <img id='owner-avatar' src={currentUser.userAvatar}</img> */}
                                <div>
                                    <div>UserName</div>
                                    <div>User First, Last</div>
                                </div>
                            </div>
                            <div id='right-user-review-info'>
                                <div>nopes</div>
                                <div>Start your review of {business.business_name}</div>
                            </div>
                        </div>
                        <div id='reviews-analytics-container'>
                            <div id='overall-ratings'>
                                <div id='overall-ratings-div-font-styling'>Overall rating</div>
                                <div id='nopes-container'>
                                    <img id='nopes' alt='nopes' src={nopeImgs(business.reviewAverage)} />
                                </div>
                                <div id='overall-ratings-big-nopes-review-count'>{business.reviewCount} reviews</div>
                            </div>
                            <div id='dynamic-horizontal-reviews'>
                                <div className='dynamic-stars'>
                                    <div className='star-tag-div'>5 nopes</div>
                                    <div id='dbar-5' className='dynamic-bar'>
                                        <div className='inner-fill' style={{ width: `${dynamicFills(fiveNopes)}%`, backgroundColor: "red"}}></div>
                                    </div>
                                </div>
                                <div className='dynamic-stars'>
                                    <div className='star-tag-div'>4 nopes</div>
                                    <div id='dbar-4' className='dynamic-bar'>
                                        <div className='inner-fill' style={{ width: `${dynamicFills(fourNopes)}%`, backgroundColor: "#f73"}}></div>
                                    </div>
                                </div>
                                <div className='dynamic-stars'>
                                    <div className='star-tag-div'>3 nopes</div>
                                    <div id='dbar-3' className='dynamic-bar'>
                                        <div className='inner-fill' style={{ width: `${dynamicFills(threeNopes)}%`, backgroundColor: "#fa2"}}></div>
                                    </div>
                                </div>
                                <div className='dynamic-stars'>
                                    <div className='star-tag-div'>2 nopes</div>
                                    <div id='dbar-2' className='dynamic-bar'>
                                        <div className='inner-fill' style={{ width: `${dynamicFills(twoNopes)}%`, backgroundColor: "#d92"}}></div>
                                    </div>
                                </div>
                                <div className='dynamic-stars'>
                                    <div className='star-tag-div'>1 nope</div>
                                    <div id='dbar-1' className='dynamic-bar'>
                                        <div className='inner-fill' style={{ width: `${dynamicFills(oneNope)}%`, backgroundColor: "#eb2"}}></div>
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
                            <a href={business.website}> {business.website}</a>
                            <img className='icon-img-asset' alt='link icon' src={linkIcon} />
                        </div>
                        <div id='sticky-email-div'>
                            {business.email}
                            <img className='icon-img-asset' alt='email icon' src={emailIcon} />
                        </div>
                        <div id='sticky-phone-div'>
                            {phoneStyling(business.phone)}
                            <img className='icon-img-asset' alt='phone icon' src={phoneIcon} />
                        </div>
                        <div className='sticky-divs'>
                            Message the owner
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BusinessDetails;
