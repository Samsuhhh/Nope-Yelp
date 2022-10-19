import React, { useState, useEffect } from 'react'
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
    const review = useSelector(state => state.reviews)
    const business = useSelector(state => state.businesses)

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

    console.log('ya', review?.reviews[2])
    return (
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
                                    <img id="grid-avi" src={docker} />
                                </div>
                                <div className='user-name-recent-act-grid-wrapper'>
                                    <div className='user-name-recent-act-grid'>{review?.reviews[1]?.user_id}</div>
                                    <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                </div>
                            </div>
                            <div className='business-img-recent-act-grid'>
                                <img id="grid-business-img" src={business?.[review?.reviews[1]?.business_id]?.images?.url} />
                            </div>
                            <div className='business-name-recent-act-grid'>{business?.[review?.reviews[1]?.business_id]?.business_name}</div>
                            <div className='nopes-recent-act-grid'>
                                <img id='nopes-grid' alt='nopes' src={nopeImgs(review?.reviews[1]?.nope)} />
                            </div>
                            <div className='review-recent-act-grid'>{review?.reviews[1]?.review}</div>
                        </div>

                        <div className='recent-act-card'>
                            <div className='user-recent-act-grid-wrapper'>
                                <div className='user-avi-recent-act-grid'>
                                    <img id="grid-avi" src={docker} />
                                </div>
                                <div className='user-name-recent-act-grid-wrapper'>
                                    <div className='user-name-recent-act-grid'>{review?.reviews[15]?.user_id}</div>
                                    <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                </div>
                            </div>
                            <div className='business-img-recent-act-grid'>
                                <img id="grid-business-img" src={business?.[review?.reviews[15]?.business_id]?.images?.url} />
                            </div>
                            <div className='business-name-recent-act-grid'>{business?.[review?.reviews[15]?.business_id]?.business_name}</div>
                            <div className='nopes-recent-act-grid'>
                                <img id='nopes-grid' alt='nopes' src={nopeImgs(review?.reviews[15]?.nope)} />
                            </div>
                            <div className='review-recent-act-grid'>{review?.reviews[15]?.review}</div>
                        </div>

                        <div className='recent-act-card'>
                            <div className='user-recent-act-grid-wrapper'>
                                <div className='user-avi-recent-act-grid'>
                                    <img id="grid-avi" src={docker} />
                                </div>
                                <div className='user-name-recent-act-grid-wrapper'>
                                    <div className='user-name-recent-act-grid'>{review?.reviews[33]?.user_id}</div>
                                    <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                </div>
                            </div>
                            <div className='business-img-recent-act-grid'>
                                <img id="grid-business-img" src={business?.[review?.reviews[33]?.business_id]?.images?.url} />
                            </div>
                            <div className='business-name-recent-act-grid'>{business?.[review?.reviews[33]?.business_id]?.business_name}</div>
                            <div className='nopes-recent-act-grid'>
                                <img id='nopes-grid' alt='nopes' src={nopeImgs(review?.reviews[33]?.nope)} />
                            </div>
                            <div className='review-recent-act-grid'>{review?.reviews[33]?.review}</div>
                        </div>

                        <div className='recent-act-card'>
                            <div className='user-recent-act-grid-wrapper'>
                                <div className='user-avi-recent-act-grid'>
                                    <img id="grid-avi" src={docker} />
                                </div>
                                <div className='user-name-recent-act-grid-wrapper'>
                                    <div className='user-name-recent-act-grid'>{review?.reviews[77]?.user_id}</div>
                                    <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                </div>
                            </div>
                            <div className='business-img-recent-act-grid'>
                                <img id="grid-business-img" src={business?.[review?.reviews[77]?.business_id]?.images?.url} />
                            </div>
                            <div className='business-name-recent-act-grid'>{business?.[review?.reviews[77]?.business_id]?.business_name}</div>
                            <div className='nopes-recent-act-grid'>
                                <img id='nopes-grid' alt='nopes' src={nopeImgs(review?.reviews[77]?.nope)} />
                            </div>
                            <div className='review-recent-act-grid'>{review?.reviews[77]?.review}</div>
                        </div>

                        <div className='recent-act-card'>
                            <div className='user-recent-act-grid-wrapper'>
                                <div className='user-avi-recent-act-grid'>
                                    <img id="grid-avi" src={docker} />
                                </div>
                                <div className='user-name-recent-act-grid-wrapper'>
                                    <div className='user-name-recent-act-grid'>{review?.reviews[98]?.user_id}</div>
                                    <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                </div>
                            </div>
                            <div className='business-img-recent-act-grid'>
                                <img id="grid-business-img" src={business?.[review?.reviews[98]?.business_id]?.images?.url} />
                            </div>
                            <div className='business-name-recent-act-grid'>{business?.[review?.reviews[98]?.business_id]?.business_name}</div>
                            <div className='nopes-recent-act-grid'>
                                <img id='nopes-grid' alt='nopes' src={nopeImgs(review?.reviews[98]?.nope)} />
                            </div>
                            <div className='review-recent-act-grid'>{review?.reviews[98]?.review}</div>
                        </div>

                        <div className='recent-act-card'>
                            <div className='user-recent-act-grid-wrapper'>
                                <div className='user-avi-recent-act-grid'>
                                    <img id="grid-avi" src={docker} />
                                </div>
                                <div className='user-name-recent-act-grid-wrapper'>
                                    <div className='user-name-recent-act-grid'>{review?.reviews[24]?.user_id}</div>
                                    <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                </div>
                            </div>
                            <div className='business-img-recent-act-grid'>
                                <img id="grid-business-img" src={business?.[review?.reviews[24]?.business_id]?.images?.url} />
                            </div>
                            <div className='business-name-recent-act-grid'>{business?.[review?.reviews[24]?.business_id]?.business_name}</div>
                            <div className='nopes-recent-act-grid'>
                                <img id='nopes-grid' alt='nopes' src={nopeImgs(review?.reviews[24]?.nope)} />
                            </div>
                            <div className='review-recent-act-grid'>{review?.reviews[24]?.review}</div>
                        </div>

                        <div className='recent-act-card'>
                            <div className='user-recent-act-grid-wrapper'>
                                <div className='user-avi-recent-act-grid'>
                                    <img id="grid-avi" src={docker} />
                                </div>
                                <div className='user-name-recent-act-grid-wrapper'>
                                    <div className='user-name-recent-act-grid'>{review?.reviews[52]?.user_id}</div>
                                    <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                </div>
                            </div>
                            <div className='business-img-recent-act-grid'>
                                <img id="grid-business-img" src={business?.[review?.reviews[52]?.business_id]?.images?.url} />
                            </div>
                            <div className='business-name-recent-act-grid'>{business?.[review?.reviews[52]?.business_id]?.business_name}</div>
                            <div className='nopes-recent-act-grid'>
                                <img id='nopes-grid' alt='nopes' src={nopeImgs(review?.reviews[52]?.nope)} />
                            </div>
                            <div className='review-recent-act-grid'>{review?.reviews[52]?.review}</div>
                        </div>

                        <div className='recent-act-card'>
                            <div className='user-recent-act-grid-wrapper'>
                                <div className='user-avi-recent-act-grid'>
                                    <img id="grid-avi" src={docker} />
                                </div>
                                <div className='user-name-recent-act-grid-wrapper'>
                                    <div className='user-name-recent-act-grid'>{review?.reviews[7]?.user_id}</div>
                                    <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                </div>
                            </div>
                            <div className='business-img-recent-act-grid'>
                                <img id="grid-business-img" src={business?.[review?.reviews[7]?.business_id]?.images?.url} />
                            </div>
                            <div className='business-name-recent-act-grid'>{business?.[review?.reviews[7]?.business_id]?.business_name}</div>
                            <div className='nopes-recent-act-grid'>
                                <img id='nopes-grid' alt='nopes' src={nopeImgs(review?.reviews[7]?.nope)} />
                            </div>
                            <div className='review-recent-act-grid'>{review?.reviews[7]?.review}</div>
                        </div>

                        <div className='recent-act-card'>
                            <div className='user-recent-act-grid-wrapper'>
                                <div className='user-avi-recent-act-grid'>
                                    <img id="grid-avi" src={docker} />
                                </div>
                                <div className='user-name-recent-act-grid-wrapper'>
                                    <div className='user-name-recent-act-grid'>{review?.reviews[88]?.user_id}</div>
                                    <div className='user-action-recent-act-grid'>Wrote a Review</div>
                                </div>
                            </div>
                            <div className='business-img-recent-act-grid'>
                                <img id="grid-business-img" src={business?.[review?.reviews[88]?.business_id]?.images?.url} />
                            </div>
                            <div className='business-name-recent-act-grid'>{business?.[review?.reviews[88]?.business_id]?.business_name}</div>
                            <div className='nopes-recent-act-grid'>
                                <img id='nopes-grid' alt='nopes' src={nopeImgs(review?.reviews[88]?.nope)} />
                            </div>
                            <div className='review-recent-act-grid'>{review?.reviews[88]?.review}</div>
                        </div>


                        {/* <div className='recent-act-card'>
                            {review?.reviews[2]?.review}
                        </div>

                        <div className='recent-act-card'>
                            {review?.reviews[3]?.review}
                        </div>

                        <div className='recent-act-card'>
                            {review?.reviews[4]?.review}
                        </div>

                        <div className='recent-act-card'>
                            {review?.reviews[5]?.review}
                        </div>

                        <div className='recent-act-card'>
                            {review?.reviews[6]?.review}
                        </div>

                        <div className='recent-act-card'>
                            {review?.reviews[7]?.review}
                        </div>

                        <div className='recent-act-card'>
                            {review?.reviews[8]?.review}
                        </div>

                        <div className='recent-act-card'>
                            {review?.reviews[9]?.review}
                        </div> */}

                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
            <Footer />
        </>
    )
}

export default RecentActivity
