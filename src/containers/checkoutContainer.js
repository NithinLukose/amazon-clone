import {connect} from 'react-redux'
import CheckOut from '../components/CheckOut'
import {addToBasket, removeFromBasket,deleteItemFromBasket} from '../actions'

const mapStateToProps = (state) => ({
    items:state.basket.basketItems,

})

const mapDispatchToProps = (dispatch) => ({
    addToBasket:(data) =>  dispatch(addToBasket(data)),
    removeFromBasket:(data) => dispatch(removeFromBasket(data)),
    deletefromBasket: (data) => dispatch(deleteItemFromBasket(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(CheckOut)