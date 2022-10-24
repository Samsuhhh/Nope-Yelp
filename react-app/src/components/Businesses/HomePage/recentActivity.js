import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../Footer/Footer'
import './recentActivity.css'
import { getAllBusinessesReviews } from '../../../store/review';
// import docker from '../../../assets/icons/Docker.svg'
// import bg1 from '../../../assets/bgs/bg1.png'
import nopes5 from "../../../assets/nopes/5-nopes.png"
import nopes4 from "../../../assets/nopes/4-nopes.png"
import nopes3 from "../../../assets/nopes/3-nopes.png"
import nopes2 from "../../../assets/nopes/2-nopes.png"
import nopes1 from "../../../assets/nopes/1-nopes.png"
import userprofileicon from '../../../assets/icons/userprofile.svg'
import businessicon from '../../../assets/icons/business.svg'
import Categories from './Categories'


function RecentActivity({ setSearch }) {
    const [isLoaded, setIsLoaded] = useState(false)
    const dispatch = useDispatch()
    const review = useSelector(state => state.reviews.allReviews)
    const business = useSelector(state => state.businesses.allBusinesses)
    console.log('----the review object from useSelector----', review)

    const nopeImgs = (averageNopes) => {
        if (averageNopes > 4 && averageNopes <= 5) return (nopes5)
        if (averageNopes > 3 && averageNopes <= 4) return (nopes4)
        if (averageNopes > 2 && averageNopes <= 3) return (nopes3)
        if (averageNopes > 1 && averageNopes <= 2) return (nopes2)
        if (averageNopes > 0 && averageNopes <= 1) return (nopes1)
        else return null
    }

    const imageOnErrorHandler = (event) => {
        event.currentTarget.src = userprofileicon;
    };

    const businessImageOnErrorHandler = (e) => {
        e.currentTarget.src = businessicon
    }

    useEffect(() => {
        dispatch(getAllBusinessesReviews())
            .then(() => { setIsLoaded(true) })

    }, [dispatch])

    return (
        <>
            {isLoaded &&
                <>
                    <div className="whitespace-top-recent-act"></div>
                    <div className='recent-act-wrapper'>
                        <div className='recent-act-body'>
                            <div className='recent-act-title-wrapper'>
                                <div className='recent-act-title'>Recent Activity</div>
                            </div>
                            <div className='recent-reviews-grid'>
                                <div className='recent-act-card'>
                                    <div className='user-recent-act-grid-wrapper'>
                                        <div className='user-avi-recent-act-grid'>
                                            <img id="grid-avi" src={`${review[Object.values(review).length - 1]?.owner?.userAvatar}`} onError={imageOnErrorHandler} alt='User' />
                                        </div>
                                        <div className='user-name-recent-act-grid-wrapper'>
                                            <div className='user-name-recent-act-grid'>{review[Object.values(review).length - 1]?.owner?.firstName} {review[Object.values(review).length - 1]?.owner?.lastName}</div>
                                            <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                        </div>
                                    </div>
                                    <div className='business-img-recent-act-grid'>
                                        <img id="grid-business-img" src={`${business?.[review[Object.values(review).length - 1]?.business_id]?.images?.url}`} onError={businessImageOnErrorHandler} alt='business img' />
                                    </div>


                                    <div className='business-name-recent-act-grid'>
                                        <Link className='business-name-recent-act-grid' to={`/businesses/${review[Object.values(review).length - 1]?.business_id}`}>{business?.[review[Object.values(review).length - 1]?.business_id]?.business_name}
                                        </Link>
                                    </div>


                                    <div className='nopes-recent-act-grid'>
                                        <img id='nopes-grid' alt='nopes' src={nopeImgs(review[Object.values(review).length - 1]?.nope)} />
                                    </div>
                                    <div className='review-recent-act-grid'>{review[Object.values(review).length - 1]?.review}</div>
                                </div>

                                <div className='recent-act-card'>
                                    <div className='user-recent-act-grid-wrapper'>
                                        <div className='user-avi-recent-act-grid'>
                                            <img id="grid-avi" src={`${review[Object.values(review).length - 2]?.owner?.userAvatar}`} onError={imageOnErrorHandler} alt='User' />
                                        </div>
                                        <div className='user-name-recent-act-grid-wrapper'>
                                            <div className='user-name-recent-act-grid'>{review[Object.values(review).length - 2]?.owner?.firstName} {review[Object.values(review).length - 2]?.owner?.lastName}</div>
                                            <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                        </div>
                                    </div>
                                    <div className='business-img-recent-act-grid'>
                                        <img id="grid-business-img" src={business?.[review[Object.values(review).length - 2]?.business_id]?.images?.url} alt='business img' />
                                    </div>

                                    <div className='business-name-recent-act-grid'>
                                        <Link className='business-name-recent-act-grid' to={`/businesses/${review[Object.values(review).length - 2]?.business_id}`}>{business?.[review[Object.values(review).length - 2]?.business_id]?.business_name}
                                        </Link>
                                    </div>

                                    <div className='nopes-recent-act-grid'>
                                        <img id='nopes-grid' alt='nopes' src={nopeImgs(review[Object.values(review).length - 2]?.nope)} />
                                    </div>
                                    <div className='review-recent-act-grid'>{review[Object.values(review).length - 2]?.review}</div>
                                </div>

                                <div className='recent-act-card'>
                                    <div className='user-recent-act-grid-wrapper'>
                                        <div className='user-avi-recent-act-grid'>
                                            <img id="grid-avi" src={`${review[Object.values(review).length - 3]?.owner?.userAvatar}`} onError={imageOnErrorHandler} alt='user' />
                                        </div>
                                        <div className='user-name-recent-act-grid-wrapper'>
                                            <div className='user-name-recent-act-grid'>{review[Object.values(review).length - 3]?.owner?.firstName} {review[Object.values(review).length - 3]?.owner?.lastName}</div>
                                            <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                        </div>
                                    </div>
                                    <div className='business-img-recent-act-grid'>
                                        <img id="grid-business-img" src={business?.[review[Object.values(review).length - 3]?.business_id]?.images?.url} alt='user' />
                                    </div>
                                    <div className='business-name-recent-act-grid'>
                                        <Link className='business-name-recent-act-grid' to={`/businesses/${review[Object.values(review).length - 3]?.business_id}`}>{business?.[review[Object.values(review).length - 3]?.business_id]?.business_name}
                                        </Link>
                                    </div>
                                    <div className='nopes-recent-act-grid'>
                                        <img id='nopes-grid' alt='nopes' src={nopeImgs(review[Object.values(review).length - 3]?.nope)} />
                                    </div>
                                    <div className='review-recent-act-grid'>{review[Object.values(review).length - 3]?.review}</div>
                                </div>

                                <div className='recent-act-card'>
                                    <div className='user-recent-act-grid-wrapper'>
                                        <div className='user-avi-recent-act-grid'>
                                            <img id="grid-avi" src={`${review[Object.values(review).length - 4]?.owner?.userAvatar}`} onError={imageOnErrorHandler} alt='user' />
                                        </div>
                                        <div className='user-name-recent-act-grid-wrapper'>
                                            <div className='user-name-recent-act-grid'>{review[Object.values(review).length - 4]?.owner?.firstName} {review[Object.values(review).length - 4]?.owner?.lastName}</div>
                                            <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                        </div>
                                    </div>
                                    <div className='business-img-recent-act-grid'>
                                        <img id="grid-business-img" src={business?.[review[Object.values(review).length - 4]?.business_id]?.images?.url} alt='user' />
                                    </div>
                                    <div className='business-name-recent-act-grid'>
                                        <Link className='business-name-recent-act-grid' to={`/businesses/${review[Object.values(review).length - 4]?.business_id}`}>{business?.[review[Object.values(review).length - 4]?.business_id]?.business_name}
                                        </Link>
                                    </div>
                                    <div className='nopes-recent-act-grid'>
                                        <img id='nopes-grid' alt='nopes' src={nopeImgs(review[Object.values(review).length - 4]?.nope)} />
                                    </div>
                                    <div className='review-recent-act-grid'>{review[Object.values(review).length - 4]?.review}</div>
                                </div>

                                <div className='recent-act-card'>
                                    <div className='user-recent-act-grid-wrapper'>
                                        <div className='user-avi-recent-act-grid'>
                                            <img id="grid-avi" src={`${review[Object.values(review).length - 5]?.owner?.userAvatar}`} onError={imageOnErrorHandler} alt='user' />
                                        </div>
                                        <div className='user-name-recent-act-grid-wrapper'>
                                            <div className='user-name-recent-act-grid'>{review[Object.values(review).length - 5]?.owner?.firstName} {review[Object.values(review).length - 5]?.owner?.lastName}</div>
                                            <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                        </div>
                                    </div>
                                    <div className='business-img-recent-act-grid'>
                                        <img id="grid-business-img" src={business?.[review[Object.values(review).length - 5]?.business_id]?.images?.url} alt='user' />
                                    </div>
                                    <div className='business-name-recent-act-grid'>
                                        <Link className='business-name-recent-act-grid' to={`/businesses/${review[Object.values(review).length - 5]?.business_id}`}>{business?.[review[Object.values(review).length - 5]?.business_id]?.business_name}
                                        </Link>
                                    </div>
                                    <div className='nopes-recent-act-grid'>
                                        <img id='nopes-grid' alt='nopes' src={nopeImgs(review[Object.values(review).length - 5]?.nope)} />
                                    </div>
                                    <div className='review-recent-act-grid'>{review[Object.values(review).length - 5]?.review}</div>
                                </div>

                                <div className='recent-act-card'>
                                    <div className='user-recent-act-grid-wrapper'>
                                        <div className='user-avi-recent-act-grid'>
                                            <img id="grid-avi" src={`${review[Object.values(review).length - 6]?.owner?.userAvatar}`} onError={imageOnErrorHandler} alt='user' />
                                        </div>
                                        <div className='user-name-recent-act-grid-wrapper'>
                                            <div className='user-name-recent-act-grid'>{review[Object.values(review).length - 6]?.owner?.firstName} {review[Object.values(review).length - 6]?.owner?.lastName}</div>
                                            <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                        </div>
                                    </div>
                                    <div className='business-img-recent-act-grid'>
                                        <img id="grid-business-img" src={business?.[review[Object.values(review).length - 6]?.business_id]?.images?.url} alt='user' />
                                    </div>
                                    <div className='business-name-recent-act-grid'>
                                        <Link className='business-name-recent-act-grid' to={`/businesses/${review[Object.values(review).length - 6]?.business_id}`}>{business?.[review[Object.values(review).length - 6]?.business_id]?.business_name}
                                        </Link>
                                    </div>
                                    <div className='nopes-recent-act-grid'>
                                        <img id='nopes-grid' alt='nopes' src={nopeImgs(review[Object.values(review).length - 6]?.nope)} />
                                    </div>
                                    <div className='review-recent-act-grid'>{review[Object.values(review).length - 6]?.review}</div>
                                </div>

                                <div className='recent-act-card'>
                                    <div className='user-recent-act-grid-wrapper'>
                                        <div className='user-avi-recent-act-grid'>
                                            <img id="grid-avi" src={`${review[Object.values(review).length - 7]?.owner?.userAvatar}`} onError={imageOnErrorHandler} alt='user' />
                                        </div>
                                        <div className='user-name-recent-act-grid-wrapper'>
                                            <div className='user-name-recent-act-grid'>{review[Object.values(review).length - 7]?.owner?.firstName} {review[Object.values(review).length - 7]?.owner?.lastName}</div>
                                            <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                        </div>
                                    </div>
                                    <div className='business-img-recent-act-grid'>
                                        <img id="grid-business-img" src={business?.[review[Object.values(review).length - 7]?.business_id]?.images?.url} alt='user' />
                                    </div>
                                    <div className='business-name-recent-act-grid'>
                                        <Link className='business-name-recent-act-grid' to={`/businesses/${review[Object.values(review).length - 7]?.business_id}`}>{business?.[review[Object.values(review).length - 7]?.business_id]?.business_name}
                                        </Link>
                                    </div>
                                    <div className='nopes-recent-act-grid'>
                                        <img id='nopes-grid' alt='nopes' src={nopeImgs(review[Object.values(review).length - 7]?.nope)} />
                                    </div>
                                    <div className='review-recent-act-grid'>{review[Object.values(review).length - 7]?.review}</div>
                                </div>

                                <div className='recent-act-card'>
                                    <div className='user-recent-act-grid-wrapper'>
                                        <div className='user-avi-recent-act-grid'>
                                            <img id="grid-avi" src={`${review[Object.values(review).length - 8]?.owner?.userAvatar}`} onError={imageOnErrorHandler} alt='user' />
                                        </div>
                                        <div className='user-name-recent-act-grid-wrapper'>
                                            <div className='user-name-recent-act-grid'>{review[Object.values(review).length - 8]?.owner?.firstName} {review[Object.values(review).length - 8]?.owner?.lastName}</div>
                                            <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                        </div>
                                    </div>
                                    <div className='business-img-recent-act-grid'>
                                        <img id="grid-business-img" src={business?.[review[Object.values(review).length - 8]?.business_id]?.images?.url} alt='user' />
                                    </div>
                                    <div className='business-name-recent-act-grid'>
                                        <Link className='business-name-recent-act-grid' to={`/businesses/${review[Object.values(review).length - 8].business_id}`}>{business?.[review[Object.values(review).length - 8]?.business_id]?.business_name}
                                        </Link>
                                    </div>
                                    <div className='nopes-recent-act-grid'>
                                        <img id='nopes-grid' alt='nopes' src={nopeImgs(review[Object.values(review).length - 8]?.nope)} />
                                    </div>
                                    <div className='review-recent-act-grid'>{review[Object.values(review).length - 8]?.review}</div>
                                </div>

                                <div className='recent-act-card'>
                                    <div className='user-recent-act-grid-wrapper'>
                                        <div className='user-avi-recent-act-grid'>
                                            <img id="grid-avi" src={`${review[Object.values(review).length - 9]?.owner?.userAvatar}`} onError={imageOnErrorHandler} alt='user' />
                                        </div>
                                        <div className='user-name-recent-act-grid-wrapper'>
                                            <div className='user-name-recent-act-grid'>{review[Object.values(review).length - 9]?.owner?.firstName} {review[Object.values(review).length - 9]?.owner?.lastName}</div>
                                            <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                        </div>
                                    </div>
                                    <div className='business-img-recent-act-grid'>
                                        <img id="grid-business-img" src={business?.[review[Object.values(review).length - 9]?.business_id]?.images?.url} alt='user' />
                                    </div>
                                    <div className='business-name-recent-act-grid'>
                                        <Link className='business-name-recent-act-grid' to={`/businesses/${review[Object.values(review).length - 9].business_id}`}>{business?.[review[Object.values(review).length - 9]?.business_id]?.business_name}
                                        </Link>
                                    </div>
                                    <div className='nopes-recent-act-grid'>
                                        <img id='nopes-grid' alt='nopes' src={nopeImgs(review[Object.values(review).length - 9]?.nope)} />
                                    </div>
                                    <div className='review-recent-act-grid'>{review[Object.values(review).length - 9]?.review}</div>
                                </div>


                                {/* <div className='recent-act-card'>
                            {review[2]?.review}
                            </div>

                            <div className='recent-act-card'>
                            {review[3]?.review}
                            </div>

                            <div className='recent-act-card'>
                            {review[4]?.review}
                            </div>

                            <div className='recent-act-card'>
                            {review[5]?.review}
                            </div>

                            <div className='recent-act-card'>
                            {review[6]?.review}
                            </div>

                            <div className='recent-act-card'>
                            {review[7]?.review}
                            </div>

                            <div className='recent-act-card'>
                            {review[8]?.review}
                            </div>

                            <div className='recent-act-card'>
                            {review[9]?.review}
                        </div> */}

                            </div>
                        </div>
                    </div>
                    <Categories setSearch={setSearch} />
                    <br /><br /><br /><br />
                    <br /><br /><br /><br />
                    <Footer />
                </>
            }
        </>
    )
}

export default RecentActivity
