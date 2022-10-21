import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import React from 'react'
import './UserProfile.css'
import CurrentUserReviews from "../Reviews/CurrentUserReviews"
import CurrentUserBusinesses from "../Businesses/CurrentUserBusinesses"
const UserProfile = () => {
  const user = useSelector(state => state.session.user)
  const reviews = useSelector(state => state.reviews.user)
  const businesses = useSelector(state => state.businesses.allBusinesses)

  let businessCount = 0

  Object.values(businesses).map(business =>{
    if (business.owner_id === user.id) businessCount++
    return businessCount
  })



  return (
    <>
      <div id="grey-background"></div>
      <div id="entire-page-container">
        <div id="middle-page-conatiner">
          <div id="user-information-div">
            <img id="user-profile-pic" src={user.userAvatar}></img>
            <div>
              <h1>{user.firstName} {user.lastName}</h1>
              <h4>{user.email}</h4>
              <h4>{Object.values(reviews).length} Reviews | {businessCount} Businesses</h4>
              <div>
                <span>
                  <NavLink to={`/user-profile/reviews`}>

                  <button>My Reviews</button>
                  </NavLink >
                  </span>
                <span>
                  <NavLink to={`/user-profile/businesses`}>

                  <button>My Businesses</button>
                  </NavLink>
                </span>
              </div>
            </div>
          </div>


        </div>

      </div>
    </>
  )
}

export default UserProfile
