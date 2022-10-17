
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import nope from '../assets/nope-white.png';
import magglass from '../assets/icons/mag-glass.png';
import { useSelector } from 'react-redux';


const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)
  const [showMenu, setShowMenu] = useState(false);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </div>

        <div>
          <LogoutButton />
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
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
            <input type="text" placeholder="tacos, cheap dinner, Max's" class="field request"></input>
            <ul class="left-side__sublist">
              <li class="left-side__subitem"><a href="#" class="left-side__sublink restaraunts first">Restaurants</a></li>
              <li class="left-side__subitem"><a href="#" class="left-side__sublink coffee">Coffee & tea</a></li>
              <li class="left-side__subitem"><a href="#" class="left-side__sublink delivery">Delivery</a></li>
              <li class="left-side__subitem"><a href="#" class="left-side__sublink takeout">Takeout</a></li>
              <li class="left-side__subitem"><a href="#" class="left-side__sublink reservations">Reservations</a></li>
            </ul>

          </div>
          <a href="javascript.void(0);">
          <div className="search-button-wrapper">
            <img id="mag" src={magglass} />
          </div>
          </a>
        </div>
      </div>

      <div className="right-side-nav-container">

        <>{sessionLinks}</>

      </div>
    </nav>
  );
}

export default NavBar;
