import {connect} from 'react-redux'
import SubTotal from '../components/SubTotal'

const mapStateToProps = (state) => {
    let count = state.basket.count
    let basketItems = state.basket.basketItems
    let totalPrice = 0
    let totalPriceOfEachItem =  Object.keys(basketItems)
    .map(id=>basketItems[id].item.price*basketItems[id].count)
    
    totalPrice = totalPriceOfEachItem.reduce((acc,curr)=>acc+=curr,0)
    console.log(totalPrice)
    return{
        amount:totalPrice,
        count
    }

}

export default connect(mapStateToProps)(SubTotal)