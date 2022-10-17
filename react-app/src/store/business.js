
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
export const getAllBusinessesThunk = () => async (dispatch) => {
  const response = await fetch("/api/businesses");
  const businessData = await response.json();

  if (response.ok) {
    console.log('Get All businesses Thunk data', businessData)
    await dispatch(loadAll(businessData));
  }
  else {
    console.log("-----Get All Business Thunk Error-----");
  }
  return businessData;
};

export const getCurrentUserBusinessesThunk = () => async (dispatch) => {
  const response = await fetch("/api/businesses/current");
  const businessData = await response.json();

  if (response.ok) {
    dispatch(loadCurrent(businessData));
  }
  else {
    console.log("-----Get Current User Businesses Thunk Error-----");
  }
  return businessData;
};

export const getSingleBusinessThunk = (businessId) => async (dispatch) => {
  const response = await fetch(`/api/businesses/${businessId}`);
  const singleBusinessData = await response.json();

  if (response.ok) {
    dispatch(loadOne(singleBusinessData));
  }
  else {
    console.log("-----Get Single Business Thunk Error-----");
  }
  return singleBusinessData;
}

export const createBusinessThunk = (business) => async (dispatch) => {
  const response = await fetch("/api/businesses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(business)
  });
  const createdBusinessData = await response.json();

  if (response.ok) {
    dispatch(create(createdBusinessData));
  }
  else {
    console.log("-----Create Business Thunk Error-----");
  }
  return createdBusinessData;
}

export const updateBusinessThunk = (business) => async (dispatch) => {
  const response = await fetch(`/api/businesses/${business.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(business)
  });
  const updatedBusinessData = await response.json();

  if (response.ok) {
    dispatch(update(updatedBusinessData));
  }
  else {
    console.log("-----Updated Business Thunk Error-----");
  }
  return updateBusinessThunk;
}

export const deleteBusinessThunk = (businessId) => async (dispatch) => {
  const response = await fetch(`/api/businesses/${businessId}`,
    { method: "DELETE" });

  const deletedBusinessData = await response.json();

  if (response.ok) {
    dispatch(remove(deletedBusinessData));
  }
  else {
    console.log("------Delete Business Thunk Error-----");
  }
  return deletedBusinessData;
}

let initialState = {}

const businessReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD_ALL:
      console.log('Businesses Reducer HITTING', action)
      action.businesses.forEach(business => {
        newState[business.id] = business;
      })
      return newState
    case LOAD_ONE:
      console.log('SINGLE business Reducer hitting', action.business)
      newState = { [action.business.id]: { ...action.business } }
      return newState


    default:
      return initialState
  }
}



export default businessReducer
