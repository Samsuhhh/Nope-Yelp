import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../../../../auth/LogoutButton';
import { getAllBusinessesThunk } from '../../../../../store/business';
import nope from '../../../../../assets/nope.png';
import magglass from '../../../../../assets/icons/mag-glass.png';
import Fuse from 'fuse.js'
import './BusinessNavBar.css'

const options = {
    findAllMatches: true,
    keys: [
        "business_name",
        "about"
    ],
    includeScore: true
}

const BusinessNavBar = ({ setSearch }) => {
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
        console.log("is this even hitting", document.getElementById("search-input-field").value)

        const fuse = new Fuse(Object.values(businesses), options)
        const results = fuse.search(document.getElementById("search-input-field").value)
        const businessResults = results.map(result => result.item)
        // console.log("fuse results",businessResults)
        setSearch(businessResults)
        return history.push("/businesses")
    }

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
                        <img src={nope} id="logo"></img>
                    </NavLink>
                </div>
                <div></div>


                <div className="business-nav-search-wrapper">
                    <div class="business-nav-search">
                        <div class="business-nav-left-side">
                            <form onSubmit={handleSearchSubmit}>

                                <input type="business-nav-search" value={query} onChange={handleOnSearch} id="search-input-field" placeholder="tacos, cheap dinner, Max's" class="field request" />
                                {/* <ul class="left-side__sublist">
                <li class="left-side__subitem" ><a  class="left-side__sublink restaraunts first">Restaurants</a></li>
                <li class="left-side__subitem"><a  class="left-side__sublink bar">Breakfast & Brunch</a></li>
                <li class="left-side__subitem"><a  class="left-side__sublink coffee">Coffee & tea</a></li>
                <li class="left-side__subitem"><a  class="left-side__sublink delivery">Delivery</a></li>
                <li class="left-side__subitem"><a  class="left-side__sublink takeout">Takeout</a></li>
                <li class="left-side__subitem"><a  class="left-side__sublink reservations">Reservations</a></li>
              </ul> */}
                                <button className="business-nav-search-button-wrapper" type="submit" ><img id="mag" src={magglass} ></img></button>
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