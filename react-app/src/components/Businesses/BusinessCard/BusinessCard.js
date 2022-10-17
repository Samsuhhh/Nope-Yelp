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
    </div>
  )
}
