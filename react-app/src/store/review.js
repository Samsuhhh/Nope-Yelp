
// Action Types
const LOAD_ALL = 'reviews/LOAD_ALL'
const LOAD_ALL_BUSINESSES_REVIEWS = 'reviews/LOAD_ALL_BUSINESSES_REVIEWS'
const LOAD_CURRENT = 'reviews/LOAD_CURRENT'
const CREATE = 'reviews/CREATE'
const UPDATE = 'reviews/UPDATE'
const REMOVE = 'reviews/REMOVE'
const RESET = 'reviews/RESET'
const LOAD_ONE = 'reviews/LOAD_ONE'

// Action Creators
const load = (reviews, businessId) => ({
    type: LOAD_ALL,
    reviews,
    businessId
})

const loadAllBusinessesReviews = (reviews) => ({
    type: LOAD_ALL_BUSINESSES_REVIEWS,
    reviews
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

export const resetReview = () => ({
    type: RESET
})

const loadOne = (reviewId) => ({
    type: LOAD_ONE,
    reviewId
})

// THUNK action creators by business ID
export const getAllReviews = (businessId) => async dispatch => {
    const response = await fetch(`/api/businesses/${businessId}/reviews`)

    if (response.ok) {
        const reviews = await response.json()
        console.log('what do the reviews look like?', reviews)
        dispatch(load(reviews, businessId))
        return reviews
    }
    return
}

export const getAllBusinessesReviews = () => async (dispatch) => {
    const response = await fetch('/api/reviews/')

    if (response.ok) {
        const reviewData = await response.json()
        await dispatch(loadAllBusinessesReviews(reviewData))
        return reviewData
    }
    return
};

export const getCurrentReviews = () => async dispatch => {
    const response = await fetch('/api/reviews/current')

    if (response.ok) {
        const review = await response.json()
        dispatch(loadCurrent(review))
        return review
    }
    return
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
        dispatch(create(businessReview, businessId))
        return businessReview
    }
    return
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
    return
}

export const removeReview = (reviewId) => async dispatch => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(remove(reviewId))
        return
    }
    return
}

export const getOneReview = (reviewId) => async dispatch => {
    const response = await fetch(`/api/reviews/${reviewId}`)

    if (response.ok) {
        const oneReview = await response.json()
        dispatch(loadOne(oneReview))
        return
    }
    return
}


const initialState = {
    business: {},
    user: {},
    allReviews: {}
}

const reviewReducer = (state = initialState, action) => {
    const business = {};
    const user = {};
    const allReviews = {};
    let newState
    switch (action.type) {
        case LOAD_ALL:
            action.reviews.forEach(review => {
                business[review.id] = review
            })
            return {
                ...state,
                business
            }
        case LOAD_ALL_BUSINESSES_REVIEWS:
            action.reviews.reviews.forEach(review => {
                allReviews[review.id] = review
            })
            return {
                ...state,
                allReviews
            }
        case LOAD_CURRENT:
            action.reviews.reviews.forEach(review => {
                user[review.id] = review
            })
            return {
                ...state,
                user
            }
        case LOAD_ONE:
            newState = { ...state, business: { ...state.business }, user: { ...state.user } }
            newState.business[action.reviewId.id] = action.reviewId
            return newState
        case CREATE:
            newState = { business: { ...state.business }, user: { ...state.user } }
            newState.business[action.review.id] = action.review
            return newState
        case UPDATE:
            newState = { business: { ...state.business } }
            newState.business[action.review.id] = action.review
            return newState
        case REMOVE:
            newState = { ...state, business: { ...state.business }, user: { ...state.user } }
            delete newState.business[action.reviewId]
            delete newState.user[action.reviewId]
            return newState
        case RESET:
            return initialState
        default:
            return state
    }
}

export default reviewReducer
