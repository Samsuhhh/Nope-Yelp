//  empty for now TODO
import { useEffect } from 'react'
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

    useEffect(() => {
        dispatch(getAllReviews(businessId))
    }, [dispatch, businessId])

    return (
        <div>
            {businessReviews &&
                <div>
                    {Object.values(businessReviews).map(review => (
                        <div key={review.id}>{review.review}</div>
                    ))}
                </div>
            }
        </div>
    )
}

export default BusinessReview
