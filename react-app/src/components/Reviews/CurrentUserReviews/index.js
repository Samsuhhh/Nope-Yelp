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
        dispatch(getCurrent())
        return () => dispatch(reset())
    }, [dispatch])
    return ()
}

export default CurrentUserReviews
