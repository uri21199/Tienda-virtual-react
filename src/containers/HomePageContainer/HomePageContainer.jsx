import React from 'react'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import HomeProducts from '../../components/HomeProducts/HomeProducts'
import useProducts from '../../hooks/useProducts'



const HomePage = () => {

    const propiedad = "trend"
    const propiedad2 = true

    const {data: products} = useProducts ("productos", propiedad, propiedad2)
    
    return (
        <>
            <HomeBanner/>
            <HomeProducts products={products}/>
        </>
    )
}

export default HomePage
