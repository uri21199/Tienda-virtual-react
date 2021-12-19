import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Loading from '../../components/Loading/Loading'
import db from '../../firebase/config'
import {doc, getDoc} from 'firebase/firestore'
import FilterMenu from '../../components/FilterMenu/FilterMenu';

const ItemDetailContainer = () => {

    const [productsPresents, setProductsPresents] = useState([])
    const [loader, setLoader] = useState(false)
    const { prodId } = useParams()



    useEffect(() => {
        setLoader(true)

        const docRef = doc(db, "productos", prodId)

        getDoc(docRef)
        .then ((doc) =>{
            setProductsPresents({
                id: doc.id,
                ...doc.data()
            })
        })
        .catch(err => console.log(err))
        .finally(() => setLoader(false))

    }, [prodId])


    
    if (loader) {
        return <Loading />
    } else {
        return (
            <>
            <FilterMenu/>
            <ItemDetail products = { productsPresents}/> 
            </>
            )
    }
    
}

export default ItemDetailContainer