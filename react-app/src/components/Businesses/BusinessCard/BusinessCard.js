import { Link } from "react-router-dom"
import './BusinessCard.css'
export default function BusinessCard({ search }) {
  console.log("Search working", Object.values(search))

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

          <Link id='business-card-link'>
            <div style={{ display: "flex", width: "800px", height: "275px", justifyContent: "flex-start", alignItems: "center", borderBottom: "1px solid lightgrey", padding: "0px 20px" }}>
              <div>
                <img src={business.images.url} style={{ width: "200px", height: "200px", borderRadius: "8px" }}></img>
              </div>
              <div style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", marginTop: "-65px" }}>
                <div id="business-card-business-name">{business.business_name}</div>
                <div>Nopes:{Math.floor(business.review_average)} | Grumbles:{business.review_count}</div>
                <div><button className="tag-button">Tag1</button>{" "}<button className="tag-button">Tag2</button>{" "}<button className="tag-button">Tag3</button>{" "}<span>$$ &#x2022;
                </span>{" "}<span>{business.city}</span></div>
                <br></br>
                <div>{business.about}{" "}<Link id="more-link">more</Link></div>
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
