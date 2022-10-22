import { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBusinessImage } from "../../../store/business";
import './AddBusinessImage.css'
import nope from '../../../assets/nope.png'
import add from '../../../assets/icons/add-icon.svg'
import Footer from '../../Footer/Footer'



export default function AddBusinessImage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { businessId } = useParams()
    const user = useSelector(state => state.session.user)

    const [imgUrl, setImgUrl] = useState('')
    const [showErrors, setShowErrors] = useState(false)
    const [validationErrors, setValidationErrors] = useState([])

    useEffect(() => {
        const errors = []
        if (!imgUrl.match(/\.(jpg|jpeg|png|gif)$/)) errors.push('Please enter a valid image(jpg/jpeg/png).')
        setValidationErrors(errors)
    }, [imgUrl])


    const handleSubmit = async (e) => {
        e.preventDefault()
        setShowErrors(true)
        if (!validationErrors.length) {
            const newImage = {
                business_id: businessId,
                url: imgUrl
            }

            let addedImage = await dispatch(addBusinessImage(newImage, businessId))

            if (addedImage) {
                setShowErrors(false)
                history.push(`/businesses/${businessId}`)
            }
        }
    }

    const handleCancel = async (e) => {
        e.preventDefault()
        history.push(`/businesses/${businessId}`)
    }

    return (
        <>
            <div className="add-business-nav-bar">
                <div className="add-business-nav-bar-content-wrapper">
                <Link to={`/`}>
                    <img id="add-business-nav-bar-logo" src={nope} />
                    </Link>
                    <Link to={`/businesses/${businessId}`}>
                        <div className="add-business-nav-bar-back-to-nope">Back to your page</div></Link>
                </div>
            </div>
            <div className="add-photo-main-wrapper">
                <div className="add-photo-container">
                    <div className="add-photo-icon-graphic">
                        <img id="add-photo-icon" src={add} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        {/* ----DISPLAY VALIDATION ERRORS---- */}
                        {showErrors &&
                            <ul>
                                {validationErrors.map((e, i) => {
                                    return <div id="add-photo-error" key={i}>{e}</div>
                                })}
                            </ul>
                        }
                        {/* ----IMAGE URL---- */}
                        <div>
                            <input
                                id="add-photo-input-field"
                                type='text'
                                placeholder="Image URL"
                                value={imgUrl}
                                onChange={(e) => setImgUrl(e.target.value)}
                                required />
                        </div>
                        <div className="add-photo-button-container">
                        {/* ----SUBMIT BUTTON---- */}
                        <button
                        id="add-photo-submit"
                        type="submit">
                            Add Photo
                            </button>
                        {/* ----CANCEL BUTTON---- */}
                        <button
                            id="add-photo-cancel"
                            type='button'
                            onClick={handleCancel}>
                            Cancel
                        </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="whitespace-footer"></div>
            <Footer />
        </>
    )
}
