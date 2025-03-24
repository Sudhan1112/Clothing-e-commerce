import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price, names}) => {

    
    const {currency} = useContext(ShopContext);
    console.log( "ngvjhvkb",names);
  return (
    <Link onClick={()=>scrollTo(0,0)} className='text-gray-700 cursor-pointer'  to={`/product/${names}`}>
      <div className=' overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className=' text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem