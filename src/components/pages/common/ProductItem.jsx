import React from 'react'
import { useCart } from 'react-use-cart'
import { useTranslation } from 'react-i18next'
const ProductItem = (props) => {
    const { addItem } = useCart();
    const { t } = useTranslation();
    return (
            <div className="box" key={props.id}
            >
                <div className="box-img">
                    <img src={props.img} alt=''/>
                    <span>Fresh</span>
                </div>
                <div className="box-content">
                    <h4>{t(props.title)}</h4>
                    <h6>{props.price}$</h6>
                    <button onClick={()=>addItem(props.product)}>Add to card</button>
                </div>
            </div>
    )
}

export default ProductItem
