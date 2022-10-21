import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import React from 'react'
import './UserProfile.css'
import CurrentUserReviews from "../Reviews/CurrentUserReviews"

const UserProfile = () => {
  const user = useSelector(state => state.session.user)
  const reviews= useSelector(state=> state.reviews.user)
  console.log(reviews)
  return (
    <div id="entire-page-container">
     
      <div id="middle-page-conatiner">
        <div id="user-information-div">
          <img id="user-profile-pic" src={user.userAvatar}></img>
          <div>
          <h1>{user.firstName} {user.lastName}</h1>
          <h4>{Object.values(reviews).length} reviews</h4>
          </div>
        </div>
        <CurrentUserReviews />
      </div>

    </div>
  )
}

export default UserProfile
