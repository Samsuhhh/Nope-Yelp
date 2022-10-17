import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleBusinessThunk } from '../../../store/business';
import { useParams, useHistory } from 'react-router-dom';
import './BusinessDetails.css'

const BusinessDetails = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const { businessId } = params;
    const business = useSelector(state => state.businesses[businessId]);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // let pause = businesses[businessId]
        // console.log('what the fuck', pause)
        console.log('Business Id', businessId)
        dispatch(getSingleBusinessThunk(businessId))
            .then(() => { setIsLoaded(true) })

    }, [dispatch, businessId])


    return isLoaded && (
        <div id='business-details-page'>
            <div id='business-details-header-images'>
                <div id='business-details-header-content'>
                    <div id='business-details-header-info-container'>
                        <div id='business-details-logo'>
                            <span>BUSINESS LOGO IMG</span>
                        </div>
                        <div id='business-details-info'>
                            <div>{business.business_name}</div>
                        </div>
                    </div>
                    <button id='all-photos-button'>All Photos</button>
                </div>
            </div>
            <div id='business-details-container'>
                <div id='details-content'>
                    <div id='business-details-action-buttons'>
                        <button>Write a Review</button>
                        <button>Add a photo </button>
                    </div>
                    <section id='business-details-amenities'></section>
                    <section id='business-details-about-container'>
                        <div> <h1>About the Business</h1> </div>
                        <div id='about-content'>
                            <div id='business-details-owner-avatar'></div>
                            <div id='owner-name-title-div-column'>
                                <div id='business-details-owner-name'></div>
                                <div id='business-details-owner-title'></div>
                            </div>
                        </div>
                        <div> {business.about}</div>
                    </section>
                </div>
                <div id='sticky-sidebar-container'>
                    <div id='sticky-sidebar-content'>
                        {business.website}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BusinessDetails;