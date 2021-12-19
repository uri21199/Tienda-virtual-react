import React from 'react'
import { Link } from 'react-router-dom'
import useProducts from '../../hooks/useProducts'
import './FilterMenu.scss'

const FilterMenu = () => {

    const {data} = useProducts("productos")
    
    //traer las categorias

    const categories = data.map(product => product.category)

    const uniqueCategories = [...new Set(categories)]
    

return (
<>
    <div className="divFilter my-3">
        <span id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            Categorías
        </span>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
        {
            uniqueCategories.map(category => (
                <Link to={`/category/${category}`} className="mx-5 py-2 px-4" key={category}>{category}</Link>
            ))
        }
        </ul>
    </div>
</>
)
}

export default FilterMenu