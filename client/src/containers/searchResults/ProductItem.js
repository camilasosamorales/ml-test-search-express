import React from 'react'
import  shippingLogo  from '../../images/ic_shipping.png';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
    
    return (
        <div className="product-item">
            <div className="product-item-image">
                <Link to={`/items/${props.productItem.id}`}>
                {/* <span className="product-item-image-view" style={{ backgroundImage: `url(${props.productItem.picture})` }} /> */}
                <img className='product-item-image-view' src={props.productItem.picture} alt='product' />
                </Link>
            </div>
            <div className="product-item-body">
                <div className="product-item-body-price">
                    <Link to={`/items/${props.productItem.id}`}>
                        ${props.productItem.price.amount}
                    </Link>
                    {props.productItem.free_shipping ? <img className='product-item-shipping' src={shippingLogo} alt='shipping' /> : null}
                </div>

                <h4 className="product-item-body-title">
                    {props.productItem.title}
                </h4>
            </div>

            <div className="product-item-location">
                {props.productItem.address}
            </div>
        </div>
    )

   

}





export default ProductItem;