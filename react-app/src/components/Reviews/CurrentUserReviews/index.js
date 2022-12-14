import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentReviews, removeReview, reset } from '../../../store/review'
import { NavLink, useHistory } from 'react-router-dom'
import editicon from '../../../assets/icons/edit-pen.svg'
import trashcan from '../../../assets/icons/trash-can.svg'
import nopes5 from "../../../assets/nopes/5-nopes.png"
import nopes4 from "../../../assets/nopes/4-nopes.png"
import nopes3 from "../../../assets/nopes/3-nopes.png"
import nopes2 from "../../../assets/nopes/2-nopes.png"
import nopes1 from "../../../assets/nopes/1-nopes.png"
import nopes0 from "../../../assets/nopes/0-nopes.png"
import businessicon from '../../../assets/icons/business.svg'
import './CurrentUserReviews.css'

const CurrentUserReviews = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector(state => state.session.user)
    const reviews = useSelector(state => state.reviews.user)
    const businesses = useSelector(state => state.businesses.allBusinesses)

    const priceRange = e => {
        if (e === 4) return "$$$$"
        if (e === 3) return "$$$"
        if (e === 2) return "$$"
        if (e === 1) return "$"
    }
    const nopeRatingBar = (rating) => {
        if (rating > 4 && rating <= 5) return (nopes5)
        if (rating > 3 && rating <= 4) return (nopes4)
        if (rating > 2 && rating <= 3) return (nopes3)
        if (rating > 1 && rating <= 2) return (nopes2)
        if (rating > 0 && rating <= 1) return (nopes1)
        else return nopes0
    }
    let deleteReviewHandler;
    const imageOnErrorHandler = (event) => {
        event.currentTarget.src = businessicon;
      };
    useEffect(() => {
        dispatch(getCurrentReviews())
        // return () => dispatch(reset())
    }, [dispatch])
    if (reviews === undefined || !Object.values(reviews).length) {
        return (
            <div id="no-reviews-message">You haven't left any reviews yet. </div>
        )
    } else {
        return (
            <div>
                {reviews && Object.values(reviews)?.length &&
                    <div id="reviews-list-main-container">


                        <div>
                            {Object.values(reviews)?.reverse().map(review => (
                                < div id="review-card-current-user-reviews" key={review.id} >
                                    <NavLink id="business-navlink-card" to={`/businesses/${businesses[review.business_id]?.id}`}>
                                        <div id="review-list-container-current-reviews">
                                            <div id="text-container-current-reviews">
                                                <img id="current-user-reviews-business-img" src={`${businesses[review.business_id]?.images?.url}`} onError={imageOnErrorHandler}></img>
                                            </div>
                                            <div id="business-information-container-current-user-reviews">
                                                <NavLink id="business-name-navlink-current-user-businesses" to={`/businesses/${businesses[review.business_id]?.id}`}>
                                                    <div id="business-name-current-user-businesses">{businesses[review.business_id]?.business_name}</div>
                                                </NavLink>
                                                <div>{priceRange(businesses[review.business_id]?.price_range)}</div>
                                                <div>{businesses[review.business_id]?.street_address}</div>
                                                <div>{businesses[review.business_id]?.city}, {businesses[review.business_id]?.state}{" "}{businesses[review.business_id]?.zipcode}</div>
                                            </div>
                                        </div>
                                        <div id="review-body-container-current-user-reviews">
                                            <div id="nopes-date-container-container-user-reviews">
                                                <img id='nopes' alt='plsno' src={nopeRatingBar(review.nope)} />
                                                <div id="review-date-current-user-reviews">
                                                    <div>{review.created_at.slice(8, 11)}. {review.created_at.slice(5, 7)}, {review.created_at.slice(12, 16)}</div>
                                                </div>
                                            </div>
                                            <div id="review-body-text-current-user-reviews">{review.review}</div>
                                            {(user && user.id === review.user_id) && (
                                                <div id="review-actions-current-user-reviews">
                                                    <div>
                                                        <NavLink to={`/businesses/${businesses[review.business_id]?.id}`}>

                                                            <button id="edit-review-btn-current-user-reviews" >
                                                                <img className="current-user-review-action-btns" alt='edit me' src={editicon}>
                                                                </img>
                                                            </button>
                                                        </NavLink>
                                                    </div>
                                                    <div>
                                                        {deleteReviewHandler = async () => {
                                                            if (window.confirm('Are you sure you want to delete this review?')) {
                                                                await dispatch(removeReview(review.id))
                                                                history.push('/user-profile/reviews')
                                                            } else {
                                                                history.push('/user-profile/reviews')
                                                            }
                                                        }}
                                                        <button id="delete-review-btn-current-user-reviews" onClick={deleteReviewHandler}>
                                                            <img className="current-user-review-action-btns" alt='eviscerate me' src={trashcan}>
                                                            </img>
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div >
        )
    }
}

export default CurrentUserReviews
