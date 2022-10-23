import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import blurmap from '../../../assets/imgs/blurmap.png'
import './BusinessCard.css'
// import BusinessNavBar from "../BusinessDetails/Carousel/BusinessNavBar/BusinessNavBar"
// import Fuse from 'fuse.js'

import {
  StaticGoogleMap,
  Marker,
  // Path,
} from 'react-static-google-map';


import businessicon from '../../../assets/icons/business.svg'
import nopes5 from "../../../assets/nopes/5-nopes.png"
import nopes4 from "../../../assets/nopes/4-nopes.png"
import nopes3 from "../../../assets/nopes/3-nopes.png"
import nopes2 from "../../../assets/nopes/2-nopes.png"
import nopes1 from "../../../assets/nopes/1-nopes.png"
import nopes0 from "../../../assets/nopes/0-nopes.png"
import blacknope from "../../../assets/nopes/ratingimgblack.png"

export default function BusinessCard({ search }) {
  const [businessList, setBusinessList] = useState(null)


  useEffect(() => {
    setBusinessList(search)
  }, [search])


  const nopeRatingBar = (rating) => {
    if (rating > 4 && rating <= 5) return (nopes5)
    if (rating > 3 && rating <= 4) return (nopes4)
    if (rating > 2 && rating <= 3) return (nopes3)
    if (rating > 1 && rating <= 2) return (nopes2)
    if (rating > 0 && rating <= 1) return (nopes1)
    else return nopes0
  }
  const priceRange = e => {
    if (e === 4) return "$$$$"
    if (e === 3) return "$$$"
    if (e === 2) return "$$"
    if (e === 1) return "$"
  }

  let priceRange1 = Object.values(search).filter(business => {
    return business.price_range === 1
  })
  let priceRange2 = Object.values(search).filter(business => {
    return business.price_range === 2
  })
  let priceRange3 = Object.values(search).filter(business => {
    return business.price_range === 3
  })
  let priceRange4 = Object.values(search).filter(business => {
    return business.price_range === 4
  })

  let nope1 = Object.values(search).filter(business => {
    return business.review_average === 1
  })
  let nope2 = Object.values(search).filter(business => {
    return business.review_average === 2
  })
  let nope3 = Object.values(search).filter(business => {
    return business.review_average === 3
  })
  let nope4 = Object.values(search).filter(business => {
    return business.review_average === 4
  })
  let nope5 = Object.values(search).filter(business => {
    return business.review_average === 5
  })

  const resetFilter = Object.values(search)

  const imageOnErrorHandler = (event) => {
    event.currentTarget.src = businessicon;
  };

  if (!search.length) return (
    <div id='no-results-div'>
      <h1 className="no-results-search">No results for this search</h1>
    </div>

  )
  return (
    <>
      <div id="main-div-business-card">
        {/* LEFT DIV START */}
        <div id="left-div-business-card">
          <div id='filter-heading-div'>
            <h3>Filters</h3>

          </div>
          {/* <div>Price Range</div> */}
          <div id="price-range-container">
            <button
              className="price-range-btn"
              id="price-range-btn-one"
              onClick={(e) => {
                e.preventDefault()
                setBusinessList(priceRange1)
              }}
            >$
            </button>
            <button
              className="price-range-btn"
              id="price-range-btn-two"
              onClick={(e) => {
                e.preventDefault()
                setBusinessList(priceRange2)
              }}
            >$$
            </button>
            <button
              className="price-range-btn"
              id="price-range-btn-three"
              onClick={(e) => {
                e.preventDefault()
                setBusinessList(priceRange3)
              }}
            >$$$
            </button>
            <button
              className="price-range-btn"
              id="price-range-btn-four"
              onClick={(e) => {
                e.preventDefault()
                setBusinessList(priceRange4)
              }}
            >$$$$
            </button>
            {/* ------- FILTER BY REVIEW START ------- */}
            {/* <div id='or-filter'>
              <h4>OR</h4>
            </div> */}
          </div>
          {/* <h4>Suggested</h4> */}
          <div id='avg-rating-filter'>Avg. Rating</div>
          <div id='nope-filter-column-container'>

            <div className='button-nope-row'>
              <button className="nope-range-btn" id='nope-range-button-v2'
                onClick={(e) => {
                  e.preventDefault()
                  setBusinessList(nope1)
                }}
              >
              </button>
              <div>
                <img alt='black-filter-nope' className="filter-blackNope" src={blacknope} />
              </div>
            </div>
            <div className='button-nope-row'>
              <button className="nope-range-btn" id='nope-range-button-v2'
                onClick={(e) => {
                  e.preventDefault()
                  setBusinessList(nope2)
                }}
              >
              </button>
              <div>
                <img alt='black-filter-nope' className="filter-blackNope" src={blacknope} />
                <img alt='black-filter-nope' className="filter-blackNope" src={blacknope} />
              </div>
            </div>
            <div className='button-nope-row'>
              <button className="nope-range-btn" id='nope-range-button-v2'
                onClick={(e) => {
                  e.preventDefault()
                  setBusinessList(nope3)
                }}
              >
              </button>
              <div>
                <img alt='black-filter-nope' className="filter-blackNope" src={blacknope} />
                <img alt='black-filter-nope' className="filter-blackNope" src={blacknope} />
                <img alt='black-filter-nope' className="filter-blackNope" src={blacknope} />
              </div>
            </div>
            <div className='button-nope-row'>
              <button className="nope-range-btn" id='nope-range-button-v2'
                onClick={(e) => {
                  e.preventDefault()
                  setBusinessList(nope4)
                }}
              >
              </button>
              <div>
                <img alt='black-filter-nope' className="filter-blackNope" src={blacknope} />
                <img alt='black-filter-nope' className="filter-blackNope" src={blacknope} />
                <img alt='black-filter-nope' className="filter-blackNope" src={blacknope} />
                <img alt='black-filter-nope' className="filter-blackNope" src={blacknope} />
              </div>
            </div>
            <div className='button-nope-row'>
              <button className="nope-range-btn" id='nope-range-button-v2'
                onClick={(e) => {
                  e.preventDefault()
                  setBusinessList(nope5)
                }}
              >
              </button>
              <div>
                <img alt='black-filter-nope' className="filter-blackNope" src={blacknope} />
                <img alt='black-filter-nope' className="filter-blackNope" src={blacknope} />
                <img alt='black-filter-nope' className="filter-blackNope" src={blacknope} />
                <img alt='black-filter-nope' className="filter-blackNope" src={blacknope} />
                <img alt='black-filter-nope' className="filter-blackNope" src={blacknope} />
              </div>
            </div>
          </div>
          <button
            className="reset-filter-btn"
            onClick={(e) => {
              e.preventDefault()
              setBusinessList(resetFilter)
            }}
          >Reset Filter
          </button>
          {/* <div id="checkbox-container">
            <h3>Suggested</h3>
            <label className='container'>
              <input type="checkbox"></input> Tag 1
              <span className='checkmark'></span>
            </label>
            <label className='container'>
              <input type="checkbox"></input> Tag 2
              <span className='checkmark'></span>
            </label>
            <label className='container'>
              <input type="checkbox"></input> Tag 3
              <span className='checkmark'></span>
            </label>
            <label className='container'>
              <input type="checkbox"></input> Tag 4
              <span className='checkmark'></span>
            </label>
          </div> */}
        </div>
        {/* MIDDLE DIV START */}

        <div id="center-div-container">
          <div id="middle-div-list-container" >
            {!search.length && (
              <div id='no-results-div'>
                <h1 className="no-results-search">No results for this search</h1>
              </div>
            )}

            {!businessList?.length && (
              <div id="no-results-message">
                <h2>Looks like no businesses match your search</h2>
              </div>
            )}
            {!!businessList?.length && Object.values(businessList || search).map((business, i) => {
              let about = business.about
              business.about.length > 180 ? about = business.about.slice(0, 180) + "..." : about = business.about
              return (

                <Link id='business-card-link' to={`/businesses/${business.id}`}>
                  <div id="business-card-container">
                    <div id="business-card-img-div">
                      <img id="business-card-image"
                        alt="bizzie"
                        src={business.images.url}
                        onError={imageOnErrorHandler}
                      ></img>
                    </div>
                    <div id="business-card-text-container">
                      <div id="business-card-business-name">{business.business_name}</div>
                      <div id="business-card-nopes-review-average-div">
                        <div>
                          <img id='nopes' alt='nopes' style={{ height: "23px", width: "125px" }} src={nopeRatingBar(business.review_average)} ></img>
                        </div>
                        <div id="business-card-review-average-div">
                          <span >{business.review_average > 0 ? Math.ceil(business.review_average) : 'New' }</span>
                        </div>
                        <div id="business-card-grumble-count-div">({business.review_count > 0 ? business.review_count : '0'} {" "}{business.review_count > 1 || !business.review_count ? "Grumbles" : "Grumble"})</div>
                      </div>
                      <div><button className="tag-button">{business?.tags[0]?.tag}</button>{" "}<button className="tag-button">{business?.tags[1]?.tag}</button>{" "}
                        <button className="tag-button">{business?.tags[2]?.tag}</button>{" "}<span>{priceRange(business.price_range)} &#x2022;
                        </span>{" "}<span>{business.city}</span></div>
                      <br></br>

                      <div>"{about}"{" "}{business.about.length > 180 && (<Link id="more-link" to={`/businesses/${business.id}`}>more</Link>)}</div>

                    </div>
                  </div>
                </Link>
              )
            })}

          </div>

        </div>
        {/* MIDDLE DIV END */}
        {/* RIGHT DIV START */}

        <div id="blur-map-div" style={{ backgroundImage: `url(${blurmap})` }}>
          <div id="google-map-div">

            <StaticGoogleMap size="640x640" apiKey="AIzaSyDsfMhM3BfgOoK8lr6y1EzY-1b8JFQ49JU">
              <Marker
                location={{ lat: search[0].latitude, lng: search[0].longitude }}
                color="red"
                label="P"
              />
              {!!businessList?.length && Object.values(businessList || search).map((business, i) => {
                return (
                  <Marker
                    location={{ lat: business.latitude, lng: business.longitude }}
                    color="red"
                    label="P"
                  />
                )
              })}
            </StaticGoogleMap>

          </div>
        </div>



      </div>

    </>

  )
}
