import {connect} from 'react-redux'
import Login from '../components/Login'

const mapStateToProps = (state) => ({
    user:state.user.user
})

export default connect(mapStateToProps)(Login)