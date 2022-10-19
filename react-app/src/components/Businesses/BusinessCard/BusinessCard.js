import { Link } from "react-router-dom"
import './BusinessCard.css'

import nopes5 from "../../../assets/nopes/5-nopes.png"
import nopes4 from "../../../assets/nopes/4-nopes.png"
import nopes3 from "../../../assets/nopes/3-nopes.png"
import nopes2 from "../../../assets/nopes/2-nopes.png"
import nopes1 from "../../../assets/nopes/1-nopes.png"
import nopes0 from "../../../assets/nopes/0-nopes.png"

export default function BusinessCard({ search }) {
  console.log("Search working in business card", Object.values(search))

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
  if (!search.length) return (<h1>No results for this search</h1>)
  return (
    <div id="main-div-business-card">
      {/* LEFT DIV START */}
      <div id="left-div-business-card">
        <h3>Filters</h3>
        <div id="price-range-container">
          <button className="price-range-btn" id="price-range-btn-one">$</button>
          <button className="price-range-btn" id="price-range-btn-two">$$</button>
          <button className="price-range-btn" id="price-range-btn-three">$$$</button>
          <button className="price-range-btn" id="price-range-btn-four">$$$$</button>
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
        {Object.values(search).map((business, i) => {
          return (

          <Link id='business-card-link' to={`/businesses/${business.id}`}>
            <div id="business-card-container">
              <div>
                <img id="business-card-image" alt="" src={business.images.url}></img>
              </div>
              <div id="business-card-text-container">
                <div id="business-card-business-name">{business.business_name}</div>
                <div>
                <img id='nopes' alt='nopes' style={{height:"23px", width:"125px"}}src={nopeRatingBar(business.review_average)} ></img><span >{" "}{business.review_average}</span>
                </div>
                <div>Grumbles{" "}({business.review_count})</div>
                <div><button className="tag-button">Tag1</button>{" "}<button className="tag-button">Tag2</button>{" "}
                <button className="tag-button">Tag3</button>{" "}<span>{priceRange(business.price_range)} &#x2022;
                </span>{" "}<span>{business.city}</span></div>
                <br></br>
                <div>{business.about}{" "}<Link id="more-link" to={`/adhgaeg`}>more</Link></div>
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
  )
}
