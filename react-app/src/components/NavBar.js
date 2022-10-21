
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory, Link } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { getAllBusinessesThunk } from '../store/business';
import * as sessionActions from "../store/session"
import nope from '../assets/nope-white.png';
import magglass from '../assets/icons/mag-glass.png';
import Fuse from 'fuse.js'
import BusinessCard from './Businesses/BusinessCard/BusinessCard';
import emailIcon from '../assets/icons/emailicon.svg'
import userprofileicon from '../assets/icons/userprofile.svg'
import logouticon from '../assets/icons/logout.svg'
const options = {
  findAllMatches: true,
  keys: [
    { name: "business_name", weight: 2 },
    { name: "about", weight: .5 },
    { name: "city", weight: 2.5 }
  ],
  includeScore: true,
}

const NavBar = ({ setSearch }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const businesses = useSelector(state => state.businesses.allBusinesses)
  const [query, setQuery] = useState("")

  useEffect(() => {
    dispatch(getAllBusinessesThunk())
  }, [dispatch])

  const fuse = new Fuse(Object.values(businesses), options)
  const results = fuse.search(query)
  const businessResults = results.map(result => result.item)

  function handleOnSearch({ target = {} }) {
    const { value } = target
    setQuery(value)
  }

  const handleSearchSubmit = async (e) => {
    e.preventDefault()


    const fuse = new Fuse(Object.values(businesses), options)
    const results = fuse.search(document.getElementById("search-input-field-business-list").value)
    const businessResults = results.map(result => result.item).slice(0, 15)
    setSearch(businessResults)
    return history.push("/businesses")
  }

  const sessionUser = useSelector(state => state.session.user)
  const [showMenu, setShowMenu] = useState(false);
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true)
  }

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };
  console.log("THIS IS user", sessionUser)
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div>
          {/* <>THIS IS A SPACER</> */}
        </div>
        <div id="for-businesses-button">
          <NavLink to='/businesses/new' exact={true} activeClassName='active' id='login-nav'>
            For Businesses
          </NavLink>
        </div>
        <div >

          <>
            <div >
              <div id='menu-img-container'>
                <button id='menu-button' onClick={openMenu}>
                  <img id='user-avatar-img' src={`${sessionUser.userAvatar}`} alt='rock' />
                </button>
              </div>
            </div>
            {showMenu &&
              <div id="dropdown-parent-container">
                <div id="dropdown-upper-div">
                  <div id="dropdown-sections">
                    <div className="dropdown-top-sections" id="profile-username">
                      Hello, {sessionUser.username}!
                    </div>
                    {/* <div className="dropdown-top-sections" id="dropdown-username">
                      {sessionUser.firstName}{" "}{sessionUser.lastName}
                    </div>
                    <div className="dropdown-top-sections" id="dropdown-email">
                      <img className='icon-img-asset' alt='email icon' src={emailicon} />
                      {sessionUser.email}
                    </div> */}
                  </div>
                  <div id="dropdown-links-container">
                    <Link id="about-link" to={`/user-profile/reviews`}>
                      <div className="dropdown-links" id="dropdown-links-business-navbar">
                        <img className='icon-img-asset' id="icon-img-business-navbar" alt='abt me' src={userprofileicon} />
                        <div>About Me</div>
                      </div>
                    </Link>
                    <div onClick={logout} className="dropdown-links" id="dropdown-links-business-navbar">
                      <img className='icon-img-asset' id="icon-img-business-navbar" alt='logout icon' src={logouticon} />
                      <div >Log Out</div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </>

        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div className="nav-bar-button-wrapper">
          <div id="for-businesses-button">
            <NavLink to='/login' exact={true} activeClassName='active' id='login-nav'>
              For Businesses
            </NavLink>
          </div>

          <div id="write-a-review-button">
            <NavLink to='/login' exact={true} activeClassName='active' id='login-nav'>
              Write a Review
            </NavLink>
          </div>

          <div id="login-button">
            <NavLink to='/login' exact={true} activeClassName='active' id='login-nav'>
              Login
            </NavLink>
          </div>

          <div id="signup-button">
            <NavLink to='/sign-up' exact={true} activeClassName='active' id='signup-nav'>
              Sign Up
            </NavLink>
          </div>
        </div>
      </>
    )

  }
  return (
    <nav className='navbar'>
      <div>
        <NavLink to='/' exact={true} activeClassName='active'>
          <img src={nope} id="logo"></img>
        </NavLink>
      </div>


      <div className="search-wrapper">
        <div class="search">
          <div class="left-side">
            <form onSubmit={handleSearchSubmit}>

              <input type="search" value={query} onChange={handleOnSearch} id="search-input-field-business-list" placeholder="tacos, cheap dinner, Max's" class="field request" />
              {/* <ul class="left-side__sublist">
                <li class="left-side__subitem" ><a  class="left-side__sublink restaraunts first">Restaurants</a></li>
                <li class="left-side__subitem"><a  class="left-side__sublink bar">Breakfast & Brunch</a></li>
                <li class="left-side__subitem"><a  class="left-side__sublink coffee">Coffee & tea</a></li>
                <li class="left-side__subitem"><a  class="left-side__sublink delivery">Delivery</a></li>
                <li class="left-side__subitem"><a  class="left-side__sublink takeout">Takeout</a></li>
                <li class="left-side__subitem"><a  class="left-side__sublink reservations">Reservations</a></li>
              </ul> */}
              <button className="search-button-wrapper" type="submit" ><img id="mag" src={magglass} ></img></button>
            </form>

          </div>
        </div>
      </div>

      <div className="right-side-nav-container">

        <>{sessionLinks}</>

      </div>
    </nav>
  );
}

export default NavBar;
