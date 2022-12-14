
// Action Types
const LOAD_ALL = "businesses/LOAD_ALL";
const LOAD_CURRENT = "businesses/LOAD_CURRENT";
const LOAD_ONE = "businesses/LOAD_ONE";
const CREATE = "businesses/CREATE";
const UPDATE = "businesses/UPDATE";
const REMOVE = "businesses/DELETE";
const ADD_IMAGE = "businesses/IMAGE"
const RESET = 'businesses/RESET'
const REMOVE_IMAGE = "images/DELETE"

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

const removeImage = imageId => ({
  type: REMOVE_IMAGE,
  imageId
})

export const resetBusiness = () => ({
  type: RESET,
})

// THUNK action creators
export const getAllBusinessesThunk = () => async (dispatch) => {
  const response = await fetch("/api/businesses/");

  if (response.ok) {
    const businessData = await response.json();
    await dispatch(loadAll(businessData));
    return businessData
  }
  return;
};

export const getCurrentUserBusinessesThunk = () => async (dispatch) => {
  const response = await fetch("/api/businesses/current");

  if (response.ok) {
    const businessData = await response.json();
    dispatch(loadAll(businessData));
    return businessData
  }
  return;
};

export const getSingleBusinessThunk = (businessId) => async (dispatch) => {
  const response = await fetch(`/api/businesses/${businessId}`);

  if (response.ok) {
    const singleBusinessData = await response.json();
    dispatch(loadOne(singleBusinessData));
    return
  }
  return
}

export const createBusinessThunk = (business) => async (dispatch) => {
  const response = await fetch("/api/businesses/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(business)
  });

  if (response.ok) {
    const createdBusinessData = await response.json();
    dispatch(create(createdBusinessData));
    return createdBusinessData;
  }
  return
}

export const updateBusinessThunk = (business, businessId) => async (dispatch) => {
  const response = await fetch(`/api/businesses/${businessId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(business)
  });

  if (response.ok) {
    const updatedBusinessData = await response.json();
    dispatch(update(updatedBusinessData));
    return updatedBusinessData;
  }
  return
}

export const deleteBusinessThunk = (businessId) => async (dispatch) => {
  const response = await fetch(`/api/businesses/${businessId}`, {
    method: "DELETE"
  });

  if (response.ok) {
    const deletedBusinessData = await response.json();
    dispatch(remove(deletedBusinessData));
    return
  }
  return;
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
  return
}

export const removeBusinessImage = (imageId) => async (dispatch) => {
  const response = await fetch(`/api/businesses/images/${imageId}`, {
    method: "DELETE"
  })

  if (response.ok) {
    dispatch(removeImage(imageId))
    return
  }
  return
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
      newState = { ...state, allBusinesses: { ...state.allBusinesses }, singleBusiness: { ...state.singleBusiness } }
      newState.singleBusiness = action.business
      return { ...newState }
    case CREATE:
      newState = { allBusinesses: { ...state.allBusinesses } }
      newState.singleBusiness = action.business
      newState.singleBusiness.BusinessImages = []
      return newState
    case ADD_IMAGE:
      newState = { allBusinesses: { ...state.allBusinesses }, singleBusiness: { ...state.singleBusiness } }
      newState.singleBusiness.BusinessImages = [...state.singleBusiness.BusinessImages, action.businessId.url]
      return newState
    case UPDATE:
      newState = { allBusinesses: { ...state.allBusinesses } }
      newState.singleBusiness = action.business
      newState.singleBusiness.BusinessImages = [...state.singleBusiness.BusinessImages]
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
    case REMOVE_IMAGE:
      newState = {
        ...state,
        allBusinesses: { ...state.allBusinesses },
        singleBusiness: { ...state.singleBusiness }
      }
      const businessImages = newState.singleBusiness.BusinessImages
      for (let i = 0; i < businessImages.length; i++) {
        if (businessImages[i].id === action.imageId) {
          businessImages.splice(i, 1)
        }
      }
      // return {...newState} should we spread the new state?
      return newState
    case RESET:
      return initialState
    default:
      return state
  }
}



export default businessReducer
