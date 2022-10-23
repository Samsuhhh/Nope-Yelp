//  empty for now TODO
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom'
import { getAllReviews, removeReview } from '../../../store/review'
import editicon from '../../../assets/icons/edit-pen.svg'
import trashcan from '../../../assets/icons/trash-can.svg'
import userprofileicon from '../../../assets/icons/userprofile.svg'
import nopes5 from "../../../assets/nopes/5-nopes.png"
import nopes4 from "../../../assets/nopes/4-nopes.png"
import nopes3 from "../../../assets/nopes/3-nopes.png"
import nopes2 from "../../../assets/nopes/2-nopes.png"
import nopes1 from "../../../assets/nopes/1-nopes.png"
import nope from "../../../assets/nopes/0-nopes.png"
import './BusinessReviews.css'

const BusinessReview = () => {
    const { businessId } = useParams()
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)
    const businessReviews = useSelector(state => state.reviews.business)
    const [isLoaded, setIsLoaded] = useState(false)

    const imgOnLoadHandler = e => {
        console.log("loaded")
        if (e.currentTarget.className !== "error") {
            console.log("success")
        }
    }
    const imageOnErrorHandler = (event) => {
        event.currentTarget.src = userprofileicon;
    };

    // conditional to render edit and delete YOUR review button
    // { user && user.id === businessReviews.Owner.id}

    const nopeImgs = (nopesCount) => {
        if (nopesCount > 4 && nopesCount <= 5) return (nopes5)
        if (nopesCount > 3 && nopesCount <= 4) return (nopes4)
        if (nopesCount > 2 && nopesCount <= 3) return (nopes3)
        if (nopesCount > 1 && nopesCount <= 2) return (nopes2)
        if (nopesCount > 0 && nopesCount <= 1) return (nopes1)
        else return nope
    }
    useEffect(() => {
        dispatch(getAllReviews(businessId))
            .then(() => { setIsLoaded(true) })
    }, [dispatch, businessId])

    return isLoaded && (
        <div>
            {businessReviews &&
                <div>
                    {Object.values(businessReviews).map(review => (
                        <div id='review-card' key={review.id}>
                            <div id='review-info'>
                                <div id='review-user-avatar-div'>
                                    <img
                                        id='user-avatar'
                                        src={`${review.Owner.userAvatar}`}
                                        alt='user avatar'
                                        onLoad={imgOnLoadHandler}
                                        onError={imageOnErrorHandler}
                                    />
                                </div>
                                <div id='user-info-div'>
                                    <div id='user-name'>{review.Owner.firstName} {review.Owner.lastName ? review.Owner.lastName.slice(0, 1) + '.' : '$.'}</div>
                                    <div>user friends/pictures/reviews</div>
                                </div>
                            </div>
                            <div id='review-nopes-container-flex-row'>
                                <img id='review-nopes' alt='nopes' src={nopeImgs(review.nope)} />
                                <div>{review.updated_at ? new Date(review.updated_at).toString().slice(4, 15) : new Date(review.created_at).toString().slice(4, 15)}</div>
                            </div>
                            <div id='review-grumble'>{review.review}</div>
                            {(user && user.id === review.user_id) && (
                                <>
                                    <div id="review-actions-business-reviews">
                                        <NavLink to={`/reviews/${review.id}/edit`}>
                                            <button id="edit-review-btn-current-user-reviews" >
                                                <img className="current-user-review-action-btns" alt='edit me' src={editicon}>
                                                </img>
                                            </button>
                                        </NavLink>
                                        <button className="eviscerate-btn"onClick={() => dispatch(removeReview(review.id))}>
                                            <img className="current-user-review-action-btns" alt='eviscerate me' src={trashcan}></img>
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default BusinessReview
