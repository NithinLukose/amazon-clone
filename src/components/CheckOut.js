import React from 'react'
import SubTotal from "../containers/subTotalContainer";
import '../styles/checkout.css'
import CheckOutProduct from './CheckOutProduct'



function CheckOut({items,addToBasket,removeFromBasket,deletefromBasket}) {
    //console.log(Object.keys(items))
    
    const increaseCount = (id) => {
        let data = {
            id,
            title:items[id].item.title,
            price:items[id].item.price,
            image:items[id].item.image,
            rating:items[id].item.rating
        }
        addToBasket(data)
    }

    const decreaseCount = (id) => {
        removeFromBasket(id)
    }

    const removeItemFromBasket = (id) => {
        deletefromBasket(id)
    } 

    return (
        <div className="checkout">
            <div className="checlout_left">
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
                />
                <div>
                    <h1 className="checkout_title">
                        Shopping Cart
                    </h1>
                    {
                        Object.keys(items).map(id=><CheckOutProduct key={id} id={id} item={items[id].item} 
                            count={items[id].count} decreaseCount={decreaseCount} increaseCount={increaseCount} removeItemFromBasket={removeItemFromBasket} />)
                    }
                </div>
            </div>
            <div className="checkout_right">
                <SubTotal />
            </div>
        </div>
    )
}

export default CheckOut
