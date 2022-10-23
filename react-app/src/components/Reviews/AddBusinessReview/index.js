// TODO
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory, useParams } from 'react-router-dom'
import { createReview } from '../../../store/review'
import { getSingleBusinessThunk } from '../../../store/business'
import nope from '../../../assets/nope.png'
import ratingimg from '../../../assets/nopes/ratingimg.png'
import js from '../../../assets/icons/JavaScript.svg'
import './AddBusinessReview.css'

const AddBusinessReview = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector(state => state.session.user)
    const business = useSelector(state => state.businesses.singleBusiness)
    const { businessId } = useParams()

    const [review, setReview] = useState('')
    const [nopes, setNopes] = useState('')
    const [validationErrors, setValidationErrors] = useState([])
    const [showErrors, setShowErrors] = useState(false)
    // const [selected, setSelected] = useState(false)

    const updateReview = (e) => setReview(e.target.value)
    const updateNopes = (e) => setNopes(e.target.value)

    const nopeClass = [
        'nopes-selected-1',
        'nopes-selected-2',
        'nopes-selected-3',
        'nopes-selected-4',
        'nopes-selected-5'
    ]

    const selectedNopes = (n) => {
        return () => {
            document.getElementById('nope-selector').className = nopeClass[n]
            setNopes(n + 1)
        }
    }

    useEffect(() => {
        dispatch(getSingleBusinessThunk(businessId))
    }, [dispatch])

    useEffect(() => {
        const errors = []
        if (review.length < 4 || review.length > 3000 || !review.trim().length) errors.push("Review must be between 4 and 3000 characters")
        if (nopes < 1) errors.push("Please select a rating")
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

            let createdReview = await dispatch(createReview(payload, businessId))

            if (createdReview) {
                setShowErrors(false)
                history.push(`/businesses/${businessId}`)
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
            {/* {user && ( */}
            <div className="write-review-main">
                <div className="write-review-nav">
                    <div className="write-review-nav-wrapper">
                        <NavLink to='/' exact={true} activeClassName='active'>
                            <img id="write-review-logo" src={nope} />
                        </NavLink>

                        <img id="user-avatar" src={user.userAvatar} />
                    </div>
                </div>
                <div className="review-wrapper">
                    <div className="review-container">
                        <div className="review-business-title">How was {business.business_name}?</div>
                        <div className="nopes-and-review-wrapper">
                            <div id="nope-selector" className='nopes'>
                                <span
                                    value='5'
                                    // onChange={updateNopes}
                                    required
                                    onClick={selectedNopes(4)}
                                >
                                    <img src={ratingimg} />
                                </span>

                                <span
                                    onClick={selectedNopes(3)}
                                    value='4'
                                    required
                                // onChange={updateNopes}
                                >
                                    <img src={ratingimg} />
                                </span>

                                <span
                                    onClick={selectedNopes(2)}
                                    value='3'
                                    required
                                    onChange={updateNopes}
                                >
                                    <img src={ratingimg} />
                                </span>

                                <span
                                    onClick={selectedNopes(1)}
                                    value='2'
                                    required
                                // onChange={updateNopes}
                                >
                                    <img src={ratingimg} />
                                </span>

                                <span
                                    onClick={selectedNopes(0)}
                                    value='1'
                                    required
                                // onChange={updateNopes}
                                >
                                    <img src={ratingimg} />
                                </span>

                            </div>
                            <div className="write-a-review">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        {showErrors &&
                                            <div id="error-holder">
                                                {validationErrors.map((e, i) => {
                                                    return <div id="review-error" key={i}>{e}</div>
                                                })}
                                            </div>
                                        }
                                        <textarea
                                            type='text'
                                            placeholder="Really, I don't know what I was expecting. For a place that seems to have it all together on the outside they really don't have it all together on the inside. There's a lesson to be learned here... something about judging a book by it's cover. But also maybe I didn't give this place a fair shot. Afterall I did go inside and left immediately. I did however find what I believe to be the best Panda Express possibly in the country. Honey walnut shrimp was divine. I washed that thing down with an ice cold pepsi and just basked in what was possibly the happiest food coma I've ever had."
                                            value={review}
                                            required
                                            onChange={updateReview} />
                                        <div className="submit-and-cancel-review">
                                            <button
                                                id='submit-review'
                                                type='submit'>
                                                Post Review
                                            </button>
                                            <button
                                                id='cancel-review'
                                                type='button'
                                                onClick={handleCancel}>
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* )} */}
        </>
    )
}

export default AddBusinessReview
