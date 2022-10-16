
// Action Types
const LOAD_ALL = "businesses/LOAD_ALL";
const LOAD_CURRENT = "businesses/LOAD_CURRENT";
const LOAD_ONE = "businesses/LOAD_ONE";
const CREATE = "businesses/CREATE";
const UPDATE = "businesses/UPDATE";
const REMOVE = "businesses/DELETE";

//Action Creators
const loadAll = (businesses) => ({
  type: LOAD_ALL,
  businesses
});

const loadCurrent = (businesses) => ({
  type: LOAD_CURRENT,
  businesses
});

const loadOne = (business) => ({
  type: LOAD_ONE,
  business
});

const create = (business) => ({
  type: CREATE,
  business
});

const update = (business) => ({
  type: UPDATE,
  business
});

const remove = businessId => ({
  type: REMOVE,
  businessId
});

// THUNK action creators
export const getAllBusinesses = () => async (dispatch) => {
  const response = await fetch("/api/businesses");
  const businessData = await response.json();

  if (response.ok) {
    dispatch(loadAll(businessData));
  }
  else {
    return console.log("Get All Business Thunk Error");
  }
  return businessData;
};

export const getCurrentUserBusinesses = () => async (dispatch) => {
  const response = await fetch("/api/businesses/current");
  const businessData = await response.json();

  if (response.ok) {
    dispatch(loadCurrent(businessData));
  }
  else {
    return console.log("Get Current User Businesses Thunk Error")
  }
  return businessData;
};

export const getSingleBusiness = (business) => async (dispatch) => {
  const response = await fetch(`/api/businesses/${business.id}`);
  const singleBusinessData = await response.json();

  if (response.ok) {
    dispatch(loadOne(singleBusinessData))
  }
  else {
    console.log("Get Single Business Thunk Error")
  }
  return singleBusinessData

}
