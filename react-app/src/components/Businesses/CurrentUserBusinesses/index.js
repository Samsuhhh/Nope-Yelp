import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllBusinessesThunk } from "../../../store/business";
import nopes5 from "../../../assets/nopes/5-nopes.png"
import nopes4 from "../../../assets/nopes/4-nopes.png"
import nopes3 from "../../../assets/nopes/3-nopes.png"
import nopes2 from "../../../assets/nopes/2-nopes.png"
import nopes1 from "../../../assets/nopes/1-nopes.png"
import nopes0 from "../../../assets/nopes/0-nopes.png"
import editicon from '../../../assets/icons/edit-pen.svg'
import businessicon from '../../../assets/icons/business.svg'
import './CurrentUserBusinesses.css'

const CurrentUserBusinesses = () => {
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

  const imageOnErrorHandler = (event) => {
    event.currentTarget.src = businessicon;
  };

  useEffect(() => {
    dispatch(getAllBusinessesThunk())
  }, [dispatch])
  const businesses = useSelector(state=> state.businesses.allBusinesses)
  const userBusinesses =Object.values(businesses).filter(business=> business.owner_id===user.id)

  if (userBusinesses === undefined || !Object.values(userBusinesses).length){
    return <div id="no-listings-message">You haven't hosted any listings yet</div>
  } else return (
    <>
    <div id="business-list-curr-user-master-container">

      {Object.values(businesses).map(business => {
        // let about = business.about
        // business.about.length > 180 ? about = business.about.slice(0, 180) + "..." : about = business.about
        if (business.owner_id === user.id) return (

          <div id="business-card-current-user-reviews" key={business.id}>
            <NavLink id="business-navlink-card" to={`/businesses/${business?.id}`}>
            <div id="review-list-container-current-reviews">
              <div id="text-container-current-reviews">

                <img
                alt='business img'
                id="current-user-reviews-business-img"
                src={business?.images?.url}
                onError={imageOnErrorHandler}
                ></img>
              </div>
              <div id="business-information-container-current-user-reviews">
              <NavLink id="business-name-navlink-current-user-businesses"to={`/businesses/${business?.id}`}>
                <div id="business-name-current-user-businesses">{business?.business_name}</div>
                </NavLink>
                <div>{priceRange(business?.price_range)}</div>
                <div>{business?.street_address}</div>
                <div>{business?.city}, {business?.state}{" "}{business?.zipcode}</div>
              </div>
            </div>
            <div id="review-body-container-current-user-reviews">
              <div id="nopes-date-container-container-user-reviews">
                <img id='nopes' alt='plsno' src={nopeRatingBar(business.review_average)} />

              </div>
              <div id="review-body-text-current-user-reviews">{business.about}</div>

              <div id="review-actions-current-user-reviews">
                <div>
                  <NavLink to={`/businesses/${business?.id}`}>

                    <button id="edit-review-btn-current-user-reviews" >
                      <img className="current-user-review-action-btns" alt='edit me' src={editicon}>
                      </img>
                    </button>
                  </NavLink>
                </div>

              </div>

            </div>
            </NavLink>
          </div>
        )
      })}
      </div>

    </>
  )

}


export default CurrentUserBusinesses
