// TODO
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { createReview } from '../../../store/review'
import nope from '../../../assets/nope.png'
import ratingimg from '../../../assets/nopes/ratingimg.png'
import js from '../../../assets/icons/JavaScript.svg'
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
        return () => document.getElementById('nope-selector').className = nopeClass[n]
    }



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
            {/* {user && ( */}
            <div className="write-review-main">
                <div className="write-review-nav">
                    <div className="write-review-nav-wrapper">
                        <img id="write-review-logo" src={nope} />
                        <img id="user-avatar" src={js} />
                    </div>
                </div>
                <div className="review-wrapper">
                    <div id="nope-selector" className='nopes'>
                        <span onClick={selectedNopes(4)}><img src={ratingimg}/></span>
                        <span onClick={selectedNopes(3)}><img src={ratingimg}/></span>
                        <span onClick={selectedNopes(2)}><img src={ratingimg}/></span>
                        <span onClick={selectedNopes(1)}><img src={ratingimg}/></span>
                        <span onClick={selectedNopes(0)}><img src={ratingimg}/></span>
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
                </div>
            </div>
            {/* )} */}
        </>
    )
}

export default AddBusinessReview
