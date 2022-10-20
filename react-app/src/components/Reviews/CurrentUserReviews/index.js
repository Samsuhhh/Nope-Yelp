import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentReviews, removeReview, reset } from '../../../store/review'
import { NavLink } from 'react-router-dom'
import './CurrentUserReviews.css'

const CurrentUserReviews = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)
    const reviews = useSelector(state => state.reviews.user)
    const businesses = useSelector(state => state.businesses.allBusinesses)
    console.log("your mom", Object.values(businesses))

    const priceRange = e => {
        if (e === 4) return "$$$$"
        if (e === 3) return "$$$"
        if (e === 2) return "$$"
        if (e === 1) return "$"
    }

    useEffect(() => {
        dispatch(getCurrentReviews())
        return () => dispatch(reset())
    }, [dispatch])
    if (reviews === undefined || !Object.values(reviews).length) {
        return (
            <div>Looks like you dont have any Reviews!</div>
        )
    } else {
        return (
            <div>
                {reviews && Object.values(reviews)?.length &&
                    <div id="reviews-list-main-container">
                        <h2>Your Reviews</h2>

                        <div>
                            {Object.values(reviews)?.map(review => (
                                <div id="review-card-current-user-reviews" key={review.id}>
                                    <div id="review-list-container-current-reviews">
                                        <div id="text-container-current-reviews">
                                            {console.log(businesses[review.business_id]?.images.url)}
                                            <img id="current-user-reviews-business-img" src={businesses[review.business_id]?.images?.url}></img>
                                        </div>
                                        <div>
                                            <div>{businesses[review.business_id]?.business_name}</div>
                                            <div>{priceRange(businesses[review.business_id]?.price_range)}</div>
                                            <div>{businesses[review.business_id]?.street_address}</div>
                                            <div>{businesses[review.business_id]?.city}, {businesses[review.business_id]?.state}{" "}{businesses[review.business_id]?.zipcode}</div>
                                        </div>
                                    </div>
                                    <div id="review-body-container-current-user-reviews">
                                        <div>{review.review}</div>
                                        {(user && user.id === review.user_id) && (
                                            <button onClick={() => dispatch(removeReview(review.id))}>Delete Review</button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default CurrentUserReviews
