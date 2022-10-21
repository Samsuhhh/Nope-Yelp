import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './CreateBusiness.css';
import Modal

export function TagModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div onClick={() => setShowModal(true)}>
                Select tags for your business
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>

                </Modal>
            )}
        </>
    )

}



function Modal(props){
    return (
        <div className="modal-tags">
            <div className="modal-tags-content">
                <div className="modal-header">
                    <h4 className="modal-title">Tags</h4>

                </div>
                <div className="modal-footer">
                    <button className="close-modal-button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;