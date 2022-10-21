import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import './BusinessCard.css'
import BusinessNavBar from "../BusinessDetails/Carousel/BusinessNavBar/BusinessNavBar"
import Fuse from 'fuse.js'
import nopes5 from "../../../assets/nopes/5-nopes.png"
import nopes4 from "../../../assets/nopes/4-nopes.png"
import nopes3 from "../../../assets/nopes/3-nopes.png"
import nopes2 from "../../../assets/nopes/2-nopes.png"
import nopes1 from "../../../assets/nopes/1-nopes.png"
import nopes0 from "../../../assets/nopes/0-nopes.png"

export default function BusinessCard({ search }) {
  const [businessList, setBusinessList] = useState(search)


  console.log("Search working in business card", search)
  console.log("businessList", businessList)


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
  console.log("filter 1 hitting ", priceRange1)
  console.log("filter 2 hitting ", priceRange2)
  console.log("filter 3 hitting ", priceRange3)
  console.log("filter 4 hitting ", priceRange4)
  useEffect(()=> {
    for (let i = 0; i<1000000; i++) {

    }
  }, [search])
  if (!search.length) return (<h1>No results for this search</h1>)
  return (
    <>

    <div id="main-div-business-card">
      {/* LEFT DIV START */}
      <div id="left-div-business-card">
        <h3>Filters</h3>
        <div id="price-range-container">
          <button
            className="price-range-btn"
            id="price-range-btn-one"
            onClick={(e)=>{
              e.preventDefault()
              setBusinessList(priceRange1)
            }}
          >$
          </button>
          <button
            className="price-range-btn"
            id="price-range-btn-two"
            onClick={(e)=>{
              e.preventDefault()
              setBusinessList(priceRange2)
            }}
          >$$
          </button>
          <button
            className="price-range-btn"
            id="price-range-btn-three"
            onClick={(e)=>{
              e.preventDefault()
              setBusinessList(priceRange3)
            }}
          >$$$
          </button>
          <button
            className="price-range-btn"
            id="price-range-btn-four"
            onClick={(e)=>{
              e.preventDefault()
              setBusinessList(priceRange4)
            }}
          >$$$$
          </button>
        </div>
        <div id="checkbox-container">
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
        </div>
      </div>
      {/* MIDDLE DIV START */}

      <div id="center-div-container">

        <h3 style={{ paddingLeft: "20px" }}>All Results</h3>
        <div id="middle-div-list-container">
          {Object.values(businessList||search).map((business, i) => {
            let about = business.about
            business.about.length > 180 ? about = business.about.slice(0, 180) + "..." : about = business.about
            return (

              <Link id='business-card-link' to={`/businesses/${business.id}`}>
                <div id="business-card-container">
                  <div id="business-card-img-div">
                    <img id="business-card-image" alt="" src={business.images.url}></img>
                  </div>
                  <div id="business-card-text-container">
                    <div id="business-card-business-name">{business.business_name}</div>
                    <div id="business-card-nopes-review-average-div">
                      <div>
                        <img id='nopes' alt='nopes' style={{ height: "23px", width: "125px" }} src={nopeRatingBar(business.review_average)} ></img>
                      </div>
                      <div id="business-card-review-average-div">
                        <span >{business.review_average}</span>
                      </div>
                      <div id="business-card-grumble-count-div">({business.review_count} {" "}{business.review_count > 1 ? "Grumbles" : "Grumble"})</div>
                    </div>
                    <div><button className="tag-button">Tag1</button>{" "}<button className="tag-button">Tag2</button>{" "}
                      <button className="tag-button">Tag3</button>{" "}<span>{priceRange(business.price_range)} &#x2022;
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
      <div>Map Will Go Here...eventually</div>
    </div>
          </>

  )
}
