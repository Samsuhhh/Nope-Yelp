
// Action Types
const LOAD_ALL = "businesses/LOAD_ALL";
const LOAD_CURRENT = "businesses/LOAD_CURRENT";
const LOAD_ONE = "businesses/LOAD_ONE";
const CREATE = "businesses/CREATE";
const UPDATE = "businesses/UPDATE";
const REMOVE = "businesses/DELETE";
const ADD_IMAGE = "businesses/IMAGE"

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

const addImage = businessId => ({
  type: ADD_IMAGE,
  businessId
})

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

  if (response.ok) {
    const businessData = await response.json();
    dispatch(loadAll(businessData));
    return businessData
  }
  else {
    console.log("-----Get Current User Businesses Thunk Error-----");
  }
  return;
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
  const response = await fetch("/api/businesses/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(business)
  });
  console.log('what is the response in the thunk?', response)

  if (response.ok) {
    const createdBusinessData = await response.json();
    dispatch(create(createdBusinessData));
    return createdBusinessData;
  }
  else {
    console.log("-----Create Business Thunk Error-----");
    return
  }
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

export const addBusinessImage = (data, businessId) => async (dispatch) => {
  const response = await fetch(`/api/businesses/${businessId}/images`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })

  if (response.ok) {
    const image = await response.json()
    dispatch(addImage(image))
    return image
  }
  else {
    console.log("----ERROR IN ADD IMAGE THUNK ACTION CREATOR----")
    return
  }
}

let initialState = {
  allBusinesses: {},
  singleBusiness: {}
}

const businessReducer = (state = initialState, action) => {
  let newState;
  const allBusinesses = {}
  switch (action.type) {
    case LOAD_ALL:
      console.log('Businesses Reducer HITTING', action)
      action.businesses.forEach(business => {
        allBusinesses[business.id] = business;
      })
      return {
        ...state,
        allBusinesses
      }
    case LOAD_CURRENT:
      action.bussinesses.forEach(business => {
        allBusinesses[business.id] = business;
      })
      return {
        ...state,
        allBusinesses
      }
    case LOAD_ONE:
      //   console.log('SINGLE business Reducer hitting', action.business)
      //   newState = { [action.business.id]: { ...action.business } }
      newState = { ...state, allBusinesses: { ...state.allBusinesses }, singleBusiness: { ...state.singleBusiness } }
      newState.singleBusiness = action.business
      return { ...newState }
    case CREATE:
      newState = { allBusinesses: { ...state.allBusinesses } }
      newState.singleBusiness = action.business
      newState.singleBusiness.Images = []
      return newState
    case ADD_IMAGE:
      newState = { singleBusiness: { ...state.singleBusiness } }
      newState.singleBusiness.Images = [...state.singleBusiness.Images, action.businessId.url]
      return newState
    case UPDATE:
      newState = { allBusinesses: { ...state.allBusinesses } }
      newState.singleBusiness = action.business
      newState.singleBusiness.Images = [...state.singleSpot.Images]
      return newState
    case REMOVE:
      newState = {
        allBusinesses: { ...state.allBusinesses },
        singleBusiness: { ...state.singleBusiness }
      }
      delete newState.allBusinesses[action.businessId]
      if (newState.singleBusiness.id === action.businessId) {
        newState.singleBusiness = {}
      }
      return newState
    default:
      return state
  }
}



export default businessReducer
