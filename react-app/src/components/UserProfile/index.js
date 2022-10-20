import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import React from 'react'
import './UserProfile.css'


const UserProfile = () => {
  const user = useSelector(state => state.session.user)
  console.log(user)
  return (
    <div>
      <img src={user.userAvatar}></img>
    </div>
  )
}

export default UserProfile
