
// Action Types
const LOAD_ALL = 'reviews/LOAD_ALL'
const LOAD_CURRENT = 'reviews/LOAD_CURRENT'
const CREATE = 'reviews/CREATE'
const UPDATE = 'reviews/UPDATE'
const REMOVE = 'reviews/REMOVE'
const RESET = 'reviews/RESET'

// Action Creators
const load = (reviews, businessId) => ({
    type: LOAD_ALL,
    reviews,
    businessId
})

const loadCurrent = (reviews) => ({
    type: LOAD_CURRENT,
    reviews
})

const create = (review, businessId) => ({
    type: CREATE,
    review,
    businessId
})

const update = (review) => ({
    type: UPDATE,
    review
})

const remove = (reviewId) => ({
    type: REMOVE,
    reviewId
})

export const reset = () => ({
    type: RESET
})

// THUNK action creators
export const getAllReviews = (businessId) => async dispatch => {
    const response = await fetch(`/api/businesses/${businessId}/reviews`)

    if (response.ok) {
        const reviews = await response.json()
        dispatch(load(reviews, businessId))
    } else {
        console.log("------Get All Reviews Thunk Error-------")
    }
    return null
}

export const getCurrentReviews = () => async dispatch => {
    const response = await fetch('/api/reivews/current')

    if (response.ok) {
        const review = await response.json()
        dispatch(loadCurrent(review))
        return review
    }
    else {
        console.log("------Get Current Reviews Thunk Error------")
    }
}

export const createReview = (review, businessId) => async dispatch => {
    const response = await fetch(`/api/businesses/${businessId}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const businessReview = await response.json()
        dispatch(create(businessReview))
        return businessReview
    }
    else {
        console.log('------Create Review Thunk Error------')
    }
    return null
}

export const updateReview = (review, reviewId) => async dispatch => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const updatedReview = await response.json()
        dispatch(update(updatedReview))
        return updatedReview
    }
    else {
        return ("-------Update Review Thunk Error-------")
    }
    return null
}

export const removeReview = (reviewId) => async dispatch => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(remove(reviewId))
        return
    }
    else {
        console.log("----Delete Review Thunk Error----")
        return
    }
}

const initialState = {}

const reviewReducer = (state = initialState, action) => {
    let newState = { ...initialState }
    switch (action.type) {
        case LOAD_ALL:
            action.reviews.Reviews.forEach(review => {
                newState[review.id] = review
            })
            return { newState }
    }
}

export default reviewReducer
