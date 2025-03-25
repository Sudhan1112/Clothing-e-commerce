import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Orders = () => {

  const { getCartCount } = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>

      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      {getCartCount() > 0 ? (
        <p className='text-center mt-5 text-lg'>Order placed successfully</p>
      ) : (
        <p className='text-center mt-5 text-lg'>No Orders Found</p>
      )}

    </div>
  )
}

export default Orders