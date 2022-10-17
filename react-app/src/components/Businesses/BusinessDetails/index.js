import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleBusinessThunk } from '../../../store/business';
import { useParams, useHistory} from 'react-router-dom';

const BusinessDetails = () => {
    const dispatch = useDispatch();
    const businesses = useSelector(state => state.businesses);
    const params = useParams();
    const { businessId } = params;
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // let pause = businesses[businessId]
        // console.log('what the fuck', pause)
        console.log('Business Id', businessId)
        dispatch(getSingleBusinessThunk(businessId))
        .then(() => {setIsLoaded(true)})
        
    }, [dispatch, businessId ])


    return isLoaded && (
        
        <div>
            <h1> HELLO {businesses[businessId].business_name} </h1>
        </div>
    )

}

export default BusinessDetails;