import React from 'react'
import FooterBanner from '../../components/FooterBanner/FooterBanner'
import FooterIcon from '../../components/FooterIcon/FooterIcon'
import FooterLinks from '../../components/FooterLinks/FooterLinks'
import './FooterContainer.scss'

const FooterContainer = () => {
    return (
        <>
        <FooterBanner/>
        <footer  className="container-fluid d-flex justify-content-around flex-wrap mb-5 footerAll">
        <FooterIcon/>
        <FooterLinks/>
        </footer>
        </>
    )
}

export default FooterContainer
