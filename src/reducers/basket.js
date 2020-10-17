import {ADD_TO_BASKET, REMOVE_FROM_BASKET,DELETE_FROM_BASKET} from '../actions'

const basket = (state={
    basketItems:{},
    count:0
},action) => {
    //console.log(action.payload)
    let basketItems = {}
    let id = 0
    switch(action.type){
        case ADD_TO_BASKET:
            let newItem = action.payload
            basketItems = state.basketItems
            //console.log(basketItems)
            if(basketItems[newItem.id]){
                basketItems[newItem.id].count++
            }
            else{
                basketItems[newItem.id] = {
                    item:newItem,
                    count:1
                }
            }
            
            return {...state,basketItems:{...basketItems},count:state.count+1}
        case REMOVE_FROM_BASKET:
            id = action.payload
            basketItems = state.basketItems
            if(basketItems[id]){
                if(basketItems[id].count>1){
                    basketItems[id].count--
                }
                else{
                    delete basketItems[id]
                }
            }
            return {...state,basketItems:{...basketItems},count:state.count-1}
        case DELETE_FROM_BASKET:
            id = action.payload
            basketItems = state.basketItems
            let countItemsInBasket = 0 
            if(basketItems[id]){
                countItemsInBasket = basketItems[id].count
                delete basketItems[id]
            }
            return {...state,basketItems:{...basketItems},count:state.count-countItemsInBasket}
        default:
            return state
    }
}

export default basket
