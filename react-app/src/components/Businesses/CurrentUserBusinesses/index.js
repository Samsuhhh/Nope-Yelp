import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCurrentUserBusinessesThunk } from "../../../store/business";
import nopes5 from "../../../assets/nopes/5-nopes.png"
import nopes4 from "../../../assets/nopes/4-nopes.png"
import nopes3 from "../../../assets/nopes/3-nopes.png"
import nopes2 from "../../../assets/nopes/2-nopes.png"
import nopes1 from "../../../assets/nopes/1-nopes.png"
import nopes0 from "../../../assets/nopes/0-nopes.png"
import './CurrentUserBusinesses.css'

const CurrentUserBusinesses = ({ businesses }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  // const businesses = useSelector(state=> state.bussinesses.allBusinesses)
  const priceRange = e => {
    if (e === 4) return "$$$$"
    if (e === 3) return "$$$"
    if (e === 2) return "$$"
    if (e === 1) return "$"
  }
  const nopeRatingBar = (rating) => {
    if (rating > 4 && rating <= 5) return (nopes5)
    if (rating > 3 && rating <= 4) return (nopes4)
    if (rating > 2 && rating <= 3) return (nopes3)
    if (rating > 1 && rating <= 2) return (nopes2)
    if (rating > 0 && rating <= 1) return (nopes1)
    else return nopes0
  }
  return (
    <>
      {Object.values(businesses).map(business => {
        // let about = business.about
        // business.about.length > 180 ? about = business.about.slice(0, 180) + "..." : about = business.about
        if (business.owner_id === user.id) return (

          <NavLink id='business-card-link' to={`/businesses/${business.id}`}>
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

              <div>"{business.about.length > 180 ? business.about = business.about.slice(0, 180) + "..." : business.about = business.about}"{" "}{business.about.length > 180 && (<NavLink id="more-link" to={`/businesses/${business.id}`}>more</NavLink>)}</div>

            </div>
          </div>
        </NavLink>

        )
      })}

    </>
  )

}


export default CurrentUserBusinesses
