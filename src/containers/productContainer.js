import {connect} from 'react-redux'
import Product from '../components/Product'
import {addToBasket} from '../actions'

const mapStateToProps = (state,ownProps) => ({
    title:ownProps.title,
    price:ownProps.price,
    image:ownProps.image,
    rating:ownProps.rating,
    id:ownProps.id
})

const mapDispatchToProps = (dispatch) => ({
    addToBasket:(data) =>  dispatch(addToBasket(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Product)