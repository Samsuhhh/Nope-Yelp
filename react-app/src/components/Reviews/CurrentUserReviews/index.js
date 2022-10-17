import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentReviews, removeReview, reset } from '../../../store/review'
import { NavLink } from 'react-router-dom'
import './CurrentUserReviews.css'

const CurrentUserReviews = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)
    const reviews = useSelector(state => state.reviews)

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
                {reviews && Object.values(reviews).length &&
                <div>
                    <h2>Person's Reviews!</h2>
                    <div>
                        {Object.values(reviews).map(review => {
                            <div key={review.id}>
                                {review.review}
                            </div>
                        })}
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default CurrentUserReviews
