//  empty for now TODO
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getAllReviews, removeReview } from '../../../store/review'
import './BusinessReviews.css'

const BusinessReview = () => {
    const { businessId } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector(state => state.session.user)
    const businessReviews = useSelector(state => state.reviews)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        dispatch(getAllReviews(businessId))
            .then(() => { setIsLoaded(true) })
    }, [dispatch, businessId])

    return isLoaded && (
        <div>
            {businessReviews &&
                <div>
                    {Object.values(businessReviews).map(review => (
                        <div key={review.id}>
                            <div>{review.Owner.userAvatar}</div>
                            <div>{review.Owner.firstName} {review.Owner.lastName}</div>
                            <div>{review.review}</div>
                            <div>{review.nope}</div>
                            <div>{review.updated_at ? new Date(review.updated_at).toString().slice(4, 15) : new Date(review.created_at).toString().slice(4, 15)}</div>
                            {(user && user.id === review.user_id) && (
                                <button onClick={() => dispatch(removeReview(review.id))}>
                                    Delete Review
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default BusinessReview
