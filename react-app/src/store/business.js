
// Action Types
const LOAD_ALL = "businesses/LOAD_ALL"
const LOAD_CURRENT = "businesses/LOAD_CURRENT"
const LOAD_ONE = "businesses/LOAD_ONE"
const CREATE = "businesses/CREATE"
const UPDATE = "businesses/UPDATE"
const REMOVE = "businesses/DELETE"

//Action Creators
const loadAll = (businesses) => ({
  type: LOAD_ALL,
  businesses
})

const loadCurrent = (businesses) => ({
  type: LOAD_CURRENT,
  businesses
})

const loadOne = (business) => ({
  type: LOAD_ONE,
  business
})

const create = (business) => ({
  type: CREATE,
  business
})

const update = (business) => ({
  type: UPDATE,
  business
})

const remove = businessId => ({
  type: REMOVE,
  businessId
})
