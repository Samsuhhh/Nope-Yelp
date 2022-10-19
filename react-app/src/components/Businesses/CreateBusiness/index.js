import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createBusinessThunk } from '../../../store/business'
import './CreateBusiness.css'

const CreateBusiness = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector(state => state.session.user)

    const [businessName, setBusinessName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [zipcode, setZipcode] = useState(11111)
    const [state, setState] = useState('')
    const [about, setAbout] = useState('')
    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)
    const [priceRange, setPriceRange] = useState('')
    const [website, setWebsite] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [tags, setTags] = useState([])
    const [validationErrors, setValidationErrors] = useState([])
    const [showErrors, setShowErrors] = useState(false)

    const updateBusinessName = (e) => setBusinessName(e.target.value)
    const updateEmail = (e) => setEmail(e.target.value)
    const updatePhone = (e) => setPhone(e.target.value)
    const updateStreetAddress = (e) => setStreetAddress(e.target.value)
    const updateCity = (e) => setCity(e.target.value)
    const updateZipcode = (e) => setZipcode(e.target.value)
    const updateState = (e) => setState(e.target.value)
    const updateAbout = (e) => setAbout(e.target.value)
    const updateLongitude = (e) => setLongitude(e.target.value)
    const updateLatitude = (e) => setLatitude(e.target.value)
    const updatePriceRange = (e) => setPriceRange(e.target.value)
    const updateWebsite = (e) => setWebsite(e.target.value)
    const updateImgUrl = (e) => setImgUrl(e.target.value)
    // MIGHT NEED ONE FOR TAGS? NOT SURE YET
    // const updateTags = (e) => setTags(e.target.value)

    // NEED TO ADD MORE VALIDATION ERRORS
    useEffect(() => {
        const errors = []
        if (isNaN(longitude) || longitude < -180 || longitude > 180) errors.push("Longitude must be a number between -180 and 180")
        if (isNaN(latitude) || latitude < -90 || latitude > 90) errors.push("Latitude must be a number between -90 and 90")
        setValidationErrors(errors)
    }, [businessName, email, phone, streetAddress, city, zipcode, state,
        about, longitude, latitude, priceRange, website, imgUrl, tags])
    const handleSubmit = async (e) => {
        e.preventDefault()
        setShowErrors(true)

        if (!validationErrors.length) {
            const business = {
                business_name: businessName,
                email,
                phone,
                street_address: streetAddress,
                city,
                zipcode,
                state,
                about,
                longitude,
                latitude,
                price_range: Number(priceRange),
                website,
                tags
            }

            let createdBusiness = await dispatch(createBusinessThunk(business))

            if (createdBusiness) {
                const imgBody = ({
                    url: imgUrl
                })

                await dispatch("ADD IMAGE TO BUSINESS THUNK HERE", createdBusiness.id)
                setShowErrors(false)
                history.push(`/businesses/${createdBusiness.id}`)
            }
        }
    }

    const handleCancel = async (e) => {
        e.preventDefault()
        history.push('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            {showErrors &&
                <ul>
                    {validationErrors.map((e, i) => {
                        return <div key={i}>{e}</div>
                    })}
                </ul>
            }
            {/*------- BUSINESS NAME  -------*/}
            <div>
                <input
                    type='text'
                    placeholder='Business Name'
                    value={businessName}
                    onChange={updateBusinessName}
                    required />
            </div>
            {/*------ EMAIL ------*/}
            <div>
                <input
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={updateEmail}
                    required />
            </div>
            {/*------ PHONE ------*/}
            <div>
                <input
                    type='text'
                    placeholder='Phone'
                    value={phone}
                    onChange={updatePhone}
                    required />
            </div>
            {/* ------ STREET ADDRESS ------ */}
            <div>
                <input
                    type='text'
                    placeholder='Address'
                    value={streetAddress}
                    onChange={updateStreetAddress}
                    required />
            </div>
            {/*------ CITY ------*/}
            <div>
                <input
                    type='text'
                    placeholder='City'
                    value={city}
                    onChange={updateCity}
                    required />
            </div>
            {/*------- ZIPCODE -------*/}
            <div>
                <input
                    type='number'
                    placeholder='Zipcode'
                    value={zipcode}
                    onChange={updateZipcode}
                    required />
            </div>
            {/*------- STATE -------*/}
            <div>
                <input
                    type='text'
                    placeholder='State'
                    value={state}
                    onChange={updateState}
                    required />
            </div>
            {/*------- ABOUT -------*/}
            <div>
                <textarea
                    type='text'
                    placeholder='About'
                    value={about}
                    onChange={updateAbout}
                    required />
            </div>
            {/*------- LONGITUDE -------*/}
            <div>
                <input
                    type='number'
                    placeholder='Longitude'
                    value={longitude}
                    onChange={updateLongitude}
                    min='-180'
                    max='180'
                    required />
            </div>
            {/*------- LATITUDE -------*/}
            <div>
                <input
                    type='number'
                    placeholder='Latitude'
                    value={latitude}
                    onChange={updateLatitude}
                    min='-90'
                    max='90'
                    required />
            </div>
            {/*------- PRICE RANGE -------*/}
            <div>
                <select
                    value={priceRange}
                    onChange={updatePriceRange}
                    required>
                    <option value='1'>$</option>
                    <option value='2'>$$</option>
                    <option value='3'>$$$</option>
                    <option value='4'>$$$$</option>
                </select>
            </div>
            {/*------- WEBSITE -------*/}
            <div>
                <input
                    type='text'
                    placeholder='WebsiteURL'
                    value={website}
                    onChange={updateWebsite}
                    required />
            </div>
            {/*------- IMG URL -------*/}
            <div>
                <input
                    type='text'
                    placeholder='IMG URL'
                    value={imgUrl}
                    onChange={updateImgUrl}
                    required />
            </div>
            {/*------- TAGS -------*/}
            {/* SOME TYPE OF MODAL HERE FOR TAGS */}
            {/*------- SUBMIT BUTTON -------*/}
            <button type='submit'>Create Your Business</button>
            {/*------- CANCEL BUTTON -------*/}
            <button
                type='button'
                onClick={handleCancel}>
                Cancel
            </button>
        </form>
    )
}

export default CreateBusiness
