import React from "react"
import { useParams } from "react-router-dom"
import ItemList from "../../components/ItemList/ItemList"
import Loading from "../../components/Loading/Loading"
import './itemListContainer.scss'
import FilterMenu from '../../components/FilterMenu/FilterMenu';
import useProducts from "../../hooks/useProducts"

const ItemListContainer = ({message}) => {

    const {cateId} = useParams()
    let propiedad = "category"

    const {loader, data: products} = useProducts( "productos", propiedad, cateId)

    if(loader){
        return <Loading/>
    } else {
        return (
            <>
            <FilterMenu/>
            <div>
                <h3 className="titlePrin">{message}</h3>
                <ItemList listproducto={products} />
            </div>
            </>
        )
    }
}

export default ItemListContainer
