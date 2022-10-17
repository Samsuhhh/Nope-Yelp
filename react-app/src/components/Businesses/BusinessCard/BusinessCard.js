import {Link} from "react-router-dom"
import './BusinessCard.css'
export default function BusinessCard(){
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "50px 300px", }}>
      {/* LEFT DIV START */}
      <div style={{ position: "fixed", left: "175px", top: "145px"}}>
        <h3>Filters</h3>
        <div style={{ fontSize: "0", paddingBottom: "30px", borderBottom: "1px solid lightgrey" }}>
          <button className="price-range-btn" id="price-range-btn-one">$</button>
          <button className="price-range-btn" id="price-range-btn-two">$$</button>
          <button className="price-range-btn" id="price-range-btn-three">$$$</button>
          <button className="price-range-btn" id="price-range-btn-four">$$$$</button>
        </div>
        <div id="checkbox-container">
          <h3>Suggested</h3>
          <label className='container'>
            <input  type="checkbox"></input> Tag 1
            <span className='checkmark'></span>
          </label>
          <label className='container'>
            <input  type="checkbox"></input> Tag 2
            <span className='checkmark'></span>
          </label>
          <label className='container'>
            <input  type="checkbox"></input> Tag 3
            <span className='checkmark'></span>
          </label>
          <label className='container'>
            <input  type="checkbox"></input> Tag 4
            <span className='checkmark'></span>
          </label>
        </div>
      </div>
      {/* MIDDLE DIV START */}
      <div id="center-div-container">

        <h3 style={{ paddingLeft: "20px" }}>All "search" Results in "City","State"</h3>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>

          <Link id='business-card-link'>
          <div style={{ display: "flex", width: "800px", height: "275px", justifyContent: "flex-start", alignItems: "center", borderBottom: "1px solid lightgrey", padding: "0px 20px"}}>
            <div>
              <img style={{ backgroundColor: "blue", width: "200px", height: "200px", borderRadius: "8px" }}></img>
            </div>
            <div style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", marginTop: "-65px" }}>
              <div id="business-card-business-name">Business Name</div>
              <div>Grumbles go here | avg rating (review count)</div>
              <div><button className="tag-button">Tag1</button>{" "}<button className="tag-button">Tag2</button>{" "}<button className="tag-button">Tag3</button>{" "}<span>$$ &#x2022;
              </span>{" "}<span>City</span></div>
              <br></br>
              <div>Some randoom comment here blah blah  blah blah blah blah blah blah blah blah blahblahblahblah blah  vv blah blah blah blah{" "}<Link id="more-link">more</Link></div>
            </div>
          </div>
          </Link>

        </div>

      </div>
      {/* MIDDLE DIV END */}
    </div>
  )
}
