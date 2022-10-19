import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
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
    const [priceRange, setPriceRange] = useState(1)
    const [website, setWebsite] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [tags, setTags] = useState([])
}

export default CreateBusiness
