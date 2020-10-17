import {SET_USER} from '../actions'

const user = (state={
    user:null
},action) => {
    switch(action.type){
        case SET_USER:
            return{ ...state,user:action.payload}
        default:
            return state
    }
}

export default user