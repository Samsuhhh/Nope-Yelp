//  empty for now TODO
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getAllReviews } from '../../../store/review'
import './BusinessReviewPage.css'

const BusinessReview = () => {
    const { businessId } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector(state => state.session.user)
    const businessReviews = useSelector(state => state.reviews)

    useEffect(() => {
        dispatch(getAllReviews(businessId))
    }, [dispatch])
}
