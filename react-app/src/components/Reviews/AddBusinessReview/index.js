// TODO
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { createReview } from '../../../store/review'
import './AddBusinessReview.css'

const AddBusinessReview = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector(state => state.session.user)
    const business = useSelector(state => state.businesses)
    const businessId = useParams()

    const [review, setReview] = useState('')
    const [nopes, setNopes] = useState(1)
    const [validationErrors, setValidationErrors] = useState([])
    const [showErrors, setShowErrors] = useState(false)

    const updateReview = (e) => setReview(e.target.value)
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
                nopes
            }

            let createdReview = await dispatch(createReview(payload, businessId))

            if (createdReview) {
                setShowErrors(false)
                history.push(`/spots/${businessId}`)
            }
        }
    }

    const handleCancel = async (e) => {
        e.preventDefault()
        // not sure if i use should businessId from useparams or business.id from state.
        // really depends on our reducer
        history.push(`/businesses/${businessId}`)
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
                                onChange={updateReview} />
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

export default AddBusinessReview
