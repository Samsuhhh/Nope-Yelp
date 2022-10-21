import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createBusinessThunk, addBusinessImage } from '../../../store/business'
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
    const [showErrors, setShowErrors] = useState(false)
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
            setTags(tagsList)
            console.log('current tag array', tagsList)
            console.log('tag array that we are sending', tags)
        } else {
            const index = tagsList.indexOf(e.target.value)
            tagsList.splice(index, 1)
            // const index = tags.indexOf(e.target.value)
            // tags.splice(index, 1)
            setTags(tagsList)
            console.log('current array after removing a tag', tagsList)
            console.log('tag array that we are sending', tags)
        }
        setHelper(!helper)
        // setTags(tagsList)
        // setTags(tags)
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
        if (businessName.length > 40 || businessName.length < 1) errors.push("Business name must be between 1 and 40 characters")
        if (!email.match(/^\S+@\S+\.\S+$/)) errors.push('Please enter a valid email address')
        if (phone.length !== 10) errors.push("Please enter a valid phone number")
        if (streetAddress.length > 50 || streetAddress.length < 5) errors.push("Street address must be between 5 and 50 characters.")
        if (city.length > 20 || city.length < 2) errors.push("City must be between 2 and 20 characters.")
        if (zipcode > 99999 || zipcode < 10000) errors.push("Please enter a valid zip code.")
        if (state.length > 20 || state.length < 2) errors.push('State must be between 2 and 15 characters.')
        if (about.length > 3000 || about.length < 5) errors.push('About must be between 5 and 3000 characters.')
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
        about, longitude, latitude, priceRange, website, imgUrl, tags, tagsList, helper])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setShowErrors(true)
        console.log('--------VALIDATION ERRORS-------', validationErrors)
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
                console.log('what is being sent to the addbusinessimage thunk', imgBody, createdBusiness.id)
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
            {/*------- STATE -------*/}
            <div>
                <input
                    type='text'
                    placeholder='State'
                    value={state}
                    onChange={updateState}
                    required />
            </div>
            {/*------- ZIPCODE -------*/}
            <div>
                <input
                    type='number'
                    placeholder='Zipcode'
                    min='10000'
                    max='99999'
                    value={zipcode}
                    onChange={updateZipcode}
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
                    <option value=''>Select a price range</option>
                    <option value='1'>$</option>
                    <option value='2'>$$</option>
                    <option value='3'>$$$</option>
                    <option value='4'>$$$$</option>
                </select>
                {/* <input
                    type='number'
                    placeholder='Price Range'
                    value={priceRange}
                    onChange={updatePriceRange}
                    required /> */}
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
            <div>
                {mainTagsList.map(tag => (
                    <div key={tag.title}>
                        <input
                            type="checkbox"
                            onChange={handleCheck}
                            name={tag.title}
                            value={tag.title} />
                        <label>{tag.title}</label>
                    </div>
                ))}
            </div>
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
