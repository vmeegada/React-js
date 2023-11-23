import {createStore} from 'redux'
const initialState ={
    balance :0,
    fullName:"",
    mobile:null

}
function reducer(state=initialState ,action){
    switch(action.type){
        case "deposit"://5+"5"=55,5+ +"5"=10
                    return {...state,balance:state.balance+ +action.payload}
        case "withdraw":
                return {...state,balance:state.balance - +action.payload}
         case "mobileupdate":
                    return {...state,mobile:action.payload}
         case "nameUpdate":
            return {...state,fullName:action.payload}
            case "reset":
                return initialState
         default:
            return state;
    } 

}
const Store =  createStore(reducer)
export default Store
