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
        if (review.length < 4 || review.length > 3000) errors.push("Review must be between 4 and 3000 characters")
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

                        <img id="user-avatar" src={js} />
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
                                            <ul>
                                                {validationErrors.map((e, i) => {
                                                    return <div key={i}>{e}</div>
                                                })}
                                            </ul>
                                        }
                                        <textarea
                                            type='text'
                                            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit. Porttitor massa id neque aliquam vestibulum morbi blandit. Netus et malesuada fames ac turpis egestas maecenas. Urna neque viverra justo nec ultrices dui sapien eget mi. Molestie at elementum eu facilisis sed. Auctor elit sed vulputate mi sit amet mauris. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Nunc mattis enim ut tellus elementum sagittis. Donec adipiscing tristique risus nec feugiat in fermentum posuere.'
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
