import React from 'react'
import '../styles/product.css'
import StarRateIcon from '@material-ui/icons/StarRate';

function Product({id,title,price,image,rating,addToBasket}) {

    const addToCart = (e) => {
        let data = {
            id,
            title,
            price,
            image,
            rating
        }
        addToBasket(data)

    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating).fill()
                        .map((_,i)=>(<StarRateIcon key={i} />))
                    }
                    
                    
                </div>
            </div>
            <img src={image}
            alt=""
            />
            <button onClick={addToCart}>Add to Basket</button>
        </div>
    )
}

export default Product
