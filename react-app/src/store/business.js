
// Action Types
const LOAD_ALL = "businesses/LOAD_ALL"
const LOAD_CURRENT = "businesses/LOAD_CURRENT"
const LOAD_ONE = "businesses/LOAD_ONE"
const CREATE = "businesses/CREATE"
const UPDATE = "businesses/UPDATE"
const DELETE = "businesses/DELETE"

//Action Creators
const loadCurrent = businesses => ({
  type: LOAD_CURRENT,
  businesses
})
