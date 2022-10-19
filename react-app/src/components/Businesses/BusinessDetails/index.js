import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleBusinessThunk } from '../../../store/business';
import { getAllReviews } from '../../../store/review';
import { useParams, useHistory } from 'react-router-dom';
import BusinessReview from '../../Reviews/BusinessReviews'
import React from 'react';
import './BusinessDetails.css'
import Carousel, {CarouselItem} from './Carousel';

import nopes5 from "../../../assets/nopes/5-nopes.png"
import nopes4 from "../../../assets/nopes/4-nopes.png"
import nopes3 from "../../../assets/nopes/3-nopes.png"
import nopes2 from "../../../assets/nopes/2-nopes.png"
import nopes1 from "../../../assets/nopes/1-nopes.png"
import nope from "../../../assets/nopes/0-nopes.png"
import whiteNope from "../../../assets/nopes/ratingimg.png"


const BusinessDetails = () => {
    const dispatch = useDispatch();
    // const history = useHistory();
    const params = useParams();
    const { businessId } = params;
    const business = useSelector(state => state.businesses.singleBusiness);
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


    useEffect(() => {
        dispatch(getSingleBusinessThunk(businessId))
            .then(() => { setIsLoaded(true) })

    }, [dispatch, businessId])



    return isLoaded && (
        <div id='business-details-page'>
            <div id='business-details-header-images'>
                <div id='business-details-images-main'>
                    <Carousel>
                        <CarouselItem>1</CarouselItem>
                        <CarouselItem>2</CarouselItem>
                        <CarouselItem>3</CarouselItem>
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
                <div id='business-details-header-content' style={{ fontFamily: 'Open Sans' }}>
                    <div id='business-details-header-info-container'>
                        <div id='business-details-info'>
                            <h1 style={{ color: 'white', fontFamily: 'Open Sans' }}>{business.business_name}</h1>
                            <div id='business-details-info-review-divs' style={{ display: "flex" }}>
                                <div id='nopes-container'>
                                    <img id='nopes' alt='nopes' src={nopeImgs(business.reviewAverage)} />
                                </div>
                                <div style={{ color: 'white', marginLeft: "10px" }}>
                                    {business.reviewCount} reviews
                                </div>
                            </div>
                            <div id='business-details-info-price-tags'>
                                <div style={{ color: 'white' }}>
                                    {priceSetter(business.price_range)} &bull; TAGS
                                </div>
                            </div>
                            <div id='business-details-info-location' style={{ color: 'white' }}>
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
                        <button id='write-review-button'>
                            <img src={whiteNope} alt='white nope' style={{ width: "20px", height: "20px" }} ></img> Write a Review</button>
                        <button className='action-buttons'>Add a photo </button>
                        <button className='action-buttons'>Share</button>
                        <button className='action-buttons'>Save</button>
                    </div>
                    <section id='business-details-amenities'>
                        <div>POSSIBLY AMENITIES</div>
                    </section>
                    <section id='business-details-about-container'>
                        <div> <h1>About the Business</h1> </div>
                        <div id='about-owner-content'>
                            <div id='business-details-owner-avatar'>
                                <img alt='sexy pfp' id='owner-avatar' src={business.Owner.userAvatar} />
                            </div>
                            <div id='owner-name-title-div-column'>
                                <div id='business-details-owner-name'>
                                    {business.Owner.firstName} {business.Owner.lastName}
                                </div>
                                <div id='business-details-owner-title'>
                                    Business Owner
                                </div>
                            </div>
                        </div>
                        <div style={{ borderTop: '1px solid #ebebeb', paddingTop: '25px', marginTop: '15px' }}>{business.about}</div>
                    </section>
                    <section id='reviews-business-details-container'>
                        <div id='reviews-analytics-container'>
                            <div id='overall-ratings'>
                                <p>Overall rating</p>
                                <div id='nopes-container'>
                                    <img id='nopes' alt='nopes' src={nopeImgs(business.reviewAverage)} />
                                </div>
                                <div><p>{business.reviewCount} reviews</p></div>
                            </div>
                            <div id='dynamic-horizontal-reviews'>
                                <div className='dynamic-stars'>
                                    <div className='star-tag-div'>5 nopes</div>
                                    <div id='dbar-5' className='dynamic-bar'>
                                        <div style={{ width: `${dynamicFills(fiveNopes)}%`, backgroundColor: "red", height: '100%', borderRadius: '15px' }}></div>
                                    </div>
                                </div>
                                <div className='dynamic-stars'>
                                    <div className='star-tag-div'>4 nopes</div>
                                    <div id='dbar-4' className='dynamic-bar'>
                                        <div style={{ width: `${dynamicFills(fourNopes)}%`, backgroundColor: "#f73", height: '100%', borderRadius: '15px' }}></div>
                                    </div>
                                </div>
                                <div className='dynamic-stars'>
                                    <div className='star-tag-div'>3 nopes</div>
                                    <div id='dbar-3' className='dynamic-bar'>
                                        <div style={{ width: `${dynamicFills(threeNopes)}%`, backgroundColor: "#fa2", height: '100%', borderRadius: '15px' }}></div>
                                    </div>
                                </div>
                                <div className='dynamic-stars'>
                                    <div className='star-tag-div'>2 nopes</div>
                                    <div id='dbar-2' className='dynamic-bar'>
                                        <div style={{ width: `${dynamicFills(twoNopes)}%`, backgroundColor: "#d92", height: '100%', borderRadius: '15px' }}></div>
                                    </div>
                                </div>
                                <div className='dynamic-stars'>
                                    <div className='star-tag-div'>1 nope</div>
                                    <div id='dbar-1' className='dynamic-bar'>
                                        <div style={{ width: `${dynamicFills(oneNope)}%`, backgroundColor: "#eb2", height: '100%', borderRadius: '15px' }}></div>
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
                        <div>
                            <a href={business.website}> {business.website}</a>
                        </div>
                        <div>
                            {business.email}
                        </div>
                        <div>
                            {phoneStyling(business.phone)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BusinessDetails;
