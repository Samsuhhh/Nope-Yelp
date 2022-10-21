import './UpdateBusinessReview.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { updateReview } from '../../../store/review'
import './UpdateBusinessReview.css'

const UpdateBusinessReview = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector(state => state.session.user)
    const existingReviewsObj = useSelector(state => state.reviews.business)
    const existingReview = Object.values(existingReviewsObj).filter(review => review?.user_id === user.id)[0]
    console.log('the existing reivew', existingReview)

    const [review, setReview] = useState(existingReview.review)
    const [nopes, setNopes] = useState(existingReview.nope)
    const [validationErrors, setValidationErrors] = useState([])
    const [showErrors, setShowErrors] = useState(false)

    // const updateReview = (e) => setReview(e.target.value)
    const updateNopes = (e) => setNopes(e.target.value)

    useEffect(() => {
        const errors = []
        if (review.length < 4 || review.length > 3000) errors.push("Review must be between 4 and 3000 characters")
        setValidationErrors(errors)
    }, [review, nopes])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setShowErrors(true)

        if (!validationErrors.length) {
            const payload = {
                review,
                nope: +nopes
            }

            let updatedReview = await dispatch(updateReview(payload, existingReview.id))

            if (updatedReview) {
                setShowErrors(false)
                history.push(`/businesses/${existingReview.business_id}`)
            }
        }
    }

    const handleCancel = async (e) => {
        e.preventDefault()
        // not sure if i use should businessId from useparams or business.id from state.
        // really depends on our reducer
        history.push(`/businesses/${existingReview.business_id}`)
    }
    return (
        <>
            {user && (
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            {showErrors &&
                                <ul>
                                    {validationErrors.map((e, i) => {
                                        return <div key={i}>{e}</div>
                                    })}
                                </ul>
                            }
                            <textarea
                                type='text'
                                placeholder=''
                                value={review}
                                required
                                onChange={(e) => setReview(e.target.value)} />
                            <div>
                                <div>Nopes</div>
                                <input
                                    type='number'
                                    min='1'
                                    max='5'
                                    placeholder="1-5 nopes"
                                    value={nopes}
                                    required
                                    onChange={updateNopes} />
                            </div>
                            <button
                                type='submit'>
                                Submit
                            </button>
                            <button
                                type='button'
                                onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}

export default UpdateBusinessReview
