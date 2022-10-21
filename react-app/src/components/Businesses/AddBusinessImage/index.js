import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBusinessImage } from "../../../store/business";
import './AddBusinessImage.css'


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
        <form onSubmit={handleSubmit}>
            {/* ----DISPLAY VALIDATION ERRORS---- */}
            {showErrors &&
                <ul>
                    {validationErrors.map((e, i) => {
                        return <div key={i}>{e}</div>
                    })}
                </ul>
            }
            {/* ----IMAGE URL---- */}
            <div>
                <input
                    type='text'
                    placeholder="Image URL"
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                    required />
            </div>
            {/* ----SUBMIT BUTTON---- */}
            <button type="submit">Add Photo</button>
            {/* ----CANCEL BUTTON---- */}
            <button
                type='button'
                onClick={handleCancel}>
                Cancel
            </button>
        </form>
    )
}
