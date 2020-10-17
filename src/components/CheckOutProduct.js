import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';

function CheckOutProduct({id,item,count,decreaseCount,increaseCount,removeItemFromBasket}) {
    return (
        <div className="checkout_product">
                    
            <div className="checkout_productImage">
                <img src={item.image} alt=""/>
            </div>
            
            <div className="checkout_productInfo">
                <div className="df fdc jcsb">
                    <div> 
                        <h1 className="checkout_productTitle">{item.title}</h1>
                        
                        <div className="checkout_productRating">
                            {
                                Array(item.rating).fill()
                                .map((_,i)=>(<StarRateIcon key={i} />))
                            }
                            
                            
                        </div>
                    </div>
                    <div className="df"> 
                        <div className="checkout_productCount">
                            <button onClick={()=>{decreaseCount(id)}}>-</button>
                            <span>{count}</span>
                            <button onClick={()=>{increaseCount(id)}}>+</button>
                        </div>
                        <div>
                            <button className="checkout_removeFromBasket"
                            onClick={()=>removeItemFromBasket(id)}>Remove from Basket</button>
                        </div>
                    </div>
                </div>

                <div className="checkout_productPrice">
                    <p>
                        <small>$</small>
                        <strong>{item.price}</strong>
                    </p>
                </div> 
            </div>   
                            

        </div>
            
    )
}

export default CheckOutProduct
