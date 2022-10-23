import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import React from 'react'
import './UserProfile.css'
import CurrentUserReviews from "../Reviews/CurrentUserReviews"
import CurrentUserBusinesses from "../Businesses/CurrentUserBusinesses"

import userProfile from "../../assets/icons/userprofile.svg"

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
    "What do you call cheese that isn't yours? Nacho cheese.",
    "What do you call a fake noodle? An impasta.",
    "What did the baby corn say to its mom? Where’s my popcorn?",
    "Why couldn’t the sesame seed leave the gambling casino? Because he was on a roll.",
    "What does a nosey pepper do? Gets jalapeño business.",
    "What’s orange and sounds like a parrot? A carrot.",
    "When potatoes have babies, what are they called? Tater tots.",
    "How fast is milk? It’s pasteurized before you know it.",
    "How do you make an apple turnover? Push it downhill.",
    "What kind of socks do you need to plant asparagus? Garden hose.",
    "Why did the skeleton go to the barbecue? To get another rib.",
    "What did the pecan say to the walnut? We’re friends because we’re both nuts.",
    "Where did the broccoli go to have a few drinks? The salad bar.",
    "What did one blueberry say to the other blueberry? If you weren’t so sweet, we wouldn’t be in this jam.",
    "What do you call cheese that is not ours? Nacho cheese.",
    "Wanna hear a joke about pizza? Never mind, it’s too cheesy.",
    "What’s the best way to burn vegetables? Roast them.",
    "Which condiment adds the most kick? Horseradish.",
    "Why are butchers so hilarious? They always ham it up.",
    "Which friends should you take to dinner? Your taste buds.",
    "What should you do if your soup is too hot? Add a chilly pepper.",
    "What part of a meal makes you the most sleepy? A nap-kin.",
    "What’s an omnivore’s favorite food? Zoo-chini.",
    "When is eating just like school? When you have three or four courses.",
    "Why did the butcher work extra hours at the shop? To make ends meat.",
    "What do you call blueberries playing the guitar? A jam session.",
    "What’s the most relaxing type of pasta? Spa-ghetti.",
    "How do you truly savor a hot dog? With relish."
  ]

  console.log(randomGreeting[Math.floor(Math.random() * (randomGreeting.length - 1))])
  let businessCount = 0
  console.log(Math.floor(Math.random() * (randomGreeting.length - 1)))
  Object.values(businesses).map(business => {
    if (business.owner_id === user.id) businessCount++
    return businessCount
  })

  const imgOnLoadHandler = (e) => {
    if (e.currentTarget.className !== "error"){
      console.log('img loaded successfully!')
    }
  }
  const imgOnErrorHandler = (event) => {
    event.currentTarget.src = userProfile;
  }

  return (
    <>
      <div id="grey-background"></div>
      <div id="entire-page-container">
        <div id="middle-page-conatiner">
          <div id="user-information-div">
            <img
            src={user.userAvatar}
            id="user-profile-pic" 
            alt='user profile' 
            onLoad={imgOnLoadHandler}
            onError={imgOnErrorHandler}
            />
          <div>
            <h1>{user.firstName} {user.lastName}</h1>
            <h4>{user.email}</h4>
            <h4>{randomGreeting[Math.floor(Math.random() * (randomGreeting.length - 1))]}</h4>
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
