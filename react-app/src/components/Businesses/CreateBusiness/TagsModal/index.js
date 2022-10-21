import React, { useState } from 'react';
import { Modal } from './ModalContext.js';
import TagsGrid from './TagsGrid.js';

export function TagsModal() {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <button style={{ cursor: 'pointer' }} onClick={() => setShowModal(true)}>Tags!!</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <TagsGrid />
                </Modal>
            )}
        </>
    );
}

export default TagsModal;