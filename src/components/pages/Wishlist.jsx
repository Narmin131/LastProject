import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem2 from './common/ProductItem2'



const WishList = () => {

  const wishlist = useSelector((state)=> state.wishlist)
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mt-5">
          <h2>Your WishList</h2>
        </div>
        {wishlist?.map((item, index) => (
          <div className="col-lg-3 p-2" key={index}>
            <ProductItem2 product={item} />
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default WishList