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

  const randomGreeting = [
    "Hangry?",
    "Food is easier to flirt with than people",
    "Hungry is an emotion and we understand that",
    "Not a morning person? We'll find a coffee shop near you",
    "What did the hungry computer eat? Chips. One byte at a time.",
    "What do you call a fake noodle. An impasta?",
    "What's orange and sounds like a parrot? A carrot.",
    "What do you call cheese that isn't yours? Nacho cheese."
  ]

  console.log(randomGreeting[Math.floor(Math.random()*(randomGreeting.length-1))])
  let businessCount = 0
  console.log(Math.floor(Math.random()*(randomGreeting.length-1)))
  Object.values(businesses).map(business => {
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
              <h4>{randomGreeting[Math.floor(Math.random()*(randomGreeting.length-1))]}</h4>
              <div id="user-actions-btn-container">
                <div className="dropdown-links">
                  <NavLink className="user-profile-navlink" to='/'>
                    <div className="user-action-btn home-btn-user-profile">Home</div>
                  </NavLink>
                </div>
                <div className="dropdown-links">
                  <NavLink className="user-profile-navlink" to={`/user-profile/reviews`}>
                    <div className="user-action-btn">My Reviews</div>
                  </NavLink >
                </div>
                <div className="dropdown-links">
                  <NavLink className="user-profile-navlink" to={`/user-profile/businesses`}>
                    <div className="user-action-btn">My Businesses</div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>
    </>
  )
}

export default UserProfile
