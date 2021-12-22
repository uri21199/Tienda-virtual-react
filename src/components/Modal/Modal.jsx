import React from 'react'
import './Modal.scss'
const Modal = ({children, isOpen, closeModal}) => {

    const handleContainerClick = (e) => e.stopPropagation();

    return (
        <article className={`modalPropio ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modalContainer" onClick={handleContainerClick}>
                <button className="modalClose" onClick={closeModal}>X</button>
                {children}
            </div>
            
        </article>
    )
}

export default Modal
