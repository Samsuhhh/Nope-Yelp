import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../Footer/Footer'
import './recentActivity.css'
import { getAllBusinessesReviews } from '../../../store/review';
import docker from '../../../assets/icons/Docker.svg'
import bg1 from '../../../assets/bgs/bg1.png'
import nopes5 from "../../../assets/nopes/5-nopes.png"
import nopes4 from "../../../assets/nopes/4-nopes.png"
import nopes3 from "../../../assets/nopes/3-nopes.png"
import nopes2 from "../../../assets/nopes/2-nopes.png"
import nopes1 from "../../../assets/nopes/1-nopes.png"


function RecentActivity() {
    const [isLoaded, setIsLoaded] = useState(false)
    const dispatch = useDispatch()
    const review = useSelector(state => state.reviews.allReviews)
    const business = useSelector(state => state.businesses.allBusinesses)

    const nopeImgs = (averageNopes) => {
        if (averageNopes > 4 && averageNopes <= 5) return (nopes5)
        if (averageNopes > 3 && averageNopes <= 4) return (nopes4)
        if (averageNopes > 2 && averageNopes <= 3) return (nopes3)
        if (averageNopes > 1 && averageNopes <= 2) return (nopes2)
        if (averageNopes > 0 && averageNopes <= 1) return (nopes1)
        else return null
    }

    useEffect(() => {
        dispatch(getAllBusinessesReviews())
            .then(() => { setIsLoaded(true) })

    }, [dispatch])

    // console.log('ya', review?.reviews[2])
    return (
        <>
            {isLoaded &&
                <>
                    <div className='recent-act-wrapper'>
                        <div className='recent-act-body'>
                            <div className='recent-act-title-wrapper'>
                                <div className='recent-act-title'>Recent Activity</div>
                            </div>
                            <div className='recent-reviews-grid'>
                                <div className='recent-act-card'>
                                    <div className='user-recent-act-grid-wrapper'>
                                        <div className='user-avi-recent-act-grid'>
                                            <img id="grid-avi" src={review[1]?.owner?.userAvatar} />
                                        </div>
                                        <div className='user-name-recent-act-grid-wrapper'>
                                            <div className='user-name-recent-act-grid'>{review[1]?.owner?.firstName} {review[1]?.owner?.lastName}</div>
                                            <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                        </div>
                                    </div>
                                    <div className='business-img-recent-act-grid'>
                                        <img id="grid-business-img" src={business?.[review[1]?.business_id]?.images?.url} />
                                    </div>


                                        <div className='business-name-recent-act-grid'>
                                        <Link className='business-name-recent-act-grid' to={`/businesses/${review[1]?.business_id}`}>{business?.[review[1]?.business_id]?.business_name}
                                        </Link>
                                        </div>


                                    <div className='nopes-recent-act-grid'>
                                        <img id='nopes-grid' alt='nopes' src={nopeImgs(review[1]?.nope)} />
                                    </div>
                                    <div className='review-recent-act-grid'>{review[1]?.review}</div>
                                </div>

                                <div className='recent-act-card'>
                                    <div className='user-recent-act-grid-wrapper'>
                                        <div className='user-avi-recent-act-grid'>
                                            <img id="grid-avi" src={review[15]?.owner?.userAvatar} />
                                        </div>
                                        <div className='user-name-recent-act-grid-wrapper'>
                                            <div className='user-name-recent-act-grid'>{review[15]?.owner?.firstName} {review[15]?.owner?.lastName}</div>
                                            <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                        </div>
                                    </div>
                                    <div className='business-img-recent-act-grid'>
                                        <img id="grid-business-img" src={business?.[review[15]?.business_id]?.images?.url} />
                                    </div>

                                    <div className='business-name-recent-act-grid'>
                                        <Link className='business-name-recent-act-grid' to={`/businesses/${review[15]?.business_id}`}>{business?.[review[15]?.business_id]?.business_name}
                                        </Link>
                                    </div>

                                    <div className='nopes-recent-act-grid'>
                                        <img id='nopes-grid' alt='nopes' src={nopeImgs(review[15]?.nope)} />
                                    </div>
                                    <div className='review-recent-act-grid'>{review[15]?.review}</div>
                                </div>

                                <div className='recent-act-card'>
                                    <div className='user-recent-act-grid-wrapper'>
                                        <div className='user-avi-recent-act-grid'>
                                            <img id="grid-avi" src={review[33]?.owner?.userAvatar} />
                                        </div>
                                        <div className='user-name-recent-act-grid-wrapper'>
                                            <div className='user-name-recent-act-grid'>{review[33]?.owner?.firstName} {review[33]?.owner?.lastName}</div>
                                            <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                        </div>
                                    </div>
                                    <div className='business-img-recent-act-grid'>
                                        <img id="grid-business-img" src={business?.[review[33]?.business_id]?.images?.url} />
                                    </div>
                                    <div className='business-name-recent-act-grid'>
                                        <Link className='business-name-recent-act-grid' to={`/businesses/${review[33]?.business_id}`}>{business?.[review[33]?.business_id]?.business_name}
                                        </Link>
                                    </div>
                                    <div className='nopes-recent-act-grid'>
                                        <img id='nopes-grid' alt='nopes' src={nopeImgs(review[33]?.nope)} />
                                    </div>
                                    <div className='review-recent-act-grid'>{review[33]?.review}</div>
                                </div>

                                <div className='recent-act-card'>
                                    <div className='user-recent-act-grid-wrapper'>
                                        <div className='user-avi-recent-act-grid'>
                                            <img id="grid-avi" src={review[77]?.owner?.userAvatar} />
                                        </div>
                                        <div className='user-name-recent-act-grid-wrapper'>
                                            <div className='user-name-recent-act-grid'>{review[77]?.owner?.firstName} {review[77]?.owner?.lastName}</div>
                                            <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                        </div>
                                    </div>
                                    <div className='business-img-recent-act-grid'>
                                        <img id="grid-business-img" src={business?.[review[77]?.business_id]?.images?.url} />
                                    </div>
                                    <div className='business-name-recent-act-grid'>
                                        <Link className='business-name-recent-act-grid' to={`/businesses/${review[77]?.business_id}`}>{business?.[review[77]?.business_id]?.business_name}
                                        </Link>
                                    </div>
                                    <div className='nopes-recent-act-grid'>
                                        <img id='nopes-grid' alt='nopes' src={nopeImgs(review[77]?.nope)} />
                                    </div>
                                    <div className='review-recent-act-grid'>{review[77]?.review}</div>
                                </div>

                                <div className='recent-act-card'>
                                    <div className='user-recent-act-grid-wrapper'>
                                        <div className='user-avi-recent-act-grid'>
                                            <img id="grid-avi" src={review[98]?.owner?.userAvatar} />
                                        </div>
                                        <div className='user-name-recent-act-grid-wrapper'>
                                            <div className='user-name-recent-act-grid'>{review[98]?.owner?.firstName} {review[98]?.owner?.lastName}</div>
                                            <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                        </div>
                                    </div>
                                    <div className='business-img-recent-act-grid'>
                                        <img id="grid-business-img" src={business?.[review[98]?.business_id]?.images?.url} />
                                    </div>
                                    <div className='business-name-recent-act-grid'>
                                        <Link className='business-name-recent-act-grid' to={`/businesses/${review[98]?.business_id}`}>{business?.[review[98]?.business_id]?.business_name}
                                        </Link>
                                    </div>
                                    <div className='nopes-recent-act-grid'>
                                        <img id='nopes-grid' alt='nopes' src={nopeImgs(review[98]?.nope)} />
                                    </div>
                                    <div className='review-recent-act-grid'>{review[98]?.review}</div>
                                </div>

                                <div className='recent-act-card'>
                                    <div className='user-recent-act-grid-wrapper'>
                                        <div className='user-avi-recent-act-grid'>
                                            <img id="grid-avi" src={review[24]?.owner?.userAvatar} />
                                        </div>
                                        <div className='user-name-recent-act-grid-wrapper'>
                                            <div className='user-name-recent-act-grid'>{review[24]?.owner?.firstName} {review[24]?.owner?.lastName}</div>
                                            <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                        </div>
                                    </div>
                                    <div className='business-img-recent-act-grid'>
                                        <img id="grid-business-img" src={business?.[review[24]?.business_id]?.images?.url} />
                                    </div>
                                    <div className='business-name-recent-act-grid'>
                                        <Link className='business-name-recent-act-grid' to={`/businesses/${review[24]?.business_id}`}>{business?.[review[24]?.business_id]?.business_name}
                                        </Link>
                                    </div>
                                    <div className='nopes-recent-act-grid'>
                                        <img id='nopes-grid' alt='nopes' src={nopeImgs(review[24]?.nope)} />
                                    </div>
                                    <div className='review-recent-act-grid'>{review[24]?.review}</div>
                                </div>

                                <div className='recent-act-card'>
                                    <div className='user-recent-act-grid-wrapper'>
                                        <div className='user-avi-recent-act-grid'>
                                            <img id="grid-avi" src={review[12]?.owner?.userAvatar} />
                                        </div>
                                        <div className='user-name-recent-act-grid-wrapper'>
                                            <div className='user-name-recent-act-grid'>{review[12]?.owner?.firstName} {review[12]?.owner?.lastName}</div>
                                            <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                        </div>
                                    </div>
                                    <div className='business-img-recent-act-grid'>
                                        <img id="grid-business-img" src={business?.[review[52]?.business_id]?.images?.url} />
                                    </div>
                                    <div className='business-name-recent-act-grid'>
                                        <Link className='business-name-recent-act-grid' to={`/businesses/${review[52]?.business_id}`}>{business?.[review[52]?.business_id]?.business_name}
                                        </Link>
                                    </div>
                                    <div className='nopes-recent-act-grid'>
                                        <img id='nopes-grid' alt='nopes' src={nopeImgs(review[52]?.nope)} />
                                    </div>
                                    <div className='review-recent-act-grid'>{review[52]?.review}</div>
                                </div>

                                <div className='recent-act-card'>
                                    <div className='user-recent-act-grid-wrapper'>
                                        <div className='user-avi-recent-act-grid'>
                                            <img id="grid-avi" src={review[7]?.owner?.userAvatar} />
                                        </div>
                                        <div className='user-name-recent-act-grid-wrapper'>
                                            <div className='user-name-recent-act-grid'>{review[7]?.owner?.firstName} {review[7]?.owner?.lastName}</div>
                                            <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                        </div>
                                    </div>
                                    <div className='business-img-recent-act-grid'>
                                        <img id="grid-business-img" src={business?.[review[7]?.business_id]?.images?.url} />
                                    </div>
                                    <div className='business-name-recent-act-grid'>
                                        <Link className='business-name-recent-act-grid' to={`/businesses/${review[7].business_id}`}>{business?.[review[7]?.business_id]?.business_name}
                                        </Link>
                                    </div>
                                    <div className='nopes-recent-act-grid'>
                                        <img id='nopes-grid' alt='nopes' src={nopeImgs(review[7]?.nope)} />
                                    </div>
                                    <div className='review-recent-act-grid'>{review[7]?.review}</div>
                                </div>

                                <div className='recent-act-card'>
                                    <div className='user-recent-act-grid-wrapper'>
                                        <div className='user-avi-recent-act-grid'>
                                            <img id="grid-avi" src={review[88]?.owner?.userAvatar} />
                                        </div>
                                        <div className='user-name-recent-act-grid-wrapper'>
                                            <div className='user-name-recent-act-grid'>{review[88]?.owner?.firstName} {review[88]?.owner?.lastName}</div>
                                            <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                        </div>
                                    </div>
                                    <div className='business-img-recent-act-grid'>
                                        <img id="grid-business-img" src={business?.[review[88]?.business_id]?.images?.url} />
                                    </div>
                                    <div className='business-name-recent-act-grid'>
                                        <Link className='business-name-recent-act-grid' to={`/businesses/${review[88].business_id}`}>{business?.[review[88]?.business_id]?.business_name}
                                        </Link>
                                    </div>
                                    <div className='nopes-recent-act-grid'>
                                        <img id='nopes-grid' alt='nopes' src={nopeImgs(review[88]?.nope)} />
                                    </div>
                                    <div className='review-recent-act-grid'>{review[88]?.review}</div>
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
                    <br /><br /><br /><br />
                    <Footer />
                </>
            }
        </>
    )
}

export default RecentActivity
