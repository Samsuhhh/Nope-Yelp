import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { removeBusinessImage } from '../../../store/business'
import './BusinessImages.css'

export default function BusinessImages() {
    const dispatch = useDispatch()
    const business = useSelector(state => state.businesses.singleBusiness)
    const user = useSelector(state => state.session.user)


    return (
        <div>
            {business.BusinessImages && (
                <div>
                    {business.BusinessImages.map(image => (
                        <div key={image.id}>
                            <img alt='yes' src={image.url}></img>
                            <div>{(user && user.id === business.owner_id) && (
                                <button
                                disabled={!(business.BusinessImages.length - 1)}
                                onClick={() => dispatch(removeBusinessImage(image.id))}>
                                    Delete Image
                                </button>
                            )}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
