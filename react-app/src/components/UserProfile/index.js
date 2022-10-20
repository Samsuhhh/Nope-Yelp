import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import React from 'react'
import './UserProfile.css'
import CurrentUserReviews from "../Reviews/CurrentUserReviews"

const UserProfile = () => {
  const user = useSelector(state => state.session.user)
  console.log(user)
  return (
    <div id="entire-page-container">
      <div id="left-page-container">
        <img id="user-profile-pic" src={user.userAvatar}></img>
      </div>
      <div id="middle-page-conatiner">
        <h1>{user.firstName} {user.lastName}</h1>
        <CurrentUserReviews  />
      </div>

    </div>
  )
}

export default UserProfile
