import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleBusinessThunk } from '../../../store/business';
import { useParams, useHistory } from 'react-router-dom';
import React from 'react';
import './BusinessDetails.css'

import nopes5 from "../../../assets/nopes/5-nopes.png"
import nopes4 from "../../../assets/nopes/4-nopes.png"
import nopes3 from "../../../assets/nopes/3-nopes.png"
import nopes2 from "../../../assets/nopes/2-nopes.png"
import nopes1 from "../../../assets/nopes/1-nopes.png"




const BusinessDetails = () => {
    const dispatch = useDispatch();
    // const history = useHistory();
    const params = useParams();
    const { businessId } = params;
    const business = useSelector(state => state.businesses[businessId]);
    const [isLoaded, setIsLoaded] = useState(false)
    const [img, setImg] = useState()

    const allReviews = business?.Reviews.length
    const fiveNopeReviews = business?.Reviews.filter(review => review.nope === 5).length
    const fourNopeReviews = business?.Reviews.filter(review => review.nope === 4).length
    const threeNopeReviews = business?.Reviews.filter(review => review.nope === 3).length
    const twoNopeReviews = business?.Reviews.filter(review => review.nope === 2).length
    const oneNopeReviews = business?.Reviews.filter(review => review.nope === 1).length
    console.log(allReviews)

    const dynamicFills = (nopes) => {
        let qmaths = nopes/allReviews
        if (qmaths !== 0){
            return qmaths * 100
        }
        return qmaths * 100
    }
    

    // const [current, setCurrent] = useState(0);

    useEffect(() => {
        console.log('Business Id', businessId)
        dispatch(getSingleBusinessThunk(businessId))
            .then(() => { setIsLoaded(true) })

    }, [dispatch, businessId])

    // let images = Object.keys(business?.businessImages)
    // const length = images.length
    // console.log(length)
    // const nextSlide = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1)
    // };
    // const prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1)
    // }

    const nopeImgs = (averageNopes) => {
        if (averageNopes > 4 && averageNopes <= 5) return (nopes5)
        if (averageNopes > 3 && averageNopes <= 4) return (nopes4)
        if (averageNopes > 2 && averageNopes <= 3) return (nopes3)
        if (averageNopes > 1 && averageNopes <= 2) return (nopes2)
        if (averageNopes > 0 && averageNopes <= 1) return (nopes1)
    }



    return isLoaded && (
        <div id='business-details-page'>
            <div id='business-details-header-images'>
                <div id='business-details-images-main'>
                    <div id='carousel-wrapper'>
                        <div id='image-container'>
                            {business.businessImages.map((image) =>
                                <div className='carousel-images'>
                                    <div>{image.id}</div>
                                    <img></img>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div id='business-details-header-content'>
                    <div id='business-details-header-info-container'>
                        <div id='business-details-info'>
                            <h1>{business.business_name}</h1>
                            <div id='business-details-info-review-divs' style={{ "display": "flex" }}>
                                <div id='nopes-container'>
                                    <img id='nopes' alt='nopes' src={nopeImgs(business.reviewAverage)} />
                                </div>
                                <div>
                                    review count {business.reviewCount}
                                </div>
                            </div>
                            <div id='business-details-info-price-tags'>
                                <div>
                                    price range {business.price_range}
                                </div>
                            </div>
                            <div id='business-details-info-location'>
                                <div> {business.street_address}</div>
                                <div>{business.city}, {business.state} {business.zipcode}</div>
                            </div>
                        </div>
                    </div>
                    <div id='all-photos-div'>
                        <button id='all-photos-button'>See {business.businessImages.length} photos</button>
                    </div>
                </div>
            </div>
            <div id='business-details-container'>
                <div id='details-content'>
                    <div id='business-details-action-buttons'>
                        <button>Write a Review</button>
                        <button>Add a photo </button>
                        <button>Share</button>
                        <button>Save</button>
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
                        <div>{business.about}</div>
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
                                    <div className='star-tag-div'>5 Stars</div>
                                    <div className='dynamic-bar'>
                                        <div id='dbar-5' style={{width: `${dynamicFills(fiveNopeReviews)}`, backgroundColor: "red"}}>red color</div>
                                    </div>
                                </div>
                                <div className='dynamic-stars'>
                                    <div className='star-tag-div'>4 Stars</div>
                                    <div className='dynamic-bar'>
                                        <div id='dbar-4'>red-orange color</div>
                                    </div>
                                </div>
                                <div className='dynamic-stars'>
                                    <div className='star-tag-div'>3 Stars</div>
                                    <div className='dynamic-bar'>
                                        <div id='dbar-3'>orange color</div>
                                    </div>
                                </div>
                                <div className='dynamic-stars'>
                                    <div className='star-tag-div'>2 Stars</div>
                                    <div className='dynamic-bar'>
                                        <div id='dbar-2'>light-orange color</div>
                                    </div>
                                </div>
                                <div className='dynamic-stars'>
                                    <div className='star-tag-div'>1 star</div>
                                    <div className='dynamic-bar'>
                                        <div id='dbar-1'>yellow color</div>
                                    </div>
                                </div>
                            </div>
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
                            {business.phone}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BusinessDetails;