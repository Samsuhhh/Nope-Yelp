import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory, Link, useParams } from 'react-router-dom';
// import LogoutButton from '../../../../auth/LogoutButton';
import { getAllBusinessesThunk } from '../../../../../store/business';
import nope from '../../../../../assets/nope.png';
import magglass from '../../../../../assets/icons/mag-glass.png';
import * as sessionActions from "../../../../../store/session"
import Fuse from 'fuse.js'
// import emailicon from '../../../../../assets/icons/emailicon.svg'
import logouticon from '../../../../../assets/icons/logout.svg'
import userprofileicon from '../../../../../assets/icons/userprofile.svg'
import './BusinessNavBar.css'

const options = {
  findAllMatches: true,
  keys: [
    'tags.tag',
    { name: "business_name", weight: 2 },
    { name: "about", weight: .5 },
    { name: "city", weight: 2.5 }
  ],
  includeScore: true,
}

const BusinessNavBar = ({ setSearch }) => {
  const { businessId } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()
  const businesses = useSelector(state => state.businesses.allBusinesses)
  const [query, setQuery] = useState("")

  useEffect(() => {
    dispatch(getAllBusinessesThunk())
  }, [dispatch])


  const imageOnErrorHandler = (event) => {
    event.currentTarget.src = userprofileicon;
};
  // const fuse = new Fuse(Object.values(businesses), options)
  // const results = fuse.search(query)
  // const businessResults = results.map(result => result.item).slice(0, 15)

  function handleOnSearch({ target = {} }) {
    const { value } = target
    setQuery(value)
  }

  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    let businessResults;
    const fuse = new Fuse(Object.values(businesses), options)
    if (document.getElementById("search-input-field").value === "")  businessResults = Object.values(businesses)
    else if (document.getElementById("search-input-field").value === "San Francisco") {
      businessResults = Object.values(businesses).filter(business=> business.city === "San Francisco")
    }
    else if (document.getElementById("search-input-field").value === "New York") {
      businessResults = Object.values(businesses).filter(business=> business.city === "New York")
    }
    else if (document.getElementById("search-input-field").value === "Brooklyn") {
      businessResults = Object.values(businesses).filter(business=> business.city === "Brooklyn")
    }
    else {
      let results = fuse.search(document.getElementById("search-input-field").value).slice(0, 15)
       businessResults = results.map(result => result.item)
    }

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

    if (businessId) {
      history.push(`/businesses/${businessId}`)
    } else {
      history.push('/businesses/')
    }
  };
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div>
          {/* <>THIS IS A SPACER</> */}
        </div>
        <div></div>
        <div></div>
        <div id="for-businesses-button-business-navbar-logged">
          <NavLink to='/businesses/new' exact={true} activeClassName='active' id='login-nav-business-navbar'>
            For Businesses
          </NavLink>
        </div>
        <div >

          <>
            <div>
              <div id='menu-img-container'>
                <button id='menu-button' onClick={openMenu}>
                  <img
                    id='user-avatar-img'
                    src={`${sessionUser.userAvatar}`}
                    alt='avatar'
                    onError={imageOnErrorHandler}
                  />
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
                      <div>Log Out</div>
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
        <div className="business-nav-nav-bar-button-wrapper">
          <div id="business-nav-for-businesses-button">
            <NavLink to='/login' exact={true} activeClassName='active' id='business-nav-login-nav'>
              For Businesses
            </NavLink>
          </div>

          <div id="business-nav-write-a-review-button">
            <NavLink to='/login' exact={true} activeClassName='active' id='business-nav-login-nav'>
              Write a Review
            </NavLink>
          </div>

          <div id="business-nav-login-button">
            <NavLink to='/login' exact={true} activeClassName='active' id='business-nav-login-nav'>
              Login
            </NavLink>
          </div>

          <div id="business-nav-signup-button">
            <NavLink to='/sign-up' exact={true} activeClassName='active' id='business-nav-signup-nav'>
              Sign Up
            </NavLink>
          </div>
        </div>
      </>
    )

  }
  return (
    <div className="business-nav-navbar-wrapper">
      <nav className='business-nav-navbar'>
        <div>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img src={nope} id="logo" alt='logo img'></img>
          </NavLink>
        </div>
        <div></div>


        <div className="business-nav-search-wrapper">
          <div className="business-nav-search">
            <div className="business-nav-left-side">
              <form onSubmit={handleSearchSubmit}>

                <input type="business-nav-search" value={query} onChange={handleOnSearch} id="search-input-field" placeholder="tacos, cheap dinner, Max's" className="field request" />
                {/* <ul class="left-side__sublist">
                <li class="left-side__subitem" ><a  class="left-side__sublink restaraunts first">Restaurants</a></li>
                <li class="left-side__subitem"><a  class="left-side__sublink bar">Breakfast & Brunch</a></li>
                <li class="left-side__subitem"><a  class="left-side__sublink coffee">Coffee & tea</a></li>
                <li class="left-side__subitem"><a  class="left-side__sublink delivery">Delivery</a></li>
                <li class="left-side__subitem"><a  class="left-side__sublink takeout">Takeout</a></li>
                <li class="left-side__subitem"><a  class="left-side__sublink reservations">Reservations</a></li>
              </ul> */}
                <button className="business-nav-search-button-wrapper" type="submit" ><img id="mag" src={magglass} alt='submit img'></img></button>
              </form>

            </div>
          </div>
        </div>

        <div className="business-nav-right-side-nav-container">

          <>{sessionLinks}</>

        </div>
      </nav>
    </div>
  );
}

export default BusinessNavBar;



