import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { createBusinessThunk, addBusinessImage } from '../../../store/business'
import { Modal } from '../../../context/Modal'
import './CreateBusiness.css'
import xicon from '../../../assets/icons/x-icon.svg'
import blacknope from '../../../assets/nopes/ratingimgblack.png'
import nope from '../../../assets/nope.png'

const CreateBusiness = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    // const user = useSelector(state => state.session.user)

    const [businessName, setBusinessName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [state, setState] = useState('')
    const [about, setAbout] = useState('')
    const [longitude, setLongitude] = useState('')
    const [latitude, setLatitude] = useState('')
    const [priceRange, setPriceRange] = useState('')
    const [website, setWebsite] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [tags, setTags] = useState([])
    const [validationErrors, setValidationErrors] = useState([])
    const [showErrors, setShowErrors] = useState(false);
    const [showTagModal, setShowTagModal] = useState(false)
    const [helper, setHelper] = useState(false)
    const tagsList = tags

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
    const handleCheck = (e) => {
        // const tagsList = tags
        if (e.target.checked) {
            tagsList.push(e.target.value)
            // tags.push(e.target.value)
            // setTags(tagsList)
            console.log('current tag array', tagsList)
            console.log('tag array that we are sending', tags)
        } else {
            const index = tagsList.indexOf(e.target.value)
            tagsList.splice(index, 1)
            // const index = tags.indexOf(e.target.value)
            // tags.splice(index, 1)
            // setTags(tagsList)
            console.log('current array after removing a tag', tagsList)
            console.log('tag array that we are sending', tags)
        }
        setHelper(!helper)
        // setTags(tagsList)
        // setTags(tags)
    }
    const confirmModal = () => {
        setTags(tagsList)
        setHelper(!helper)
        setShowTagModal(false)
    }
    const exitModal = () => {
        tagsList.splice(0, tagsList.length)
        setShowTagModal(false)
    }
    const clearTags = () => {
        tagsList.splice(0, tagsList.length)
        setShowTagModal(true)
    }

    const mainTagsList = [
        { 'title': 'Acai Bowls' },
        { 'title': 'Bagels' },
        { 'title': 'Bakeries' },
        { 'title': 'Beer, Wine & Spirits' },
        { 'title': 'Breweries' },
        { 'title': 'Bubble Tea' },
        { 'title': 'Butcher' },
        { 'title': 'Coffee & Tea' },
        { 'title': 'Convenience Stores' },
        { 'title': 'Delicatessen' },
        { 'title': 'Desserts' },
        { 'title': 'Donuts' },
        { 'title': 'Farmers Market' },
        { 'title': 'Food Delivery Services' },
        { 'title': 'Food Trucks' },
        { 'title': 'Gelato' },
        { 'title': 'Grocery' },
        { 'title': 'Honey' },
        { 'title': 'Ice Cream & Frozen Yogurt' },
        { 'title': 'Internet Cafes' },
        { 'title': 'Juice Bars & Smoothies' },
        { 'title': 'Poke' },
        { 'title': 'Shaved Ice' },
        { 'title': 'Tortillas' },
        { 'title': 'Afghan' },
        { 'title': 'African' },
        { 'title': 'American' },
        { 'title': 'Asian Fusion' },
        { 'title': 'Barbeque' },
        { 'title': 'Bistros' },
        { 'title': 'Brazilian' },
        { 'title': 'Breakfast & Brunch' },
        { 'title': 'Buffets' },
        { 'title': 'Burgers' },
        { 'title': 'Cafes' },
        { 'title': 'Cajun/Creole' },
        { 'title': 'Caribbean' },
        { 'title': 'Chicken Wings' },
        { 'title': 'Chinese' },
        { 'title': 'Comfort Food' },
        { 'title': 'Cuban' },
        { 'title': 'Danish' },
        { 'title': 'Diners' },
        { 'title': 'Dim Sum' },
        { 'title': 'Dumplings' },
        { 'title': 'Eastern European' },
        { 'title': 'Filipino' },
        { 'title': 'Fish & Chips' },
        { 'title': 'Food Court' },
        { 'title': 'French' },
        { 'title': 'Gastropubs' },
        { 'title': 'German' },
        { 'title': 'Gluten-Free' },
        { 'title': 'Greek' },
        { 'title': 'Halal' },
        { 'title': 'Hawaiian' },
        { 'title': 'Hong Kong Style Cafe' },
        { 'title': 'Fast Food' },
        { 'title': 'Hot Pot' },
        { 'title': 'Indian' },
        { 'title': 'Italian' },
        { 'title': 'Japanese' },
        { 'title': 'Kebab' },
        { 'title': 'Korean' },
        { 'title': 'Kosher' },
        { 'title': 'Raw Food' },
        { 'title': 'Mediterranean' },
        { 'title': 'Mexican' },
        { 'title': 'Middle Eastern' },
        { 'title': 'Noodles' },
        { 'title': 'Pizza' },
        { 'title': 'Salad' },
        { 'title': 'Seafood' },
        { 'title': 'Soul Food' },
        { 'title': 'Soup' },
        { 'title': 'Steakhouse' },
        { 'title': 'Sushi' },
        { 'title': 'Tapas' },
        { 'title': 'Fusion' },
        { 'title': 'Thai' },
        { 'title': 'Vegan' },
        { 'title': 'Vegetarian' },
        { 'title': 'Vietnamese' },
        { 'title': 'Bootcamp' }
    ]

    // NEED TO ADD MORE VALIDATION ERRORS
    useEffect(() => {
        const errors = []
        if (businessName.length > 40 || businessName.length < 1 || !businessName.trim().length) errors.push("Business name must be between 1 and 40 characters")
        if (!email.match(/^\S+@\S+\.\S+$/)) errors.push('Please enter a valid email address')
        if (phone.length !== 10 || isNaN(phone)) errors.push("Please enter a valid phone number")
        if (streetAddress.length > 50 || streetAddress.length < 5 || !streetAddress.trim().length) errors.push("Street address must be between 5 and 50 characters.")
        if (city.length > 20 || city.length < 2 || !city.trim().length) errors.push("City must be between 2 and 20 characters.")
        if (zipcode > 99999 || zipcode < 10000) errors.push("Please enter a valid zip code.")
        if (state.length > 20 || state.length < 2 || !state.trim().length) errors.push('State must be between 2 and 15 characters.')
        if (about.length > 3000 || about.length < 5 || !about.trim().length) errors.push('About must be between 5 and 3000 characters.')
        if (isNaN(longitude) || longitude < -180 || longitude > 180) errors.push("Longitude must be a number between -180 and 180")
        if (isNaN(latitude) || latitude < -90 || latitude > 90) errors.push("Latitude must be a number between -90 and 90")
        if (!priceRange.length) errors.push("Please select a valid price range")
        if (website.length > 75 || website.length < 4) errors.push('Website url must be between 4 and 75 characters.')
        if (!website.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi)) errors.push("Please enter a valid website")
        if (!imgUrl.match(/\.(jpg|jpeg|png|gif)$/)) errors.push('Please enter a valid image(jpg/jpeg/png).')
        if (tags.length !== 3) errors.push('Please select 3 tags for your business')
        // console.log(tags.length)
        setValidationErrors(errors)
    }, [businessName, email, phone, streetAddress, city, zipcode, state,
        about, longitude, latitude, priceRange, website, imgUrl, tags, tagsList, helper ])
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
                longitude: +longitude,
                latitude: +latitude,
                price_range: +priceRange,
                website,
                tag1: tags[0],
                tag2: tags[1],
                tag3: tags[2]
            }

            let createdBusiness = await dispatch(createBusinessThunk(business))

            if (createdBusiness) {
                const imgBody = ({
                    business_id: createdBusiness.id,
                    url: imgUrl
                })
                dispatch(addBusinessImage(imgBody, createdBusiness.id))
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
        <>
            <div className="add-business-nav-bar">
                <div className="add-business-nav-bar-content-wrapper">
                    <img alt='navlogo' id="add-business-nav-bar-logo" src={nope} />
                    <Link to="/">
                        <div className="add-business-nav-bar-back-to-nope">Back to nope</div></Link>
                </div>
            </div>
            <div id='create-business-form-page'>

                <div id='create-form-container-left'>
                    <div id='create-form-header'>
                        <div>
                            <h1>Hello! Let's start with your business information</h1>
                        </div>
                        <div>
                            We'll use this information to help you claim your Nope page.
                            Your new business will load automatically once you submit.
                        </div>
                    </div>

                    <div id='form-content'>
                        <form onSubmit={handleSubmit}>
                            {/* {showErrors &&
                            <ul>
                                {validationErrors.map((e, i) => {
                                    return <div key={i}>{e}</div>
                                })}
                            </ul>
                        } */}
                            {/*------- BUSINESS NAME  -------*/}
                            <div className='create-input-divs'>
                                <input
                                    className='create-business-input'
                                    type='text'
                                    placeholder='Business Name'
                                    value={businessName}
                                    onChange={updateBusinessName}
                                    required />
                            </div>
                            <div className='fragmented-divs-container-address-LL-url'>
                                {/*------ EMAIL ------*/}
                                <div className='fragmented-div-styling'>
                                    <input
                                        className='create-business-input'
                                        type='text'
                                        placeholder='Email'
                                        value={email}
                                        onChange={updateEmail}
                                        required />
                                </div>
                                {/*------ PHONE ------*/}
                                <div className='fragmented-div-styling'>
                                    <input
                                        className='create-business-input'
                                        type='text'
                                        placeholder='Phone'
                                        value={phone}
                                        onChange={updatePhone}
                                        required />
                                </div>
                            </div>
                            <div className='fragmented-container' >
                                {/* ------ STREET ADDRESS ------ */}
                                <div id='address-input-div'>
                                    <input
                                        className='create-business-input'
                                        type='text'
                                        placeholder='Address'
                                        value={streetAddress}
                                        onChange={updateStreetAddress}
                                        required />
                                </div>
                                <div className='fragmented-divs-container-address-LL-url'>
                                    {/*------ CITY ------*/}
                                    <div className='fragmented-address-div'>
                                        <input
                                            className='create-business-input'
                                            type='text'
                                            placeholder='City'
                                            value={city}
                                            onChange={updateCity}
                                            required />
                                    </div>
                                    {/*------- STATE -------*/}
                                    <div className='fragmented-address-div'>
                                        <input
                                            className='create-business-input'
                                            type='text'
                                            placeholder='State'
                                            value={state}
                                            onChange={updateState}
                                            required />
                                    </div>
                                    {/*------- ZIPCODE -------*/}
                                    <div className='fragmented-address-div'>
                                        <input
                                            className='create-business-input'
                                            type='number'
                                            placeholder='Zipcode'
                                            min='10000'
                                            max='99999'
                                            value={zipcode}
                                            onChange={updateZipcode}
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className='fragmented-container'>
                                <div className='fragmented-divs-container-address-LL-url'>
                                    {/*------- LONGITUDE -------*/}
                                    <div className='fragmented-div-styling'>
                                        <input
                                            className='create-business-input'
                                            type='text'
                                            placeholder='Longitude'
                                            value={longitude}
                                            onChange={updateLongitude}
                                            min='-180'
                                            max='180'
                                            required />
                                    </div>
                                    {/*------- LATITUDE -------*/}
                                    <div className='fragmented-div-styling'>
                                        <input
                                            className='create-business-input'
                                            type='text'
                                            placeholder='Latitude'
                                            value={latitude}
                                            onChange={updateLatitude}
                                            min='-90'
                                            max='90'
                                            required />
                                    </div>
                                </div>
                                <div className='fragmented-divs-container-address-LL-url'>
                                    {/*------- WEBSITE -------*/}
                                    <div className='fragmented-div-styling'>
                                        <input
                                            className='create-business-input'
                                            type='text'
                                            placeholder='WebsiteURL'
                                            value={website}
                                            onChange={updateWebsite}
                                            required />
                                    </div>
                                    {/*------- IMG URL -------*/}
                                    <div className='fragmented-div-styling'>
                                        <input
                                            className='create-business-input'
                                            type='text'
                                            placeholder='IMG URL'
                                            value={imgUrl}
                                            onChange={updateImgUrl}
                                            required />
                                    </div>
                                </div>
                            </div>
                            {/*------- PRICE RANGE -------*/}
                            <div id='tags-price-inputs'>
                                <div id='price-select-div-hover'>

                                    {/* <select
                                        value={priceRange}
                                        onChange={updatePriceRange}
                                        required>
                                        <option value=''>Select a price range</option>
                                        <option value='1'>$</option>
                                        <option value='2'>$$</option>
                                        <option value='3'>$$$</option>
                                        <option value='4'>$$$$</option>
                                    </select> */}
                                    <div id='priceHeading'>What is the price range of your business?</div>
                                    <div id='price-setter-container'>
                                        <fieldset id='fieldset-price' className="rate" value={priceRange} onChange={updatePriceRange}>
                                            {/* <input className="priceInput" type="radio" id="rating10" name="rating" value="5" /><label for="rating10" title="5 stars"></label> */}
                                            <input className="priceInput" type="radio" id='rating8' value="4" name='rating' /><label className='lbl' for="rating8" title="4 $"></label>
                                            <input className="priceInput" type="radio" id='rating6' value="3" name='rating' /><label className='lbl' for="rating6" title="3 $"></label>
                                            <input className="priceInput" type="radio" id='rating4' value="2" name='rating' /><label className='lbl' for="rating4" title="2 $"></label>
                                            <input className="priceInput" type="radio" id='rating2' value="1" name='rating' /><label className='lbl' for="rating2" title="1 $"></label>
                                        </fieldset>
                                    </div>
                                </div>
                                {/*------- TAGS -------*/}
                                <div id='click-me'>
                                    <div id='open-tags-modal'>Click here to set your tags</div>
                                    <div>
                                        <div id='tags-button' onClick={clearTags}>
                                            Tags
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*------- ABOUT -------*/}
                            <div id='about-textarea-div'>
                                <textarea
                                    className='create-business-input'
                                    id='create-text-area'
                                    type='text'
                                    placeholder='About'
                                    value={about}
                                    onChange={updateAbout}
                                    required />

                            </div>

                            {showTagModal && (
                                <div id='modal-wrapper'>

                                    <Modal onClose={() => setShowTagModal(false)}>
                                        <div id='modal-header'>
                                            <div id="close-modal" onClick={exitModal}>
                                                Close
                                                <img id="close-modal-icon" src={xicon} alt='close icon' />
                                            </div>
                                            <div id='header-div'>
                                                Select three tags
                                            </div>
                                        </div>
                                        <div id='modal-children-wrapper' className='grid-container'>
                                            <div id='tags-grid'>
                                                {mainTagsList.map(tag => {
                                                    return <div id='input-styling-grid' key={tag.title}>
                                                        <input
                                                            id='checkbox-input'
                                                            type="checkbox"
                                                            onChange={handleCheck}
                                                            name={tag.title}
                                                            value={tag.title}
                                                            disabled={tagsList.length >= 3}
                                                        />
                                                        <label id='text-align-center'>{tag.title}</label>
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                        <div
                                            id='tag-confirm-button'
                                            onClick={confirmModal}>
                                            Confirm
                                        </div>
                                    </Modal>
                                </div>

                            )}
                            <div id='button-width'>
                                <div id='button-container'>
                                    {/*------- SUBMIT BUTTON -------*/}
                                    <div >
                                        <button id='submit-button' type='submit'>Create Your Business</button>

                                    </div>
                                    <div >
                                        {/*------- CANCEL BUTTON -------*/}
                                        <button
                                            id='cancel-button'
                                            type='button'
                                            onClick={handleCancel}>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
                <div id='create-form-page-right-half'>
                    <div id='goop-container'>
                        <img id='goop-validations' src='https://i.imgur.com/CsnWphk.png' alt='gooper' />
                        {showErrors &&
                            <div id={validationErrors.length ? 'validations-div' : 'hidden'} >
                            {/* <div id={`${hiddenDiv(!validationErrors.length)}`} style={{backgroundColor: whatever}}> */}
                                <ul>
                                    {validationErrors.map((e, i) => {
                                        return (
                                            <div id='error-div' key={i}>
                                                <div>
                                                    <img id='bNope' alt='blacknope' src={blacknope} />
                                                </div>
                                                {e}
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div >
        </>
    )
}



export default CreateBusiness
