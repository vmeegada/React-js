import {createStore,combineReducers} from 'redux'
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

function transactionReducer(state=[],action){
    switch(action.type){
        case "ADD":
            return [...state,
                {
                    id:action.payload.id,
                    amount:action.payload.amount,
                    type:action.payload.type,
                     date:action.payload.date}]
    default :
    return state
    }
}

 let rootReducer=combineReducers({
  account: reducer,
  transaction:transactionReducer
})
//combine reducers in redux
const Store =  createStore(rootReducer)
export default Store
