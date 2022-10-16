const LOAD_ALL = 'reviews/LOAD_ALL'
const LOAD_CURRENT = 'reviews/LOAD_CURRENT'
const CREATE = 'reviews/CREATE'
const UPDATE = 'reviews/UPDATE'
const REMOVE = 'reviews/REMOVE'

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
