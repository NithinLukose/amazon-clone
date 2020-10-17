import {connect} from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = (state) => ({
    count:state.basket.count,
    user:state.user.user
}) 

export default connect(mapStateToProps)(Header)
