import React from 'react'
import '../styles/subtotal.css'

function SubTotal({amount,count}) {
    return (
        <div className="checkout_subtotal">
            <div className="checkout_subtotal_top">
                <p>Subtotal ({count} item): </p> 
                <span className="checkout_subtotalPrice"> 
                 <small>$</small> <strong>{amount}</strong> 
                </span>
            </div>
            <div className="checkout_subtotalGift">
                <div>
                    <input type='checkbox' />
                </div>
                <div>
                    <span>This order contains a gift</span>
                </div>
            </div>
            <div>
                <button className="checkout_subtotalBuy">Proceed to Buy</button>
            </div>
        </div>
    )
}

export default SubTotal
