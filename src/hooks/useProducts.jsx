import { collection, getDocs, query, where } from '@firebase/firestore'
import { useEffect, useState } from 'react'
import db from '../firebase/config'

const useProducts = ( coleccion, propiedad, id) => {

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    
    useEffect(() => {
        setLoader(true)

        const productsRef = collection(db, coleccion)

        const q = id ? query(productsRef, where(propiedad, '==', id)) : productsRef

        getDocs(q)
            .then((snapshot) => {
                const items = snapshot.docs.map ((doc) => ({id: doc.id ,...doc.data()}))
                setData(items)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoader(false)
            })

    }, [id])

    return {
        data,
        loader
    }

}

export default useProducts
