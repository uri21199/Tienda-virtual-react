import React from 'react'
import './BtnAddCart.scss'

const BtnAddCart = ({children, callShow}) => {
    return (
        <button className="btnAddCart mt-3" onClick={callShow}>{children}</button>
    )
}

export default BtnAddCart
