import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import React from 'react'
import './UserProfile.css'
import CurrentUserReviews from "../Reviews/CurrentUserReviews"

const UserProfile = () => {
  const user = useSelector(state => state.session.user)
  const reviews = useSelector(state => state.reviews.user)
  const businesses = useSelector(state => state.businesses.allBusinesses)



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
              <h4>{Object.values(reviews).length} reviews {Object.values(businesses).length}</h4>
              <div>
                <span>My Reviews</span>
                <span>My Businesses</span>
              </div>
            </div>
          </div>

          <CurrentUserReviews />
        </div>

      </div>
    </>
  )
}

export default UserProfile
