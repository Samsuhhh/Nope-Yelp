import { useDispatch, useSelector } from 'react-redux'
import { removeBusinessImage } from '../../../store/business'
import trash from '../../../assets/icons/trash-can.svg'
import businessicon from '../../../assets/icons/business.svg'
import './BusinessImages.css'

export default function BusinessImages() {
    const dispatch = useDispatch()
    const business = useSelector(state => state.businesses.singleBusiness)
    const user = useSelector(state => state.session.user)
    let deleteImageHandler;

    const imageOnErrorHandler = (event) => {
        event.currentTarget.src = businessicon;
    };

    return (
        <div id="modal-children-wrapper">
            {business.BusinessImages && (
                <div id="modal-children">
                    {business.BusinessImages.map(image => (
                        <div id="gridded-modal-item" key={image.id}>
                            <img id="modal-image" alt='yes' src={`${image.url}`} onError={imageOnErrorHandler}></img>
                            {deleteImageHandler = async () => {
                                if (window.confirm('Are you sure you want to delete this picture?')) {
                                    if (business.BusinessImages.length >= 2) {
                                        await dispatch(removeBusinessImage(image.id))
                                    } else {
                                        window.alert('Could not delete: Your business must have at least one image')
                                    }
                                }
                            }}
                            <div>{(user && user.id === business.owner_id) && (
                                <button id="modal-delete-img" onClick={deleteImageHandler}>
                                    <img id="modal-trash-icon" src={trash} alt='trash icon' />

                                </button>
                            )}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
