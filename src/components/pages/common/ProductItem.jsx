import React from 'react'
import { useCart } from 'react-use-cart'

const ProductItem = (props) => {
    const { addItem } = useCart();
    return (
            <div className="box" key={props.id}
            >
                <div className="box-img">
                    <img src={props.img} />
                    <span>Fresh</span>
                </div>
                <div className="box-content">
                    <h4>{props.title}</h4>
                    <h6>{props.price}$</h6>
                    <button onClick={()=>addItem(props.product)}>Add to card</button>
                </div>
            </div>
    )
}

export default ProductItem
