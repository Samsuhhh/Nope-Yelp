import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { removeBusinessImage } from '../../../store/business'
import trash from '../../../assets/icons/trash-can.svg'
import './BusinessImages.css'

export default function BusinessImages() {
    const dispatch = useDispatch()
    const business = useSelector(state => state.businesses.singleBusiness)
    const user = useSelector(state => state.session.user)


    return (
        <div id="modal-children-wrapper">
            {business.BusinessImages && (
                <div id="modal-children">
                    {business.BusinessImages.map(image => (
                        <div id="gridded-modal-item" key={image.id}>
                            <img id="modal-image" alt='yes' src={image.url}></img>
                            <div>{(user && user.id === business.owner_id) && (
<<<<<<< HEAD
                                <button id="modal-delete-img" onClick={() =>
                                dispatch(removeBusinessImage(image.id))}>
                                    <img id="modal-trash-icon" src={trash} />
=======
                                <button
                                disabled={!(business.BusinessImages.length - 1)}
                                onClick={() => dispatch(removeBusinessImage(image.id))}>
                                    Delete Image
>>>>>>> main
                                </button>
                            )}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
